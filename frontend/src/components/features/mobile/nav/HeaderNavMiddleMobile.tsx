"use client"
import React, { useState } from 'react'

interface HeaderNavMiddleMobileProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}
function HeaderNavMiddleMobile({ isShow, setIsShow }: HeaderNavMiddleMobileProps) {
  return (
    <div className="header-nav-middle">
      <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
        <div className={`offcanvas offcanvas-collapse order-xl-2 ${isShow ? "show" : ""}`} id="primaryMenu">
          <div className="offcanvas-header navbar-shadow">
            <h5>Menu</h5>
            <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"
              onClick={() => setIsShow(false)}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link no-sub" href="#">Flash Sale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link no-sub" href="/khuyen-mai">Khuyến mãi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link no-sub" href="/store/list">Cửa hàng</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderNavMiddleMobile