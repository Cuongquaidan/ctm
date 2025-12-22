"use client"
import CartBoxAddress from '@/components/features/cart/CartBoxAddress'
import CartBoxSummary from '@/components/features/cart/CartBoxSummary'
import CartBoxVoucher from '@/components/features/cart/CartBoxVoucher'
import CartHeader from '@/components/features/cart/CartHeader'
import CartTable from '@/components/features/cart/CartTable'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import { getCart, ToggleSelectionStatus, removeItems, getSummaryCart } from '@/lib/api/cart'
import { CartT, VoucherT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@/components/features/provider/AuthProvider'

function page() {
  const [cart, setCart] = useState<CartT>();
  const [summary, setSummary] = useState<{
    itemTotal: number;
    shippingFee: number;
    totalDiscount: number;
    finalTotal: number;
  }>()
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(true);

  const { handleGetCart } = useAuthContext();
  const handleFetchCart = async () => {
    const resdata = await getCart();
    setCart(resdata);
  }

  const handleGetSummaryCart = async () => {
    const resdata = await getSummaryCart();
    setSummary(resdata);
  }

  useEffect(() => {
    handleFetchCart();
  }, []);

  // Cập nhật isCheckedAll khi cart thay đổi
  useEffect(() => {
    if (cart?.list && cart.list.length > 0) {
      const allChecked = cart.list.every(item => item.is_order === 1);
      setIsCheckedAll(allChecked);
    } else {
      setIsCheckedAll(false);
    }

    handleGetSummaryCart();
  }, [cart]);

  // Check/Uncheck ALL
  const handleCheckAll = async () => {
    const allCartIds = cart?.list.map(item => item.id) || [];
    // Toggle dựa trên trạng thái hiện tại
    const newIsOrder: 0 | 1 = isCheckedAll ? 0 : 1;
    await ToggleSelectionStatus(allCartIds, newIsOrder);
    handleFetchCart();
  };

  // Check/Uncheck một store
  const handleCheckStore = async (storeId: number) => {
    const storeItems = cart?.list.filter(item => item.store_id === storeId) || [];
    const storeCartIds = storeItems.map(item => item.id);
    const isAllChecked = storeItems.every(item => item.is_order === 1);
    const isOrder: 0 | 1 = isAllChecked ? 0 : 1;
    await ToggleSelectionStatus(storeCartIds, isOrder);
    handleFetchCart();
  };

  const handleCheckItem = async (cartId: number) => {
    const item = cart?.list.find(i => i.id === cartId);
    if (!item) return;
    const isOrder: 0 | 1 = item.is_order === 1 ? 0 : 1;
    await ToggleSelectionStatus([cartId], isOrder);
    handleFetchCart();
  };

  // Clear all items
  const handleClearAll = async () => {
    const allCartIds = cart?.list.map(item => item.id) || [];
    await removeItems(allCartIds);
    handleFetchCart();// Refresh cart in component
    handleGetCart();// Refresh cart in AuthContext
    handleGetSummaryCart();
  };




  return (
    <>
      <BreadcrumbBackToHome title='Giỏ hàng' current='Giỏ hàng'></BreadcrumbBackToHome>

      <section className="section-b-space">
        <div className="container-fluid-lg">
          <form method="post" id="frmPurchase" encType="multipart/form-data" className="form-horizontal" data-toggle="validator" role="form">
            <div className="row g-sm-4 g-3">
              <div className="col-xxl-9 col-md-8">
                <CartHeader
                  total={cart?.list.length || 0}
                  clearAll={handleClearAll}
                  isAllChecked={isCheckedAll}
                  onCheckAll={handleCheckAll}

                />
                {cart?.stores && Object.values(cart.stores).map((store, index) => (
                  <CartTable
                    key={store.id}
                    storeId={store.id}
                    storeName={store.name}
                    storeAlias={store.alias}
                    items={store.items}
                    onCheckStore={handleCheckStore}
                    onCheckItem={handleCheckItem}
                    refresh={handleFetchCart}
                    voucherStores={cart.storeVouchers}
                  />
                ))}
              </div>
              <div className='col-xxl-3 col-md-4 p-sticky'>
                <CartBoxAddress></CartBoxAddress>
                <CartBoxVoucher refresh={handleFetchCart} selectedVoucher={cart?.voucher ?? undefined} ></CartBoxVoucher>
                <CartBoxSummary refresh={handleFetchCart} total={summary?.itemTotal} totalDiscount={summary?.totalDiscount} shippingFee={summary?.shippingFee} finalTotal={summary?.finalTotal}></CartBoxSummary>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default page