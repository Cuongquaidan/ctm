import "@/app/globals.css";
import Footer from '@/components/features/footer/Footer'
import Header from '@/components/features/header/Header'
import AuthProvider from '@/components/features/provider/AuthProvider'
import ConfigProvider from '@/components/features/provider/ConfigProvider'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import ImageError from '@/components/ui/ImageError'
import Link from 'next/link'

// global styles are loaded by the root layout; font variables removed here because they are not used in this component

export default async function GlobalNotFound() {

  return (
    <ConfigProvider>
      <AuthProvider>
        <Header />

        <BreadcrumbBackToHome title='404 Page' current='404' />


        <section className="section-404 section-lg-space">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="image-404 flex items-center justify-center">
                  <ImageError
                    width={500}
                    height={406}
                    src="/assets/eme2023/images/inner-page/404.png"
                    className="img-fluid lazyload"
                    alt="404"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="contain-404">
                  <h3 className="text-content">
                    Không tìm thấy trang bạn đang tìm kiếm. Liên kết đến địa chỉ này có thể đã lỗi thời hoặc chúng tôi có thể đã di chuyển trang kể từ lần cuối bạn đánh dấu trang.
                  </h3>
                  <Link href="/" className="btn btn-md text-white theme-bg-color mt-4 mx-auto">
                    Trở lại Trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </AuthProvider>
    </ConfigProvider>
  )
}
