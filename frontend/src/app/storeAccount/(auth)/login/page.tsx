'use client'
import StoreLoginBox from '@/components/features/auth/StoreLoginBox';
import StoreLoginImg from '@/components/features/image/StoreLoginImg';
import React from 'react'

function Login() {


  return (
    <>

      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <StoreLoginImg></StoreLoginImg>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <StoreLoginBox></StoreLoginBox>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Login