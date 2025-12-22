
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
import { Bookmark } from 'lucide-react'

function VerticalProductHover({ product, index, className, classNameImg }: VerticalProductHoverProps) {

  return (

    <div

      className={`product-box-5 w-100  ${className}`} data-id={product.id}
    >

      <div className="product-image ratio_110 rounded-2xl overflow-hidden"
        style={{
          width: "100%",
        }}
      >
        <a href={`/product/${product.alias}`}
          style={{
            backgroundImage: `${`url(${product.image})`}  `,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            display: "block",
            aspectRatio: "100/110",
            width: "100%",

          }}
        >
          <ImageError width={400} height={800} src={product.image} data-src={product.image} className={
            `img-fluid lazyload d-none ${classNameImg ?? ''}`
          } alt={product.name} />
        </a>

        <a className="wishlist-top" data-bs-toggle="tooltip"
          data-bs-placement="top" title="Wishlist">
          <Bookmark></Bookmark>
        </a>
        <Box3Option productId={product.id}></Box3Option>
      </div>
      <div className="product-detail">

        <div className="name">
          <a href={`/product/${product.alias}`}>
            <div className="name fw-500">{product.name}</div>
          </a>
        </div>
        <div>
          {product.prices[0].discount_value && product.prices[0].discount_value > 0 && <BoxPrice price={product.prices[0].expense} oldPrice={product.prices[0].price}></BoxPrice>}
          {(!product.prices[0].discount_value || product.prices[0].discount_value === 0) && <BoxPrice price={product.prices[0].price}></BoxPrice>}

          {/* <div className='d-flex gap-2 py-2'>
            <CustomRating numberOfRatings={product.numberOfRatings} rating={product.rating}></CustomRating>
            <h6 className="theme-color ">In Stock</h6>
          </div> */}
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
          {/* <VerticalProductButtonAdd productId={product.id} productPriceId={product.productPriceId} stock={product.stock} isInProcessing={product.isInProcessing} /> */}
        </div>
      </div>
    </div>
  )
}

export default VerticalProductHover