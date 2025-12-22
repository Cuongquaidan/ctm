"use client"
import TrashIconButton from '@/components/ui/button/TrashIconButton';
import { removeItems } from '@/lib/api/cart';
import { CartItemT } from '@/types/common.types';
import React from 'react'
import { useAuthContext } from '../provider/AuthProvider';

interface CartTableHeaderProps {
  storeName?: string;
  storeSlug?: string;
  count?: number;
  storeId: number;
  isStoreChecked: boolean;
  items: CartItemT[];
  onCheckStore: (storeId: number) => void;
  refresh: () => void;
}

function CartTableHeader({
  storeName,
  storeSlug,
  count,
  storeId,
  isStoreChecked,
  items,
  onCheckStore,
  refresh,
}: CartTableHeaderProps) {
  const { handleGetCart } = useAuthContext();
  const handleDelete = async () => {
    const cartIds = items.map(item => item.id);
    const res = await removeItems(cartIds);
    if (res) {
      await handleGetCart();
      await refresh();
    }
  }
  return (
    <div className="cart-header py-2">
      <div className="d-flex align-items-center">
        <div className="p-0" style={{ width: "24px" }}>
          <div className="form-check p-0 m-0">
            <input
              className="checkbox_animated check-box me-0 storeCheckbox"
              type="checkbox"
              checked={isStoreChecked}
              onChange={(e) => onCheckStore(storeId)}
            />
          </div>
        </div>
        <div className="px-3 flex-1">
          <a className="text-black h5" href={`/store/${storeSlug}`}>
            <i className="fa-solid fa-store me-2"></i>{storeName} <span className="text-lowercase">({count} Sản phẩm)</span>
          </a>
        </div>
        <div className="p-0" style={{ width: "26px" }}>
          <TrashIconButton handleConfirm={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default CartTableHeader