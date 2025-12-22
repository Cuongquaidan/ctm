import { CartItemT, VoucherStoreT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'
import CartTableHeader from '@/components/features/cart/CartTableHeader'
import CartTableBody from '@/components/features/cart/CartTableBody'
import CartTableFooter from '@/components/features/cart/CartTableFooter'

interface CartTableProps {
  storeId: number;
  storeName?: string;
  storeAlias?: string;
  items?: CartItemT[];
  voucherStores?: Record<string, VoucherStoreT>;
  onCheckStore: (storeId: number) => void;
  onCheckItem: (cartId: number) => void;
  refresh: () => void;
}

function CartTable({
  storeId,
  storeName,
  storeAlias,
  items,
  voucherStores,
  onCheckStore,
  onCheckItem,
  refresh,
}: CartTableProps) {

  const isStoreChecked = items ? items.every(item => item.is_order === 1) : false;

  return (
    <div className='cartTable bg-gray px-3 py-2 rounded mb-4'>
      {items && (
        <>
          <CartTableHeader
            storeName={storeName}
            storeSlug={storeAlias}
            count={items.length}
            storeId={storeId}
            isStoreChecked={isStoreChecked}
            items={items}
            onCheckStore={onCheckStore}
            refresh={refresh}
          />
          <CartTableBody
            items={items}
            onCheckItem={onCheckItem}
            refresh={refresh}
          />
          <CartTableFooter storeId={storeId}
            voucherSelected={voucherStores?.[storeId + ""]}
            refresh={refresh}
          />
        </>
      )}
    </div>
  )
}

export default CartTable