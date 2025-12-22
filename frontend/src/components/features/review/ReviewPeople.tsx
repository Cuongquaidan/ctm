import { ReviewT } from '@/types/common.types'
import React from 'react'
import ReviewItem from '@/components/features/review/ReviewItem'

interface ReviewPeopleProps {
  reviews: ReviewT[];
}

function ReviewPeople({ reviews }: ReviewPeopleProps) {
  return (
    <div className="review-people">
      <ul className="review-list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} item={review} />
        ))}
      </ul>
    </div>
  )
}

export default ReviewPeople