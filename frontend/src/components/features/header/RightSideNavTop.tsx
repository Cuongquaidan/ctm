"use client"
import ImageError from '@/components/ui/ImageError'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { logOut } from '@/lib/api/auth';
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { useRouter } from 'next/navigation';
import NotificationHoverSection from '@/components/features/notification/NotificationHoverSection';
import CartBoxHover from '@/components/features/cart/CartBoxHover'
import Link from 'next/link';


const LordIcon = dynamic(() => import('@/components/ui/icons/LordIcon'), {
  ssr: false,
  loading: () => <div style={{ width: 30, height: 30, display: 'inline-block' }} />
})

function RightSideNavTop() {
  // const [user, setUser] = useState<any>(null);
  const router = useRouter(); // Router từ next/navigation có refresh()
  const { hasAuth, setHasAuth, numberOfItemsInWishlist, numberOfStoreInCart, handleLogout, cart } = useAuthContext();



  return (
    <div className="rightside-box">

      <div className="search-full d-none">
        <div className="input-group">
          <span className="input-group-text">
            {/* <lord-icon src="/assets/eme2023/lordicon/msoeawqm.json" stroke="120" trigger="loop-on-hover" colors="primary:#fff,secondary:#fff" style="width:25px;height:25px"></lord-icon> */}
            <LordIcon icon={require("@/assets/lordicon/msoeawqm.json")} primary="#ffffff" secondary="#ffffff"></LordIcon>
          </span>
          <input type="text" className="form-control search-type" placeholder="Tìm kiếm" />
          <span className="input-group-text close-search">
            <i className="fa-light fa-x font-light"></i>
          </span>
        </div>
      </div>
      <ul className="right-side-menu d-none d-md-flex">
        <li className="right-side d-none">
          <div className="delivery-login-box">
            <div className="delivery-icon">
              <div className="search-box">
                {/* <lord-icon src="/assets/eme2023/lordicon/msoeawqm.json" stroke="120" trigger="loop-on-hover" colors="primary:#fff,secondary:#fff" style="width:25px;height:25px"></lord-icon> */}
                <LordIcon icon={require("@/assets/lordicon/msoeawqm.json")} primary="#ffffff" secondary="#ffffff"></LordIcon>
              </div>
            </div>
          </div>
        </li>
        <li className="right-side">
          <Link href="/customers/wishlist" className="btn p-0 position-relative header-wishlist header-icon boxWishlist" aria-label="Sản phẩm yêu thích">
            {/* <lord-icon src="/assets/eme2023/lordicon/ytuosppc.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233"></lord-icon> */}
            <LordIcon icon={require("@/assets/lordicon/ytuosppc.json")} primary="#f58233" secondary="#f58233"></LordIcon>
            {hasAuth && (<span className="position-absolute top-0 start-100 translate-middle badge shoppingWishlist"><span className="numberWishlist">{numberOfItemsInWishlist || 0}</span>
              <span className="visually-hidden">unread messages</span>
            </span>)}
          </Link>
        </li>
        <li className="right-side">
          <Link href={"/customers/cart"} className="btn p-0 position-relative header-wishlist header-icon boxCartCount onhover-dropdown" aria-label="Giỏ hàng">
            {/* <lord-icon src="/assets/eme2023/lordicon/lpddubrl.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233"></lord-icon> */}
            <LordIcon icon={require("@/assets/lordicon/lpddubrl.json")} primary="#f58233" secondary="#f58233"></LordIcon>
            {hasAuth && (<span className="position-absolute top-0 start-100 translate-middle badge shoppingCart"><span className="numberCart">{cart?.list.length || 0}</span>
              <span className="visually-hidden">unread messages</span>
            </span>)}
            {/* <CartBoxHover></CartBoxHover> */}
          </Link>
        </li>
        <li className="right-side onhover-dropdown boxHeaderNotifi">
          <Link href="/customers/notifications" className="btn p-0 position-relative header-icon boxNotifications" aria-label="Thông báo">
            <LordIcon icon={require("@/assets/lordicon/bell-notification.json")} primary="#f58233" secondary="#f58233"></LordIcon>
            <span className="position-absolute top-0 start-100 translate-middle badge d-none"><span className="numberNotifi">0</span>
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
          <div className="onhover-div" style={{ "width": "400px" }}>
            {!hasAuth ? (<div className="notLogin d-flex flex-column" style={{ "minHeight": "300px" }}>
              <div className="flex-fill d-flex flex-column justify-content-center align-items-center">
                <ImageError width={100} height={100} src="/styles/logo.png" alt="" className="h-45 w-45 mb-4" />
                <span className="fs-6 fw-500">Đăng nhập để xem thông báo</span>
              </div>
              <div className="d-flex mt-auto w-100">
                <Link className="btn btn-sm btn-secondary flex-1 border me-1" href="/customers/register">Đăng ký</Link>
                <Link className="btn btn-sm btn-animation flex-1 ms-1" href="/customers/login">Đăng nhập</Link>
              </div>
            </div>) : (
              <NotificationHoverSection></NotificationHoverSection>
            )}


          </div>
        </li>
        <li className="right-side onhover-dropdown boxHeaderUser">
          <div className="delivery-login-box">
            <div className="delivery-icon">
              <div className="btn p-0 header-icon notLogin">
                {/* <lord-icon src="/assets/eme2023/lordicon/ljvjsnvh.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233"></lord-icon> */}
                <LordIcon icon={require("@/assets/lordicon/ljvjsnvh.json")} primary="#f58233" secondary="#f58233"></LordIcon>

              </div>
              <div className="header-icon hasLogin d-none p-1">
                <ImageError width={100} height={100} className="object-fit-cover h-100 w-100 rounded-circle" src="/styles/avatar.jpg" alt="Tài khoản" />
              </div>
            </div>
          </div>
          <div className="onhover-div onhover-div-login" style={{ "width": "205px" }}>
            <ul className="user-box-name">
              {!hasAuth && (
                <>
                  <li className="mb-1 notLogin">
                    <Link href="/customers/login"><i className="me-1 mb-1 fa-regular fa-right-to-bracket" style={{ "width": "16px", "height": "16px" }}></i>Đăng nhập</Link>
                  </li>
                  <li className="mb-1 notLogin">
                    <Link href="/customers/register"><i className="me-1 mb-1 fa-regular fa-user" style={{ "width": "16px", "height": "16px" }}></i>Đăng ký</Link>
                  </li>
                  <li className="mb-1 notLogin">
                    <Link href="/customers/forgotPassword"><i className="me-1 mb-1 fa-regular fa-lock" style={{ "width": "16px", "height": "16px" }}></i>Quên mật khẩu</Link>
                  </li>

                  <li className="mb-1 notLogin">
                    <a href="/storeAccount/login"><i className="me-1 mb-1 fa-regular fa-store-alt" style={{ "width": "16px", "height": "16px" }}></i>Kênh bán hàng</a>
                  </li></>
              )}
              {hasAuth && (
                <>
                  <li className="mb-1 hasLogin">
                    <Link href="/customers/profile"><i className="me-1 mb-1 fa-regular fa-user" style={{ "width": "16px", "height": "16px" }}></i>Thông tin tài khoản</Link>
                  </li>
                  <li className="mb-1 hasLogin">
                    <Link href="/customers/orders"><i className="me-1 mb-1 fa-regular fa-bag-shopping" style={{ "width": "16px", "height": "16px" }}></i>Đơn hàng của tôi</Link>
                  </li>
                  <li className="mb-1 hasLogin">
                    <Link href="/customers/vouchers"><i className="me-1 mb-1 fa-regular fa-badge-percent" style={{ "width": "16px", "height": "16px" }}></i>Mã giảm giá</Link>
                  </li>

                  <li className="mb-1 hasLogin">
                    <Link href="/customers/customerAddress"><i className="me-1 mb-1 fa-regular fa-map-pin" style={{ "width": "16px", "height": "16px" }}></i>Địa chỉ giao hàng</Link>
                  </li>
                  <li className="hasLogin cursor-pointer" onClick={handleLogout}>
                    <a><i className="me-1 mb-1 fa-regular fa-right-from-bracket" style={{ "width": "16px", "height": "16px" }}></i>Đăng xuất</a>
                  </li></>
              )}

            </ul>

          </div>

        </li>
        {/* <li className='right-side '>
          <LanguageSwitcher></LanguageSwitcher>
        </li> */}
      </ul>
    </div>
  )
}

export default RightSideNavTop