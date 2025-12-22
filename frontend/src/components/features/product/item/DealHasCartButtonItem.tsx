import { ProductT } from '@/types/common.types';
import ImageError from '@/components/ui/ImageError';
import Link from 'next/link';
import React from 'react'
import CustomRating from '../components/CustomRating';
import BoxPrice from '../components/BoxPrice';
import CountdownTimer from '@/components/ui/CountdownTimer';
import CartButtonV2 from '@/components/ui/button/CartButtonV2';

interface DealHasCartButtonItemProps {
  item: ProductT;
}

function DealHasCartButtonItem({
  item
}: DealHasCartButtonItemProps) {
  return (
    <div className="deal-box wow fadeInUp">
      <Link href={`/product/${item.alias}`} className="category-image order-sm-2">
        <ImageError width={183} height={179} src={item.image} className="img-fluid  lazyload"
          alt={item.name} />
      </Link>

      <div className="deal-detail order-sm-1">
        <CartButtonV2 product={item}></CartButtonV2>
        <div className="hot-deal">
          <span>Hot Deals</span>
        </div>
        <CustomRating

          numberOfRatings={item.review_total}
          rating={item.review_point}

        ></CustomRating>
        <Link href={`/product/${item.alias}`} className="category-image order-sm-2">
          <h5>{item.name}</h5>
        </Link>
        <BoxPrice price={item.prices[0].expense} oldPrice={item.prices[0].price}></BoxPrice>
        <div className="progress custom-progressbar">
          <div className="progress-bar" style={{ width: "50%" }} role="progressbar"></div>
        </div>
        <h4 className="item">Sold: <span>30 Items</span></h4>
        <h4 className="offer">Hurry up offer end in</h4>
        {/* {
          item.startDateFlashsale && item.endDateFlashsale && (
            <CountdownTimer startDate={item.startDateFlashsale} endDate={item.endDateFlashsale} hasText={false}></CountdownTimer>
          )
        } */}
      </div>
    </div>
  )
}

export default DealHasCartButtonItem