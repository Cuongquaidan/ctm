'use client'

import NotificationItem from '@/components/features/notification/NotificationItem'
import { getAllNotifications } from '@/lib/api/notification'
import { NotificationT } from '@/types/common.types'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
  const [notifications, setNotifications] = useState<NotificationT[]>([]);
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'all';
  const router = useRouter();
  const handleSelectedTab = async (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.push(`${params.toString() ? `?${params.toString()}` : ''}`);

  }
  const handleFetchNotifications = async () => {
    const resdata = await getAllNotifications(currentTab);
    setNotifications(resdata);

  }
  useEffect(() => {
    handleFetchNotifications();
  }, [currentTab])

  return (
    <section className="pt-0 section-b-space">
      <div className="container-fluid-lg w-100">
        <div className="row">
          <div className="mx-auto col-xxl-6 col-xl-7 col-lg-8 col-sm-9">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <h2 className="mb-4">Thông báo</h2>
              <a className="fs-6 d-none" href="https://ca-ctm.systems.com.vn/customers/notifications/markAllRead?tab=notification-all"><i className="fas fa-check"></i> Đánh dấu tất cả đã đọc</a>
            </div>
            <div className="mt-0 product-section-box">
              <ul className="nav nav-tabs custom-nav" id="myTab">
                <li className="nav-item">
                  <button
                    onClick={() => handleSelectedTab('all')}
                    className={`nav-link ${currentTab === 'all' ? 'active' : ''}`}
                    type="button"
                  >
                    Tất cả
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => handleSelectedTab('personal')}
                    className={`nav-link ${currentTab === 'personal' ? 'active' : ''}`}
                    type="button"
                  >
                    Cá nhân
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => handleSelectedTab('promotion')}
                    className={`nav-link ${currentTab === 'promotion' ? 'active' : ''}`}
                    type="button"
                  >
                    Khuyến mãi
                  </button>
                </li>
              </ul>
              <div className="tab-content custom-tab">
                <div className="tab-pane fade active show">
                  <div className="review-box">
                    {notifications.length > 0 ? (
                      <div className="review-people">
                        <ul className="review-list">
                          {notifications.map((item) => (
                            <NotificationItem key={item.id} item={item} />
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="py-5 text-center w-100">
                        <i>Chưa có thông báo</i>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page