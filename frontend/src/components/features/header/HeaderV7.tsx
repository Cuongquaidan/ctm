"use client";
import React from 'react'
import { menuData } from '@/assets/data/Config';
import LocationSearchBox from '@/components/features/header/LocationSearchBox';
import VerticalNavigation from '@/components/features/header/VerticalNavigation';
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { Headset } from 'lucide-react';
import RightSideNavTop from '@/components/features/header/RightSideNavTop';
import Logo from '@/components/features/header/Logo';
import RightSideMenu from './RightSideMenu';
function HeaderV7() {
  const { hasAuth, numberOfItemsInWishlist, numberOfStoreInCart, handleLogout } = useAuthContext();
  return (
    <header className="header-compact header-absolute">
      <div className="top-nav top-header sticky-header">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="navbar-top">
                <button className="navbar-toggler d-xl-none d-inline navbar-menu-button me-3" type="button"
                  data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                </button>

                <Logo></Logo>
                <div className="middle-box">
                  <div className="header-nav-middle">
                    <VerticalNavigation initialData={menuData}></VerticalNavigation>
                  </div>
                </div>

                <div className="rightside-box">
                  <LocationSearchBox></LocationSearchBox>
                  <ul className="right-side-menu">
                    <RightSideMenu hasSupport={false}></RightSideMenu>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderV7