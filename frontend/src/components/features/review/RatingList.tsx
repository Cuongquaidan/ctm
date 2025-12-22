import React from 'react'

interface RatingListProps {
  rating: number;
  percent: number;
}

function RatingList({ rating, percent }: RatingListProps) {
  return (
    <li>
      <div className="rating-list">
        <h5 style={{ minWidth: "30px", display: "block" }}>{rating} <i className="fa-solid fa-star text-warning" style={{ width: "16px", height: "16px" }}></i></h5>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: `${percent * 100}%` }} aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
            {(percent * 100).toFixed(2)}%
          </div>
        </div>
      </div>
    </li>
  )
}

export default RatingList