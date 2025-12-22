"use client";
import React from 'react'
import LocationSearchBox from '@/components/features/header/LocationSearchBox';
import RightSideNavTop from '@/components/features/header/RightSideNavTop';
import HeaderSearchMain from '@/components/features/header/HeaderSearchMain';
import { Headset } from 'lucide-react';
import RightSideMenu from './RightSideMenu';
function HeaderV8() {
  return (
    <header className="pb-0 fixed-header "
      style={{
        zIndex: 9999
      }}
    >
      <div className="top-nav top-header">
        <div className="container-fluid-xs">
          <div className="row">
            <div className="col-12">
              <div className="navbar-top">
                <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                  data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                  <span className="navbar-toggler-icon navbar-toggler-icon-2">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                </button>

                <div className="middle-box "
                  style={{
                    width: "60%"
                  }}
                >

                  <LocationSearchBox></LocationSearchBox>

                  <HeaderSearchMain></HeaderSearchMain>

                </div>

                <div className="rightside-box">

                  <ul className="right-side-menu">

                    <li className="right-side">
                      <a href="" className="delivery-login-box">
                        <div className="delivery-icon">
                          <Headset></Headset>
                        </div>
                        <div className="delivery-detail">
                          <h6>24/7 Delivery</h6>
                          <h5>+91 888 104 2340</h5>
                        </div>
                      </a>
                    </li>
                    <li className="right-side">
                      <RightSideMenu></RightSideMenu>
                    </li>

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

export default HeaderV8