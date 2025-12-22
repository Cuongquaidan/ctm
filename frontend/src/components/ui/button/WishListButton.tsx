"use client"
import { useModalLogin } from '@/app/(sites)/layout';
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { addToWishList, removeWishListItem } from '@/lib/api/wishlist';
import { ProductT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'

interface WishListButtonProps {
  productId: number;
  color?: string;
  hasTooltip?: boolean;
}

function WishListButton({ productId, color, hasTooltip = false }: WishListButtonProps) {
  const { hasAuth, handleGetNumberOfItemsInWishlist, wishlistIds = [], handleGetIds } = useAuthContext();
  const { setIsOpen } = useModalLogin();
  const [isInWishList, setIsInWishList] = useState<boolean>(false);

  useEffect(() => {
    setIsInWishList(wishlistIds.includes(productId));
  }, [wishlistIds, productId]);

  const handleToggleWishList = async () => {
    if (!hasAuth) {
      handleGetNumberOfItemsInWishlist();
      setIsOpen(true);
      return;
    }
    if (isInWishList) {
      const res = await removeWishListItem(productId);
      if (res) {
        setIsInWishList(false);
        handleGetIds();
        handleGetNumberOfItemsInWishlist();
      }
    } else {
      const res = await addToWishList(productId);
      if (res) {
        setIsInWishList(true);
        handleGetIds();
        handleGetNumberOfItemsInWishlist();
      }
    }
  }
  return (
    <button className={`notifi-wishlist btnWishlist  cursor-pointer pt-1 ${hasTooltip ? 'tooltip-container' : ''}`} onClick={handleToggleWishList}>
      {hasTooltip && <p className='custom-tooltip'>Wishlist</p>}
      <i
        className={`fa-heart font-20 text-theme  ${isInWishList ? 'fa-solid' : 'fa-light'}`}
        style={{ color: color || 'var(--theme-color)' }}
      ></i>
    </button>
  )
}

export default WishListButton