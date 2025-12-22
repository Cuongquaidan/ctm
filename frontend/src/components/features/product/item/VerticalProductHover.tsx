
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import { ProductT } from '@/types/common.types'
import BoxPrice from '@/components/features/product/components/BoxPrice'
import VerticalProductButtonAdd from '@/components/features/product/components/VerticalProductButtonAdd'
interface VerticalProductHoverProps {
  product: ProductT;
  index: number;
  className?: string;
  classNameImg?: string;
}
import Box3Option from '@/components/features/product/components/Box3Option'

function VerticalProductHover({ product, index, className, classNameImg }: VerticalProductHoverProps) {

  return (

    <div

      className={`product-box productBox ${className}`} data-id={product.id}
    >
      {product.hot && (<div className="label-tag">
        <span>NEW</span>
      </div>)}
      <div className="product-image">
        <a href={`/product/${product.alias}`}>
          <ImageError width={400} height={400} src={product.image} data-src={product.image} className={
            `img-fluid lazyload ${classNameImg ?? ''}`
          } alt={product.name} />
        </a>
        <div className="label-flex boxLabel justify-between flex">
          {/* <div className="d-flex">
            {(product?.discount ?? 0) > 0 && (
              <>
                <div className="discount sm-discount flash_sale me-2 align-items-center ">
                  <span className="text-white"><i className="fa-solid fa-bolt me-1 block"></i>Flash Sale</span>
                </div>
                <div className="discount sm-discount discount_box bg-danger  align-items-center">
                  <span>-{product.discount}%</span>
                </div>
              </>
            )}
          </div> */}
          {/* <WishListButton productId={product.id} /> */}
        </div>
        <Box3Option productId={product.id}></Box3Option>
      </div>
      <div className="product-detail">

        <div className="h-45">
          <a href={`/product/${product.alias}`}>
            <div className="name fw-500">{product.name}</div>
          </a>
        </div>
        <div>
          {product.prices[0].discount_value > 0 && <BoxPrice price={product.prices[0].expense} oldPrice={product.prices[0].price}></BoxPrice>}
          {product.prices[0].discount_value === 0 && <BoxPrice price={product.prices?.[0]?.price ?? 0}></BoxPrice>}

          <div className='d-flex gap-2 py-2'>
            <CustomRating numberOfRatings={product.review_total} rating={product.review_point}></CustomRating>
            <h6 className="theme-color ">In Stock</h6>
          </div>
          {/* {
            product.isInProcessing ? (
              <div className="progress flash-sale bg-danger my-3">
                <div className="progress-bar" style={{ width: "50%" }}></div>
                <div className="progress-text">Đang bán chạy</div>
              </div>
            ) : (
              <div className="progress flash-sale bg-danger disabled opacity-50 my-3">
                <div className="progress-bar disabled" style={{ width: "50%" }}></div>
                <div className="progress-text">Đã kết thúc</div>
              </div>
            )
          } */}
          <VerticalProductButtonAdd productId={product.id} productPriceId={product.prices[0].product_price_id} stock={product.prices[0].remaining_quantity} />
        </div>
      </div>
    </div>
  )
}

export default VerticalProductHover