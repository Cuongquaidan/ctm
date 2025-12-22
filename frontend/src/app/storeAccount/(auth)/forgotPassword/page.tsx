'use client'

import StoreForgotPasswordBox from '@/components/features/auth/StoreForgotPasswordBox'
import StoreForgotPasswordImg from '@/components/features/image/StoreForgotPasswordImg'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import React from 'react'

function page() {


  return (
    <>
      <BreadcrumbBackToHome title="Quên mật khẩu" current="Quên mật khẩu" />


      <section className="log-in-section section-b-space forgot-section">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <StoreForgotPasswordImg></StoreForgotPasswordImg>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <StoreForgotPasswordBox></StoreForgotPasswordBox>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default page