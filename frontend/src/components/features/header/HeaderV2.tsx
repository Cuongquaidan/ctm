"use client";
import React, { useState } from 'react'
import { menuData } from '@/assets/data/Config';
import CartBoxHover from '@/components/features/cart/CartBoxHover';
import CategoryMenuHorizontal from '@/components/features/category/CategoryMenuHorizontal';
import HeaderSearchMain from '@/components/features/header/HeaderSearchMain';
import LocationSearchBox from '@/components/features/header/LocationSearchBox';
import VerticalNavigation from '@/components/features/header/VerticalNavigation';
import NotificationHoverSection from '@/components/features/notification/NotificationHoverSection';
import TimerNotifications from '@/components/features/notification/TimerNotifications';
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { useConfig } from '@/components/features/provider/ConfigProvider'
import DropdownSelectButtonCurrencies from '@/components/ui/button/DropdownSelectButtonCurrencies';
import DropdownSelectButtonLangs from '@/components/ui/button/DropdownSelectButtonLangs';
import LordIcon from '@/components/ui/icons/LordIcon';
import ImageError from '@/components/ui/ImageError';
import Link from 'next/link';
import ModalDealToday from '@/components/features/modal/ModalDealToday';
import { fixedSiteConfig } from '@/lib/api/config';
function HeaderIndex1() {
  const { config } = useConfig();
  const { hasAuth, numberOfItemsInWishlist, numberOfStoreInCart, handleLogout } = useAuthContext();
  const [isOpenDeal, setIsOpenDeal] = useState<boolean>(false);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(true);
  return (
    <header className="pb-md-4 pb-0">
      <div className="header-top !text-sm">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 d-xxl-block d-none">
              <div className="top-left-header">
                <i className="iconly-Location icli text-white"></i>
                <span className="text-white text-sm line-clamp-1 truncate">{config.address_1}</span>
              </div>
            </div>

            <div className="col-xxl-6 col-lg-9 d-lg-block d-none">

              <TimerNotifications></TimerNotifications>
            </div>

            <div className="col-lg-3">
              <ul className="about-list right-nav-about">
                <li className="right-nav-list">
                  <DropdownSelectButtonLangs id='langs' items={fixedSiteConfig.langs}></DropdownSelectButtonLangs>
                </li>
                <li className="right-nav-list">
                  <DropdownSelectButtonCurrencies id='currencies' items={fixedSiteConfig.currency}></DropdownSelectButtonCurrencies>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="top-nav top-header sticky-header p-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="navbar-top">
                <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                  onClick={() => setIsShowMenu(!isShowMenu)}
                  data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                </button>
                <a href="index.html" className="web-logo nav-logo">
                  {
                    (config.logo || fixedSiteConfig.logo) && (<ImageError width={400} height={400} src={config.logo || fixedSiteConfig.logo as string} className="img-fluid lazyload" alt={config?.description_1 || "Honey net"} />)
                  }
                </a>

                <div className="middle-box flex-1 mx-5">
                  <LocationSearchBox></LocationSearchBox>

                  <HeaderSearchMain></HeaderSearchMain>
                </div>

                <div className="rightside-box">
                  <ul className="right-side-menu">
                    <li className="right-side">
                      <div className="delivery-login-box">
                        <div className="delivery-icon">
                          <div className="search-box">
                            <i data-feather="search"></i>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="right-side d-none d-xxl-block">
                      <a href="contact-us.html" className="delivery-login-box">
                        <div className="delivery-icon">
                          <i data-feather="phone-call"></i>
                        </div>
                        <div className="delivery-detail">
                          <h6>24/7 Delivery</h6>
                          <h5>+91 888 104 2340</h5>
                        </div>
                      </a>
                    </li>
                    <li className="right-side">
                      <Link href="/customers/wishlist" className="btn p-0 position-relative header-wishlist header-icon boxWishlist" aria-label="Sản phẩm yêu thích">
                        {/* <lord-icon src="/assets/eme2023/lordicon/ytuosppc.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233"></lord-icon> */}
                        <LordIcon icon={require("@/assets/lordicon/ytuosppc.json")} primary="" secondary=""></LordIcon>
                        {hasAuth && (<span className="position-absolute top-0 start-100 translate-middle badge shoppingWishlist"><span className="numberWishlist">{numberOfItemsInWishlist || 0}</span>
                          <span className="visually-hidden">unread messages</span>
                        </span>)}
                      </Link>
                    </li>
                    <li className="right-side">
                      <div className="btn p-0 position-relative header-wishlist header-icon boxCartCount onhover-dropdown"
                        style={{
                          zIndex: 999
                        }}
                        aria-label="Giỏ hàng">
                        {/* <lord-icon src="/assets/eme2023/lordicon/lpddubrl.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233"></lord-icon> */}
                        <LordIcon icon={require("@/assets/lordicon/lpddubrl.json")} primary="" secondary=""></LordIcon>
                        {hasAuth && (<span className="position-absolute top-0 start-100 translate-middle badge shoppingCart"><span className="numberCart">{numberOfStoreInCart || 0}</span>
                          <span className="visually-hidden">unread messages</span>
                        </span>)}
                        <CartBoxHover></CartBoxHover>
                      </div>
                    </li>
                    {/* <li className="right-side onhover-dropdown boxHeaderNotifi">
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
                    </li> */}
                    <li className="right-side onhover-dropdown boxHeaderUser">
                      <div className="delivery-login-box">
                        <div className="delivery-icon">
                          <div className="btn p-0 header-icon notLogin">
                            {/* <lord-icon src="/assets/eme2023/lordicon/ljvjsnvh.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233"></lord-icon> */}
                            <LordIcon icon={require("@/assets/lordicon/ljvjsnvh.json")} primary="" secondary=""></LordIcon>

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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="header-nav">
              <div className="header-nav-left">
                <CategoryMenuHorizontal></CategoryMenuHorizontal>
              </div>

              <div className="header-nav-middle">
                <VerticalNavigation initialData={menuData} isShow={isShowMenu} setIsShow={setIsShowMenu}></VerticalNavigation>
              </div>

              <div className="header-nav-right">
                <button className="btn deal-button" data-bs-toggle="modal" data-bs-target="#deal-box" onClick={() => setIsOpenDeal(true)}>
                  <i className="fa fa-bolt" ></i>
                  <span className='ml-2'>Deal Today</span>
                </button>

                {isOpenDeal && <ModalDealToday onClose={() => setIsOpenDeal(false)}></ModalDealToday>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderIndex1