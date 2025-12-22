"use client"
import ImageError from '@/components/ui/ImageError'
import React, { forwardRef } from 'react'
import dynamic from 'next/dynamic'
import { useConfig } from '@/components/features/provider/ConfigProvider';
import DropdownSelectButtonLangs from '@/components/ui/button/DropdownSelectButtonLangs';
import DropdownSelectButtonCurrencies from '@/components/ui/button/DropdownSelectButtonCurrencies';
import TimerNotifications from '@/components/features/notification/TimerNotifications';
import HeaderNavMobile from '@/components/features/mobile/nav/HeaderNavMobile'
const LordIcon = dynamic(() => import('@/components/ui/icons/LordIcon'), {
  ssr: false,
  loading: () => <div style={{ width: 25, height: 25, display: 'inline-block' }} />
})

const HeaderTop = forwardRef<HTMLDivElement>((props, ref) => {
  const { config } = useConfig();
  const [isShow, setIsShow] = React.useState<boolean>(false);
  return (
    <div className="header-top " ref={ref}>
      <HeaderNavMobile isShow={isShow} setIsShow={setIsShow}></HeaderNavMobile>
      <div
        className='container-fluid-lg'
      >
        <div className="row">
          <div className="col-md-9 d-none d-md-block">
            <a href="/flash-sale" className="text-white me-3"><i className="fas fa-bolt"></i> Flash Sale</a>
            <a href="/customers/register" className="text-white me-3"><i className="fa-regular fa-user"></i> Đăng ký Tài khoản</a>
            <a href="/storeAccount/login" className="text-white me-3"><i className="fas fa-store-alt"></i> Kênh bán hàng</a>
            <a href="/storeAccount/register" className="text-white me-3"><i className="fa-solid fa-store"></i> Đăng ký Bán hàng</a>
            {/* <a href="/help" className="text-white me-3">HELP MEEEEEEEEEEE</a> */}
            {/* <a href="/storeAccount/register" className="text-white me-3"><i className="fa-solid fa-boxes-packing"></i> Đăng ký Nhà sản xuất</a>
              <a href="/sellerAdcp/login" className="text-white me-3"><i className="fas fa-handshake"></i> Cộng tác viên</a>
              <a href="/sellerAdcp/register" className="text-white"><i className="fa-solid fa-people-group"></i> Đăng ký Cộng tác viên</a> */}
            {/* <TimerNotifications></TimerNotifications> */}
          </div>
          <div className="col-md-3 d-flex align-items-center">

            {/*Dung o day*/}
            <a href="/" className="d-block d-md-none me-2" style={{ height: "50px", width: "50px" }}>
              {config?.logo && (
                <ImageError width={400} height={400} src={config?.logo} style={{ objectFit: "contain", height: "100%" }} alt={config?.description_1 || "honeynet"} />
              )}
            </a>
            <div className="rightside-box ms-2 d-block d-md-none">
              <div className="search-full">
                <div className="input-group">
                  <span className="input-group-text">
                    {/* <lord-icon src="/assets/eme2023/lordicon/msoeawqm.json" stroke="120" trigger="loop-on-hover" colors="primary:#fff,secondary:#fff" style="width:25px;height:25px"></lord-icon> */}
                    <LordIcon icon={require("../../../assets/lordicon/msoeawqm.json")} primary="#ffffff" secondary="#ffffff"></LordIcon>
                  </span>
                  <input type="text" className="form-control search-type" placeholder="Tìm kiếm" />
                  <span className="input-group-text close-search">
                    <i className="fa-light fa-x font-light"></i>
                  </span>
                </div>
              </div>
              <ul className="right-side-menu">
                <li className="right-side onhover-dropdown">
                  <div className="delivery-login-box">
                    <div className="delivery-icon">
                      <a href="#" className="btn p-0 d-flex justify-content-center align-items-center bg-white" style={{ height: "35.5px", minWidth: "35.5px!important" }}>
                        {/* <lord-icon src="/assets/eme2023/lordicon/ljvjsnvh.json" stroke="100" trigger="loop-on-hover" style="width:28px;height:28px" colors="primary:#f58233,secondary:#ffc20e"></lord-icon> */}
                        <LordIcon icon={require("../../../assets/lordicon/ljvjsnvh.json")} primary="#f58233" secondary="#ffc20e"></LordIcon>
                      </a>
                    </div>
                  </div>
                  <div className="onhover-div onhover-div-login" style={{ width: "205px" }}>
                    <ul className="user-box-name">
                      <li className="mb-1 notLogin">
                        <a href="/customers/login"><i className="me-1 mb-1 fa-regular fa-right-to-bracket" style={{ width: "16px", height: "16px" }}></i>Đăng nhập</a>
                      </li>
                      <li className="mb-1 notLogin">
                        <a href="/customers/register"><i className="me-1 mb-1 fa-regular fa-user" style={{ width: "16px", height: "16px" }}></i>Đăng ký</a>
                      </li>
                      <li className="mb-1 notLogin">
                        <a href="/customers/forgotPassword"><i className="me-1 mb-1 fa-regular fa-lock" style={{ width: "16px", height: "16px" }}></i>Quên mật khẩu</a>
                      </li>
                      <li className="mb-1 notLogin">
                        <a href="/sellerAdcp/login"><i className="me-1 mb-1 fa-regular fa-handshake" style={{ width: "16px", height: "16px" }}></i>Cộng tác viên</a>
                      </li>
                      <li className="mb-1 notLogin">
                        <a href="/storeAccount/login"><i className="me-1 mb-1 fa-regular fa-store-alt" style={{ width: "16px", height: "16px" }}></i>Kênh bán hàng</a>
                      </li>
                      <li className="mb-1 hasLogin ">
                        <a href="/customers/profile"><i className="me-1 mb-1 fa-regular fa-user" style={{ width: "16px", height: "16px" }}></i>Thông tin tài khoản</a>
                      </li>
                      <li className="mb-1 hasLogin ">
                        <a href="/customers/vouchers"><i className="me-1 mb-1 fa-regular fa-badge-percent" style={{ width: "16px", height: "16px" }}></i>Mã giảm giá</a>
                      </li>
                      <li className="mb-1 hasLogin ">
                        <a href="/customers/pointLogs"><i className="me-1 mb-1 fa-regular fa-gift" style={{ width: "16px", height: "16px" }}></i>Điểm thưởng</a>
                      </li>
                      <li className="mb-1 hasLogin ">
                        <a href="/customers/orders"><i className="me-1 mb-1 fa-regular fa-bag-shopping" style={{ width: "16px", height: "16px" }}></i>Đơn hàng của tôi</a>
                      </li>
                      <li className="mb-1 hasLogin ">
                        <a href="/customers/customerAddress"><i className="me-1 mb-1 fa-regular fa-map-pin" style={{ width: "16px", height: "16px" }}></i>Địa chỉ giao hàng</a>
                      </li>
                      <li className="hasLogin ">
                        <a href="/customers/logout"><i className="me-1 mb-1 fa-regular fa-right-from-bracket" style={{ width: "16px", height: "16px" }}></i>Đăng xuất</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ms-2 d-flex d-md-none"
              style={{
                height: "35.5px",
                minWidth: "35.5px!important",
                background: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
              }}>
              <div className="navbar-toggler d-xl-none d-inline navbar-menu-button p-2" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu" onClick={
                () => {
                  setIsShow(true)
                }
              }>
                <span className="navbar-toggler-icon">
                  <i className="fa-solid fa-bars text-theme" style={{ WebkitTextFillColor: "var(--theme-color1)" }}></i>
                </span>
              </div>
            </div>
            {/* {config.currency && config.currency.length > 0 && (
              <DropdownSelectButtonCurrencies
                id="select-currency-nav"
                items={config.currency}

              />
            )}
            {config.langs && config.langs.length > 0 && (
              <DropdownSelectButtonLangs
                id="select-language-nav"
                currentValue={"vnd"}

              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
})

HeaderTop.displayName = 'HeaderTop'

export default HeaderTop