"use client"
import DashboardLeftSidebar from '@/components/features/sidebar/DashboardLeftSidebar'
import React, { useState } from 'react'

function CustomerProtectedLayout({ children }: { children: React.ReactNode }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <section className="user-dashboard-section section-b-space pt-0">
      <div className="container-fluid-lg">
        <div className="row">

          <div className="col-xxl-3 col-lg-4">
            <DashboardLeftSidebar
              isShow={isShow}
              setIsShow={setIsShow}
            ></DashboardLeftSidebar>
          </div>
          <div className='col-xxl-9 col-lg-8'>
            <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none" onClick={() => setIsShow(true)}>Show Menu</button>
            <div className="dashboard-right-sidebar">
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  {children}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CustomerProtectedLayout