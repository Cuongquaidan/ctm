import React from 'react'

interface CustomRatingProps {
  rating: number;
  numberOfRatings: number;
  isCenter?: boolean;
}

function CustomRating({ rating, numberOfRatings, isCenter }: CustomRatingProps) {
  return (
    <div className={`product-rating custom-rate `}
      style={{ justifyContent: isCenter ? 'center' : 'flex-start' }}
    >
      <ul className="rating gap-0 border-0"
        style={{
          flexWrap: "nowrap"
        }}
      >
        {Array.from({ length: 5 }).fill(0).map((_, index) => (
          <li key={index}>
            <i className={` ${index < (rating - 1) ? "fa" : "fa-regular"} fa-star text-warning`}></i>
          </li>

        ))}
      </ul>
      {numberOfRatings > 0 && <span className="review boxReview d-none">(<span className="reviewNumber m-0">{numberOfRatings}</span> Đánh giá)</span>}
      {/* <!-- <span className="ms-0 boxSold d-none">Đã bán <span className="soldNumber m-0">0</span></span> --> */}
    </div>
  )
}

export default CustomRating