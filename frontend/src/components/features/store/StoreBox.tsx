import { StoreT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import Link from 'next/link';

interface StoreBoxProps {
  store: StoreT;
}

function StoreBox({ store }: StoreBoxProps) {
  return (
    <div className="vendor-box">
      <div className="verndor-contain">
        <div className="vendor-image">
          <ImageError width={400} height={400} src={store.image !== null ? IMAGES_BASE_URL + "/" + store.image : '/images/logo.png'} className="lazyload w-40 h-40" alt={store.name} />
        </div>
        <div className="vendor-name">
          <h5 className="fw-500">{store.name}</h5>
          {/* <div className="product-rating mt-1">
            <ul className="rating">
              <li>
                <i className="fa-solid fa-star text-warning"></i>
              </li>
              <li>
                <i className="fa-solid fa-star text-warning"></i>
              </li>
              <li>
                <i className="fa-solid fa-star text-warning"></i>
              </li>
              <li>
                <i className="fa-regular fa-star text-warning"></i>
              </li>
              <li>
                <i className="fa-regular fa-star text-warning"></i>
              </li>
            </ul>
            <span className="review boxReview ">(<span className="reviewNumber m-0">8</span> Đánh giá)</span>
            <!-- <span className="ms-0 boxSold d-none">Đã bán <span className="soldNumber m-0">0</span></span> -->
          </div> */}
          <CustomRating rating={store.review_point} numberOfRatings={0}></CustomRating>
        </div>
      </div>
      <p className="vendor-detail">{store.des}</p>
      <div className="vendor-list mb-3">
        <ul>
          <li>
            <div className="address-contact flex-column">
              <h5><i className="fa-regular fa-map-pin me-1"></i>Địa chỉ:</h5>
              <span className="text-content">{store.address}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Link className="btn border btn-outline-success btn-sm" href={`/store/${store.alias}`}>Xem shop <i className="fa-solid fa-arrow-right icon"></i></Link>
        </div>
        <div className="col-md-6">
          <a className="btn border btn-outline-success btn-sm" href="#">Theo dõi <i className="fa-solid fa-plus icon"></i></a>
        </div>
      </div>
    </div>
  )
}

export default StoreBox