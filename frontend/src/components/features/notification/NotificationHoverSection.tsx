"use client"
import React, { useEffect, useState } from 'react'
import NotificationHoverItem from '@/components/features/notification/NotificationHoverItem';
import { NotificationT, NotificationTypeEnum } from '@/types/common.types';
import { getAllNotifications } from '@/lib/api/notification';
import { motion } from "framer-motion";
import Link from 'next/link';
function NotificationHoverSection() {
  // const { notifications } = useAuthContext();
  const [notifications, setNotifications] = useState<NotificationT[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const handleFetchNotifications = async () => {
    const resdata = await getAllNotifications();
    setNotifications(resdata);
  }
  useEffect(() => {
    handleFetchNotifications();
  }, [])

  const notificationPERSONAL = notifications?.filter(item => item.type === NotificationTypeEnum.PERSONAL) || [];
  const notificationPROMOTION = notifications?.filter(item => item.type === NotificationTypeEnum.PROMOTION) || [];

  // Lấy notifications theo tab
  const getNotificationsByTab = () => {
    switch (selectedTab) {
      case 'personal':
        return notificationPERSONAL;
      case 'promotion':
        return notificationPROMOTION;
      case 'all':
      default:
        return [...notificationPERSONAL, ...notificationPROMOTION];
    }
  }

  const currentNotifications = getNotificationsByTab();
  return (
    <div className="hasLogin ">
      <h3 className="fw-600 mb-3">Thông báo</h3>
      <ul className="nav nav-pills filter-box" id="pills-tab">
        <li className="nav-item flex-1">
          <button
            className={`nav-link w-100 ${selectedTab === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedTab('all')}
            type="button"
          >
            Tất cả
          </button>
        </li>
        <li className="nav-item flex-1">
          <button
            className={`nav-link w-100 ${selectedTab === 'personal' ? 'active' : ''}`}
            onClick={() => setSelectedTab('personal')}
            type="button"
          >
            Cá nhân
          </button>
        </li>
        <li className="nav-item flex-1">
          <button
            className={`nav-link w-100 ${selectedTab === 'promotion' ? 'active' : ''}`}
            onClick={() => setSelectedTab('promotion')}
            type="button"
          >
            Khuyến mãi
          </button>
        </li>
      </ul>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0 }}
        className="tab-content mt-3" id="pills-tabContent">
        <div className="notifyBody">
          {currentNotifications.length > 0 ? (
            <>
              <div className="notifyBodyList">
                {currentNotifications.map((item) => (
                  <NotificationHoverItem key={item.id} item={item} />
                ))}
              </div>
              <div className="text-center w-100 mt-3">
                <Link
                  href={{
                    pathname: "/customers/notifications",
                    query: selectedTab !== 'all' ? { tab: `notification-${selectedTab}` } : undefined
                  }}
                  className="fs-6"
                >
                  Xem tất cả
                </Link>
              </div>
            </>
          ) : (
            <div className="w-100 text-center fs-6 emptyNotifi">
              <i>Chưa có thông báo</i>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default NotificationHoverSection