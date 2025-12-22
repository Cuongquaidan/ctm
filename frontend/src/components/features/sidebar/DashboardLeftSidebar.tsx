"use client"
import ImageError from '@/components/ui/ImageError'
import React, { useState, useEffect } from 'react'
import { useAuthContext } from '@/components/features/provider/AuthProvider'
import { dashboardLeftSidebarItems } from '@/assets/data/Dashboard';
import DashboardLeftSidebarItem from '@/components/features/sidebar/DashboardLeftSidebarItem';
import { motion } from "framer-motion";
import { UserT } from '@/types/common.types';

function DashboardLeftSidebar({
  isShow,
  setIsShow
}: {
  isShow?: boolean,
  setIsShow?: (isShow: boolean) => void
}) {
  const { hasAuth, user } = useAuthContext();
  // const [user, setUser] = useState<UserT>();

  // useEffect(() => {
  //   // Lấy user từ localStorage
  //   if (typeof window !== 'undefined' && hasAuth) {
  //     const userString = localStorage.getItem("user");
  //     console.log(userString);

  //     if (userString) {
  //       try {
  //         setUser(JSON.parse(userString));
  //       } catch (error) {
  //         console.error('Error parsing user from localStorage:', error);
  //       }
  //     }
  //   }
  // }, [hasAuth]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      className={`dashboard-left-sidebar ${isShow ? 'show' : ''}`}>
      <div className={`close-button d-flex d-lg-none `}>
        <button className="close-sidebar" onClick={() => setIsShow && setIsShow(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="profile-box">
        <div className="cover-image">
          <ImageError
            width={750}
            height={300}
            src="https://ca-ctm.systems.com.vn/assets/eme2023/images/inner-page/cover-img.jpg"
            className="img-fluid lazyload"
            alt="Cover image"
          />
        </div>

        <div className="profile-contain">
          <div className="profile-image">
            <div className="position-relative flex justify-center" >
              {user?.avatar ? (
                <ImageError
                  width={720}
                  height={720}
                  src={user.avatar}
                  className="lazyload update_img"
                  alt={user?.avatar || "User avatar"}
                />
              ) : (
                <ImageError
                  width={720}
                  height={720}
                  src="/styles/avatar.jpg"
                  className="lazyload update_img"
                  alt="Default avatar"
                />
              )}
              {/* <!-- <div className="cover-icon">
                          <i className="fa-solid fa-pen">
                            <input type="file" onchange="readURL(this,0)">
                          </i>
                        </div> --> */}
            </div>
          </div>
          <div className="profile-name">
            <h3>{user?.fullname || 'Guest'}</h3>
            <h6 className="text-content"></h6>
          </div>
        </div>
      </div>
      <ul className="nav nav-pills user-nav-pills" id="pills-tab" role="tablist">
        {dashboardLeftSidebarItems.map((item, index) => (
          <DashboardLeftSidebarItem key={index} item={item} />
        ))}
      </ul>
    </motion.div>
  )
}

export default DashboardLeftSidebar