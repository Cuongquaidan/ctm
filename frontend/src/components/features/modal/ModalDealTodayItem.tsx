import { ProductT } from '@/types/common.types'
import React from 'react'
import BoxPrice from '@/components/features/product/components/BoxPrice'

interface ModalDealTodayItemProps {
  index: number,
  item: ProductT
}
function ModalDealTodayItem({ index, item }: ModalDealTodayItemProps) {
  return (
    <li className={`list-${index % 3 + 1}`}>
      <div className="deal-offer-contain">
        <a href="shop-left-sidebar.html" className="deal-image">
          <img src={item.image} className=" lazyload"
            alt={item.name} />
        </a>

        <a href="shop-left-sidebar.html" className="deal-contain">
          <h5>{item.name}</h5>
          <h6>  <BoxPrice price={item?.prices[0]?.expense || 0} oldPrice={item?.prices[0]?.price || 0}></BoxPrice> <span>{item?.prices[0]?.packageName}</span></h6>
        </a>
      </div>
    </li>
  )
}

export default ModalDealTodayItem