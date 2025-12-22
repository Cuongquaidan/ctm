import { ProductT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import Box3Option from '@/components/features/product/components/Box3Option';
import CustomRating from '@/components/features/product/components/CustomRating';
import { formatCurrency } from '@/lib/helper';
import VerticalProductButtonAdd from '@/components/features/product/components/VerticalProductButtonAdd';
interface ListItemProps {
  product: ProductT;
}
function ListItem({ product }: ListItemProps) {
  return (
    <div className="product-box-3 h-100 wow fadeInUp">
      <div className="product-header">
        <div className="product-image">
          <a >
            <ImageError src={product.image} width={300} height={300}
              className="img-fluid lazyload" alt={product.name} />
          </a>

          <Box3Option productId={product.id} />
        </div>
      </div>
      <div className="product-footer">
        <div className="product-detail">
          <span className="span-name">{product.name}</span>
          <a >
            <h5 className="name">{product.name}</h5>
          </a>
          <p className="text-content mt-1 mb-2 product-content" dangerouslySetInnerHTML={{
            __html: product.content
          }
          }></p>
          <CustomRating numberOfRatings={product.review_total} rating={product.review_point}></CustomRating>
          <h6 className="unit">{product.prices[0].packageName}</h6>
          <h5 className="price"><span className="theme-color">{formatCurrency(product.prices[0].price)}</span> <del>0</del>
          </h5>
          <div className='row'>
            <div className='col-12 d-flex'>
              <VerticalProductButtonAdd productId={product.id} productPriceId={product.prices[0].product_price_id} stock={product.prices[0].remaining_quantity} ></VerticalProductButtonAdd>
              <div className='flex-1'></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem