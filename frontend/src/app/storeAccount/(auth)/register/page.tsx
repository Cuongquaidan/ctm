'use client'

import StoreRegisterBox from '@/components/features/auth/StoreRegisterBox'
import StoreRegisterImg from '@/components/features/image/StoreRegisterImg'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import React, { useState } from 'react'

function page() {


  return (
    <>
      <BreadcrumbBackToHome current="Đăng ký" title="Đăng ký trở thành Người bán hàng / Nhà cung cấp" />

      <section className="log-in-section section-b-space forgot-section">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <StoreRegisterImg></StoreRegisterImg>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <StoreRegisterBox></StoreRegisterBox>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default page