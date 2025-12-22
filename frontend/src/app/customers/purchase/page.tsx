'use client'

import CartBoxAddress from '@/components/features/cart/CartBoxAddress'
import CartBoxSummary from '@/components/features/cart/CartBoxSummary'
import CartBoxVoucher from '@/components/features/cart/CartBoxVoucher'
import PurchaseTable from '@/components/features/purchase/PurchaseTable'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import CustomFormCheck from '@/components/ui/CustomFormCheck'
import { getCart } from '@/lib/api/cart'
import React, { useEffect, useState } from 'react'
import { CartT } from '@/types/common.types'

function Page() {
  const [cart, setCart] = useState<CartT | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCart(data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <>
      <BreadcrumbBackToHome current='Mua hàng' title='Mua hàng'></BreadcrumbBackToHome>
      <section className='section-b-space'>
        <div className="container-fluid-lg">
          <div className='row g-sm-4 g-3'>
            <div className="col-xxl-9 col-md-8">
              {cart?.list?.map((item, index) => (
                <PurchaseTable key={index} item={item} />
              ))}
              <div className="p-4 pb-2 rounded bg-gray">
                <div className="top-selling-box">
                  <div className="pb-3 mb-3 top-selling-title">
                    <div className="mb-0 fw-bold h5">Chọn phương thức thanh toán</div>
                  </div>
                  <div id="boxPaymentMethod" className="row">
                    <div className="mb-3 col-xl-12">
                      <CustomFormCheck id="standard2" value="2" name="payment_method_id" className='d-flex align-items-center'>
                        <img className="w-30" src="/img/icon-payment-method-cod.svg" alt="Thanh toán tiền mặt khi nhận hàng" /> Thanh toán tiền mặt khi nhận hàng
                      </CustomFormCheck>
                    </div>
                    <div className="mb-3 col-xl-12">
                      <CustomFormCheck id="standard7" value="7" name="payment_method_id" className='d-flex align-items-center'>
                        <img className="w-30" src="/img/icon-payment-method-credit.svg" alt="Chuyển khoản qua tài khoản định danh (VA) hoặc Quét mã VietQR" /> Chuyển khoản qua tài khoản định danh (VA) hoặc Quét mã VietQR
                      </CustomFormCheck>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-3 col-md-4 p-sticky'>
              <CartBoxAddress ></CartBoxAddress>
              <CartBoxVoucher ></CartBoxVoucher>
              <CartBoxSummary ></CartBoxSummary>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Page