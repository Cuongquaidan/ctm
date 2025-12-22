"use client"
import LordIcon from '@/components/ui/icons/LordIcon'
import ImageError from '@/components/ui/ImageError'
import Link from 'next/link'
import React from 'react'
import { useAuthContext } from '@/components/features/provider/AuthProvider'

function RightSideUser() {
  const { hasAuth, handleLogout } = useAuthContext();
  return (
    <li className="right-side onhover-dropdown boxHeaderUser">
      <div className="delivery-login-box">
        <div className="delivery-icon d-flex gap-2">
          <div className="btn p-0 header-icon notLogin shrink-0">
            {/* <lord-icon src="/assets/eme2023/lordicon/ljvjsnvh.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#f58233"></lord-icon> */}
            <LordIcon icon={require("@/assets/lordicon/ljvjsnvh.json")} primary="var(--theme-color)" secondary="var(--theme-color)"></LordIcon>

          </div>
          <div className="header-icon hasLogin d-none p-1">
            <ImageError width={100} height={100} className="object-fit-cover h-100 w-100 rounded-circle" src="/styles/avatar.jpg" alt="Tài khoản" />
          </div>
          <div className="delivery-detail">
            <h6>Hello,</h6>
            <h5>My Account</h5>
          </div>

        </div>
      </div>

      <div className="onhover-div onhover-div-login" style={{ "width": "205px", color: "var(--theme-color)" }}>
        <div className="user-box-name">
          {!hasAuth && (
            <>
              <div className="mb-1 notLogin">
                <Link href="/customers/login"><i className="me-1 mb-1 fa-regular fa-right-to-bracket" style={{ "width": "16px", "height": "16px" }}></i>Đăng nhập</Link>
              </div>
              <div className="mb-1 notLogin">
                <Link href="/customers/register"><i className="me-1 mb-1 fa-regular fa-user" style={{ "width": "16px", "height": "16px" }}></i>Đăng ký</Link>
              </div>
              <div className="mb-1 notLogin">
                <Link href="/customers/forgotPassword"><i className="me-1 mb-1 fa-regular fa-lock" style={{ "width": "16px", "height": "16px" }}></i>Quên mật khẩu</Link>
              </div>

              <div className="mb-1 notLogin">
                <a href="/storeAccount/login"><i className="me-1 mb-1 fa-regular fa-store-alt" style={{ "width": "16px", "height": "16px" }}></i>Kênh bán hàng</a>
              </div></>
          )}
          {hasAuth && (
            <>
              <div className="mb-1 hasLogin">
                <Link href="/customers/profile"><i className="me-1 mb-1 fa-regular fa-user" style={{ "width": "16px", "height": "16px" }}></i>Thông tin tài khoản</Link>
              </div>
              <div className="mb-1 hasLogin">
                <Link href="/customers/orders"><i className="me-1 mb-1 fa-regular fa-bag-shopping" style={{ "width": "16px", "height": "16px" }}></i>Đơn hàng của tôi</Link>
              </div>
              <div className="mb-1 hasLogin">
                <Link href="/customers/vouchers"><i className="me-1 mb-1 fa-regular fa-badge-percent" style={{ "width": "16px", "height": "16px" }}></i>Mã giảm giá</Link>
              </div>

              <div className="mb-1 hasLogin">
                <Link href="/customers/customerAddress"><i className="me-1 mb-1 fa-regular fa-map-pin" style={{ "width": "16px", "height": "16px" }}></i>Địa chỉ giao hàng</Link>
              </div>
              <div className="hasLogin cursor-pointer" onClick={handleLogout}>
                <a><div className="me-1 mb-1 fa-regular fa-right-from-bracket" style={{ "width": "16px", "height": "16px" }}></div>Đăng xuất</a>
              </div></>
          )}

        </div>

      </div>

    </li>
  )
}

export default RightSideUser