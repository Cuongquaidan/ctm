
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import { ProductT } from '@/types/common.types'
import BoxPrice from '@/components/features/product/components/BoxPrice'
import VerticalProductButtonAdd from '@/components/features/product/components/VerticalProductButtonAdd'
interface VerticalProductProps {
  product: ProductT;
  index: number;
  className?: string;
  classNameImg?: string;
  flash_type?: string;
}
import WishListButton from '@/components/ui/button/WishListButton'
import Box3Option from '@/components/features/product/components/Box3Option'
import { FLASH_SALE_TYPES, IMAGES_BASE_URL } from '@/lib/constants/constants'
import { getInfoTimeFlashSale } from '@/lib/helper'

function VerticalProduct({ product, index, flash_type, className, classNameImg }: VerticalProductProps) {
  const { flashType } = getInfoTimeFlashSale()

  return (

    <div

      className={`product-box productBox ${className}`} data-id={product.id}
    >
      <div className="product-image">
        <a href={`/product/${product.alias}`}>
          <ImageError width={400} height={400} src={product.image !== null ? IMAGES_BASE_URL + (product.image[0] !== "/" ? "/" : "") + product.image : '/images/logo.png'} className={
            `img-fluid ${classNameImg ?? ''}`
          } alt={product.name || 'honeynet'} />
        </a>
        <div className="label-flex boxLabel justify-between flex">
          <div className="d-flex">
            {(product.prices?.[0]?.discount_value ?? 0) > 0 && flash_type && (
              <>
                <div className="discount sm-discount flash_sale me-2 align-items-center ">
                  <span className="text-white"><i className="fa-solid fa-bolt me-1 block"></i>Flash Sale</span>
                </div>
                <div className="discount sm-discount discount_box bg-danger  align-items-center">
                  <span>-{product.prices[0].discount_value}%</span>
                </div>
              </>
            )}
          </div>
          <WishListButton productId={product.id} />
        </div>
        {/* <Box3Option productId={product.id}></Box3Option> */}
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

          <CustomRating numberOfRatings={product.review_total} rating={product.review_point}></CustomRating>
          {
            flash_type && FLASH_SALE_TYPES.indexOf(flash_type || '') === FLASH_SALE_TYPES.indexOf(flashType) ? (
              <div className="progress flash-sale bg-danger my-3">
                <div className="progress-bar" style={{ width: "50%" }}></div>
                <div className="progress-text">Đang bán chạy</div>
              </div>
            ) : (flash_type && FLASH_SALE_TYPES.indexOf(flash_type || '') < FLASH_SALE_TYPES.indexOf(flashType)) ? (
              <div className="progress flash-sale bg-danger disabled opacity-50 my-3">
                {/* <div className="progress-bar disabled" style={{ width: "50%" }}></div> */}
                <div className="progress-text">Đã kết thúc</div>
              </div>
            ) : (flash_type && FLASH_SALE_TYPES.indexOf(flash_type || '') > FLASH_SALE_TYPES.indexOf(flashType)) ? (
              <div className="progress flash-sale  my-3">
                <div className="progress-bar" style={{ width: "100%" }}></div>
                <div className="progress-text">Sắp diễn ra</div>
              </div>
            )
              : null
          }
          {
            flash_type === flashType && (
              <VerticalProductButtonAdd productId={product.id} productPriceId={product.prices?.[0]?.product_price_id ?? 0} stock={product.prices?.[0]?.remaining_quantity ?? 0} />

            )
          }
          {
            !flash_type && (
              <VerticalProductButtonAdd productId={product.id} productPriceId={product.prices?.[0]?.product_price_id ?? 0} stock={product.prices?.[0]?.remaining_quantity ?? 0} />
            )
          }

        </div>
      </div>
    </div>
  )
}

export default VerticalProduct