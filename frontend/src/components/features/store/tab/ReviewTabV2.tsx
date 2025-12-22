import { ReviewT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import ReviewPeople from '@/components/features/review/ReviewPeople'
import SectionHeaderV2 from '@/components/ui/SectionHeaderV2'

async function ReviewTabV2({ reviews }: { reviews: ReviewT[] }) {

  return (
    <>
      <SectionHeaderV2 title='Đánh giá cửa hàng'></SectionHeaderV2>
      {reviews.length === 0 ? (
        <div className="row justify-content-center">
          <div className="d-flex flex-column col-xl-4" style={{ minHeight: "400px" }}>
            <div className="flex-fill d-flex flex-column justify-content-center align-items-center">
              <ImageError width={600} height={600} src="https://ca-ctm.systems.com.vn/styles/logo.png" alt="honeynet" className="h-45 w-45 mb-4" />
              <span className="fs-5 fw-500">Cửa hàng chưa có đánh giá</span>
            </div>
          </div>
        </div>
      ) : (
        <ReviewPeople reviews={reviews}></ReviewPeople>
      )}

    </>
  )
}

export default ReviewTabV2
