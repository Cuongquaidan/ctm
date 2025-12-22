'use client'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import RegisterConfirmBox from '@/components/features/auth/RegisterConfirmBox'
import ImageError from '@/components/ui/ImageError'
import { useState } from 'react'

function RegisterConfirmPage() {

  return (
    <>
      <BreadcrumbBackToHome title="Xác nhận tài khoản" current="Xác nhận tài khoản" />

      <section className="log-in-section otp-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <ImageError
                  width={600}
                  height={600}
                  src="/assets/eme2023/images/inner-page/otp.png"
                  className="img-fluid"
                  alt="OTP Verification"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <RegisterConfirmBox />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterConfirmPage