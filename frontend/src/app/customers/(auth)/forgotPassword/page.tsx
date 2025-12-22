'use client'
import ForgotPasswordBox from '@/components/features/auth/ForgotPasswordBox'
import ForgotPasswordImg from '@/components/features/image/ForgotPasswordImg'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
function ForgotPasswordPage() {


  return (
    <>
      <BreadcrumbBackToHome title="Quên mật khẩu" current="Khôi phục mật khẩu của bạn" />


      <section className="log-in-section section-b-space forgot-section">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <ForgotPasswordImg></ForgotPasswordImg>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
              <ForgotPasswordBox></ForgotPasswordBox>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPasswordPage