"use client"
import React from 'react'
import CustomRating from '../components/CustomRating'
import Box2Option from '../components/Box2Option'
import { ProductT } from '@/types/common.types'
import WishListButton from '@/components/ui/button/WishListButton';
import ImageError from '@/components/ui/ImageError';
import Link from 'next/link';
import BoxPrice from '@/components/features/product/components/BoxPrice';
import GroupCartAction from '@/components/ui/button/GroupCartAction';

interface VerticalProduct2ActionsProps {
  item: ProductT;
}

function VerticalProduct2Actions({ item }: VerticalProduct2ActionsProps) {
  return (
    <div className="product-box-4">
      <div className="product-image">
        <div className="label-flex justify-between">
          {/* <div className={`${item.prices[0].discount_value && item.prices[0].discount_value > 0 ? 'discount' : ''}`}>
            {item.prices[0].discount_value && item.prices[0].discount_value > 0 && (<label>-{item.prices[0].discount_value}%</label>)}
          </div> */}
          <WishListButton productId={item.id}></WishListButton>
        </div>

        <Link href={`/product/${item.alias}`}>
          <ImageError src={item.image} alt={item.name} width={500} height={500} className='img-fluid' />
        </Link>

        <Box2Option></Box2Option>
      </div>

      <div className="product-detail">
        <CustomRating numberOfRatings={item.review_total} rating={item.review_point}></CustomRating>
        <Link href={`/product/${item.alias}`}>
          <h5 className="name">{item.name}</h5>
        </Link>
        <BoxPrice price={item.prices[0].expense} oldPrice={item.prices[0].price}></BoxPrice>
        <GroupCartAction productId={item.id} productPriceId={item.prices[0].product_price_id} stock={item.prices[0].remaining_quantity}></GroupCartAction>
      </div>
    </div>

  )
}

export default VerticalProduct2Actions