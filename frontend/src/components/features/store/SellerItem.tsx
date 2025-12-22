import { StoreT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import Link from 'next/link'
import React from 'react'
import CustomRating from '../product/components/CustomRating'
import { IMAGES_BASE_URL } from '@/lib/constants/constants'

function SellerItem({ item }: { item: StoreT }) {

  return (
    <div className="seller-grid-box seller-grid-box-1 h-100 d-flex flex-column">
      <div className="grid-image mb-0">
        <div className="image bg-white">
          <ImageError
            src={item.image !== null ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'} alt={item.name || "honeynet"} width={415} height={333} className="img-fluid" />
        </div>
        <div className="contain-name  ">
          <div>
            <h3 className="mb-0">{item.name}</h3>
            <div className="since-number">
              <CustomRating numberOfRatings={item.review_total} rating={item.review_point}></CustomRating>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-contain flex-1 d-flex flex-column mt-3">
        <div className="seller-contact-details mb-3">
          <div className="saller-contact">
            <div className="seller-icon">
              <i className="fa-solid fa-map-marker"></i>
            </div>

            <div className="contact-detail">
              <h5>Địa chỉ: <span> {item.address}</span></h5>
            </div>
          </div>
          <div className="saller-contact">
            <div className="seller-icon">
              <i className="fa-solid fa-phone"></i>
            </div>

            <div className="contact-detail">
              <h5>Số điện thoại: <span> {item.phone || "Chua cap nhat"}</span></h5>
            </div>
          </div>
        </div>
        <div className="seller-category mt-auto">
          <button className="btn btn-sm theme-bg-color text-white fw-bold mx-auto">
            <Link href={`/store/${item.alias}`} className="text-white">
              Xem shop
            </Link>
            <i className="fa-solid fa-arrow-right-long ms-2"></i></button>
        </div>
      </div>
    </div>
  )
}

export default SellerItem