import React from 'react'
import CustomRating from '../product/components/CustomRating'
import { StoreAdT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'

function StoreAdItem({ item }: { item: StoreAdT }) {
  return (
    <div className='product-slider'>
      <a href="shop-left-sidebar.html" className="product-slider-image">
        <ImageError src={item.imageUrl} width={382} height={235} className="w-100  lazyload rounded-3" alt={item.title}></ImageError>
      </a>

      <div className="product-slider-detail">
        <div>
          <a href="shop-left-sidebar.html" className="d-block">
            <h3 className="text-title">{item.title}</h3>
          </a>
          <h5>{item.subtitle}</h5>
          <CustomRating numberOfRatings={item.numberOfRatings} rating={item.rating} ></CustomRating>
          <h6>By <span className="theme-color">{item.name}</span></h6>
          <button
            className="btn btn-animation product-button btn-sm">Shop Now <i
              className="fa-solid fa-arrow-right icon"></i></button>
        </div>
      </div>
    </div>
  )
}

export default StoreAdItem