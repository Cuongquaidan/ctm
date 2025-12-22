import ImageError from '@/components/ui/ImageError'
import React from 'react'

function CustomerReview() {
  return (
    <div className="section-t-space wow fadeIn">
      <div className="category-menu category-menu-2" style={{
        background: "linear-gradient(136.8deg, #f6f5f2 17.01 %, #fdf7f0 93.97 %)",
        borderRadius: "5px"
      }}>
        <h3 style={{
          marginBottom: "40px",
          fontWeight: 600,
          position: "relative",
          display: "inline-block",
        }} >Customer Comment

        </h3>

        <div className="review-box">
          <div className="review-contain">
            <h5 className="w-75">We Care About Our Customer Experience</h5>
            <p>In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly used to demonstrate the visual
              form of a document or a typeface without relying on
              meaningful content.</p>
          </div>

          <div className="review-profile">
            <div className="review-image rounded-full hover:rounded-xl" style={{
              width: "70px",
              height: "70px",
              overflow: "hidden",
              transition: "all .3s ease-in-out"
            }}>
              <ImageError width={500} height={500} src="/assets/eme2023/images/vegetable/review/1.jpg"
                className="img-fluid lazyload object-cover" alt="honeynet"

              />
            </div>
            <div className="review-detail">
              <h5>Tina Mcdonnale</h5>
              <h6>Sale Manager</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview