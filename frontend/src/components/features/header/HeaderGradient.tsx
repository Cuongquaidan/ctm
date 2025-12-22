"use client"
import React from 'react'
import TimerNotifications from '../notification/TimerNotifications'
import DropdownSelectButtonLangs from '@/components/ui/button/DropdownSelectButtonLangs'
import DropdownSelectButtonCurrencies from '@/components/ui/button/DropdownSelectButtonCurrencies'
import ImageError from '@/components/ui/ImageError'
import VerticalNavigation from './VerticalNavigation'
import { menuData } from '@/assets/data/Config'
import RightSideMenu from './RightSideMenu'
import { useConfig } from '../provider/ConfigProvider'
import { fixedSiteConfig } from '@/lib/api/config'

function HeaderGradient() {
  const { config } = useConfig();
  return (
    <header className="header-2 header-gradient"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 99
      }}
    >
      <div className="header-top !text-sm"
        style={{
          background: "linear-gradient(to right, var(--theme-color), var(--theme-color2))"
        }}
      >
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 d-xxl-block d-none">
              <div className="top-left-header flex items-center justify-center">
                <p className='text-white m-0'>

                  {config?.address_1}
                </p>
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

      <div className=' top-header'>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="main-nav">
                <div className="header-nav-left h-10">
                  <a href="/" className="web-logo nav-logo d-block h-full">
                    {
                      (config.logo || fixedSiteConfig.logo) && (<ImageError width={300} height={300} src={config.logo || fixedSiteConfig.logo as string} className="img-fluid h-100 lazyload object-contain" alt={config?.description_1 || "Honey net"} />)
                    }
                  </a>
                </div>

                <div className="header-nav-middle "
                  style={{
                    color: "white!important"
                  }}
                >
                  <VerticalNavigation initialData={menuData}></VerticalNavigation>
                </div>
                <div className="rightside-box">
                  <RightSideMenu hasSupport={false}></RightSideMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderGradient