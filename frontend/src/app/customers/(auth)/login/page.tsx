'use client'
import LoginBox from '@/components/features/auth/LoginBox';
import LoginImg from '@/components/features/image/LoginImg';
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome';
import React from 'react'

function LoginPage() {

  return (
    <>
      <BreadcrumbBackToHome title="Đăng nhập Mua hàng" current="Đăng nhập" />

      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <LoginImg></LoginImg>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <LoginBox></LoginBox>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default LoginPage