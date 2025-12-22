import ImageError from '@/components/ui/ImageError'
import React from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import { ProductT } from '@/types/common.types'
import BoxPrice from '@/components/features/product/components/BoxPrice'

interface VerticalProductWishListProps {
  product: ProductT;
  index: number;
  refresh?: () => void;
}
import VerticalProductButtonAdd from '@/components/features/product/components/VerticalProductButtonAdd'
import { removeWishListItem } from '@/lib/api/wishlist'
import { IMAGES_BASE_URL } from '@/lib/constants/constants'
import { useAuthContext } from '../../provider/AuthProvider'

function VerticalProductWishList({ product, index, refresh }: VerticalProductWishListProps) {
  const { handleGetNumberOfItemsInWishlist } = useAuthContext();
  const handleRemoveWishList = async () => {
    const res = await removeWishListItem(product.id);
    if (res) {
      refresh && refresh();
      handleGetNumberOfItemsInWishlist && handleGetNumberOfItemsInWishlist();
    }

  }
  return (
    <div className="product-box-3 h-100 bg-white" data-id={product.id} data-price="446" data-wow-daley={`${index * 0.05}s`}>
      <div className="product-header"> <div className="product-image">
        <a href={product.alias}>
          <ImageError width={400} height={400} src={IMAGES_BASE_URL + "/" + product.image} data-src={IMAGES_BASE_URL + "/" + product.image} className="img-fluid lazyload" alt="Thịt ốc bươu" />
        </a>
        <div className="label-flex boxLabel justify-between flex relative">
          <div className="d-flex">
            {(product?.prices[0].discount_value ?? 0) > 0 && (
              <>
                <div className="discount sm-discount flash_sale me-2 align-items-center ">
                  <span className="text-white"><i className="fa-solid fa-bolt me-1 block"></i>Flash Sale</span>
                </div>
                <div className="discount sm-discount discount_box bg-danger  align-items-center">
                  <span>-{product?.prices[0].discount_value}%</span>
                </div>
              </>
            )}
          </div>
          <button className="btn wishlist-button close_button absolute top-0 right-0  "
            style={{
              boxShadow: "1px 1px 1px #ccc",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              padding: "0px",
            }}
            onClick={handleRemoveWishList} >
            <i className="far fa-xmark"></i>
          </button>
        </div>
      </div>
      </div>
      <div className="product-footer">
        <div className="product-detail">
          <div className="h-45">
            <a href={product.alias}>
              <div className="name fw-500">{product.name}</div>
            </a>
          </div>
          <div>
            <BoxPrice price={product.prices[0].price}></BoxPrice>
            <CustomRating numberOfRatings={product.review_total} rating={product.review_point}></CustomRating>

            <VerticalProductButtonAdd productId={product.id} productPriceId={product?.prices[0].product_price_id} stock={product?.prices[0].remaining_quantity} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerticalProductWishList