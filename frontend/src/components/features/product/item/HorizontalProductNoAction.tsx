
import { ProductT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import BoxPrice from '@/components/features/product/components/BoxPrice'
import { IMAGES_BASE_URL } from '@/lib/constants/constants'

interface HorizontalProductProps {
  product: ProductT;
  classOfItem?: string;
  classOfImg?: string;
}

function HorizontalProduct({ product, classOfItem, classOfImg }: HorizontalProductProps) {
  return (
    <div className="col-12 px-0">
      <div className={`product-box-4 productBox wow fadeInUp ${classOfItem || ''}`}
        data-id="1217" data-price="833" data-wow-daley="0.05s">
        <a href={`/product/${product.alias}`} className={`product-image ${classOfImg || ''}`}>
          <ImageError width={100} height={100} src={product.image !== null ? IMAGES_BASE_URL + "/" + product.image : '/images/logo.png'} data-src={product.image !== null ? IMAGES_BASE_URL + "/" + product.image : '/images/logo.png'} className="img-fluid lazyload" alt={product.name} />
        </a>
        <div className="product-details w-100">
          <a style={{
            display: "inline-block",
            height: "fit-content"
          }} href={`/product/${product.alias}`}>
            <div className="name fw-500">
              {product.name}
            </div>
          </a>
          <CustomRating rating={product.review_point} numberOfRatings={product.review_total} />
          <BoxPrice price={product.prices[0].price}></BoxPrice>
        </div>

      </div>
    </div>
  )
}

export default HorizontalProduct