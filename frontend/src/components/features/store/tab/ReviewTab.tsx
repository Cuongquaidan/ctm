import { ReviewT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import ReviewPeople from '@/components/features/review/ReviewPeople'
import SectionHeader from '@/components/ui/SectionHeader'
import Pagination from '@/components/ui/Pagination'
import { PaginatedDataT } from '@/types/api.type'

async function ReviewTab({ reviews }: { reviews: PaginatedDataT<ReviewT> }) {

  return (
    <>
      <SectionHeader title='Đánh giá cửa hàng'></SectionHeader>
      {reviews.data.length === 0 ? (
        <div className="row justify-content-center">
          <div className="d-flex flex-column col-xl-4" style={{ minHeight: "400px" }}>
            <div className="flex-fill d-flex flex-column justify-content-center align-items-center">
              <ImageError width={600} height={600} src="https://ca-ctm.systems.com.vn/styles/logo.png" alt="honeynet" className="h-45 w-45 mb-4" />
              <span className="fs-5 fw-500">Cửa hàng chưa có đánh giá</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ReviewPeople reviews={reviews.data}></ReviewPeople>
          <Pagination totalPages={reviews.pageTotal}></Pagination>
        </>
      )}

    </>
  )
}

export default ReviewTab