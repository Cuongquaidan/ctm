import React from 'react'

function ContactMail() {
  return (
    <div className="newsletter-section wow fadeInUp">
      <div className="newsletter-box newsletter-box-2">
        <div className="newsletter-contain py-5">
          <div className="row">
            <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
              <div className="newsletter-detail px-4">
                <h2>Theo dõi và nhận ngay ưu đãi</h2>
                <div className="newsletter-des">Nhận ngay mã giảm giá 100k cho đơn đầu tiên</div>
                <div className="input-box">
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Địa chỉ email của bạn" />
                  <i className="fa-solid fa-envelope arrow"></i>
                  <button className="sub-btn btn-animation">
                    <span className="d-sm-block d-none">Đăng ký</span>
                    <i className="fa-solid fa-arrow-right icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMail