"use client"
import ImageError from '@/components/ui/ImageError'
import React from 'react'
import StoreAuthHover from '@/components/layout/storeAccount/StoreAuthHover'
import { useConfig } from '@/components/features/provider/ConfigProvider';
import { fixedSiteConfig } from '@/lib/api/config';

function NavTopStoreAuth() {
  const { config } = useConfig();
  return (
    <div className="top-nav top-header sticky-header d-none d-md-block">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="navbar-top"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a href="/" className="web-logo nav-logo d-md-block d-none me-xl-4 me-3">
                <ImageError width={200} height={200} src={config.logo || fixedSiteConfig.logo as string} className="img-fluid lazyload" alt={config.name_1} />
              </a>
              <div className="rightside-box">
                <ul className="right-side-menu d-none d-md-block">
                  <li className="right-side">
                    <div className="delivery-login-box">
                      <div className="delivery-icon">
                        <div className="search-box">
                          {/* <lord-icon src="/assets/eme2023/lordicon/msoeawqm.json" stroke="120" trigger="loop-on-hover" colors="primary:#fff,secondary:#fff" style="width:25px;height:25px"></lord-icon> */}
                        </div>
                      </div>
                    </div>
                  </li>


                  <StoreAuthHover></StoreAuthHover>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavTopStoreAuth