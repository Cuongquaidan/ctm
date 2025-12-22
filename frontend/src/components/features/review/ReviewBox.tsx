import { ReviewT, StoreT } from '@/types/common.types'
import React from 'react'
import CustomRating from '@/components/features/product/components/CustomRating'
import RatingList from '@/components/features/review/RatingList'
import ReviewPeople from '@/components/features/review/ReviewPeople'
import { PaginatedDataT } from '@/types/api.type'
import Pagination from '@/components/ui/Pagination'
interface ReviewBoxProps {
  store: StoreT;
  reviews: PaginatedDataT<ReviewT>;
  groupedReviews: Record<number, number>;
}

function ReviewBox({ store, reviews, groupedReviews }: ReviewBoxProps) {
  // Đảm bảo luôn hiển thị đủ 5-4-3-2-1 sao
  const allRatings = [5, 4, 3, 2, 1].map(rating => {
    const count = groupedReviews[rating] || 0
    const total = Object.values(groupedReviews).reduce((sum, val) => sum + val, 0)
    const percent = total > 0 ? count / total : 0
    return { rating, count, percent }
  })




  return (
    <div className="review-box">
      <div className="row g-4">
        <div className="col-xl-4">
          <div className="d-flex align-items-center">
            <p className="me-2 h1 mb-0">{store.review_point}</p>
            <CustomRating numberOfRatings={store.review_total} rating={store.review_point}></CustomRating>
          </div>
          <div className="rating-box">
            <ul>
              {allRatings.map(({ rating, count, percent }) => (
                <RatingList key={rating} rating={rating} percent={percent}></RatingList>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="row g-4">
        <div className="col-12">
          <ReviewPeople reviews={reviews.data || []}></ReviewPeople>
        </div>
        <Pagination
          totalPages={reviews.pageTotal}
        ></Pagination>
      </div>
    </div>

  )
}

export default ReviewBox