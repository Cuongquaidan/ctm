'use client'
import RegisterBox from '@/components/features/auth/RegisterBox'
import RegisterImg from '@/components/features/image/RegisterImg'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'


function RegisterPage() {


  return (
    <>
      <BreadcrumbBackToHome title="Đăng ký" current="Đăng ký" />

      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <RegisterImg></RegisterImg>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <RegisterBox></RegisterBox>
            </div>
            {/* <div className="col-xxl-7 col-xl-6 col-lg-6"></div> */}
          </div>
        </div>
      </section>
    </>

  )
}

export default RegisterPage