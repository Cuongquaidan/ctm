
import { ProductT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import BoxPrice from '@/components/features/product/components/BoxPrice'
import BoxOption from '@/components/features/product/components/BoxOption'
import { IMAGES_BASE_URL } from '@/lib/constants/constants'

interface HorizontalProductProps {
  product: ProductT;
}

function HorizontalProduct({ product }: HorizontalProductProps) {

  return (
    <div className="col-12 px-0">
      <div className="product-box-4 productBox wow fadeInUp" data-wow-daley="0.05s">
        <a href={`/product/${product.alias}`} className="product-image">
          {/* <div className="label-flex boxLabel p-1" style={{ zIndex: 1 }}>
            <div className="d-flex flex-column align-items-start">
              <div className="discount sm-discount flash_sale mb-1 d-none align-items-center">
                <span className="text-white"><i className="fa-solid fa-bolt me-1"></i>Flash Sale</span>
              </div>
              <div className="discount sm-discount discount_box bg-danger d-none align-items-center">
                <span>0</span>
              </div>
            </div>
          </div> */}
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
          <BoxOption product={product}></BoxOption>
        </div>

      </div>
    </div>
  )
}

export default HorizontalProduct