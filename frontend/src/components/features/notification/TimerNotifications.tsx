"use client"
import { getAllSystemNotifications, getAllSystemNotificationsByUrl } from '@/lib/api/notification';
import { NotificationT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'
import TimerNotification from '@/components/features/notification/TimerNotification';
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

interface TimerNotificationsProps {
  initialData?: NotificationT[],
  url?: string
  canRemove?: boolean
}
function TimerNotifications({ initialData, url, canRemove = false }: TimerNotificationsProps) {
  const [data, setData] = useState<NotificationT[]>(initialData || []);
  const [isRemoved, setIsRemoved] = useState<boolean>(false);
  const handleFetchNotifications = async () => {
    if (url) {
      const resdata = await getAllSystemNotificationsByUrl(url);
      setData(resdata as NotificationT[]);
    } else {
      const resdata = await getAllSystemNotifications();
      setData(resdata);
    }
  }
  useEffect(() => {
    handleFetchNotifications();
  }, [url])
  const handleClose = () => {
    setIsRemoved(true);
  }
  return (
    <div className="header-notification  overflow-hidden py-2">
      <div className="header-offer">
        <div className="notification-slider" style={{ overflow: 'hidden', height: '20px' }}>
          <Swiper
            modules={[Autoplay]}
            direction="vertical"
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // Dừng khi hover

            }}
            allowTouchMove={false} // Không cho phép kéo
            noSwiping={true} // Disable swipe
            noSwipingClass="swiper-slide" // Disable swipe trên tất cả slides
            style={{ height: '100%' }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} style={{ height: 'auto', display: "inline-block" }} >
                <TimerNotification key={index} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          {canRemove && <button className="btn close-notification cursor-pointer"
            onClick={handleClose}
          ><span>Close</span> <i className="fas fa-times"></i></button>}
        </div>
      </div>
    </div>
  )
}

export default TimerNotifications