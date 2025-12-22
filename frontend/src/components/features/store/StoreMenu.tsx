'use client'

import { useParams, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
const menuItems = [
  { id: 'tab-home', label: 'Cửa hàng', icon: '/assets/eme2023/svg/1/vegetable.svg', alt: 'Cửa hàng' },
  { id: 'tab-flash', label: 'Flash Sale', icon: '/assets/eme2023/svg/1/breakfast.svg', alt: 'Giá sốc hôm nay' },
  { id: 'tab-promo', label: 'Mã giảm giá/ CT Khuyến mãi', icon: '/assets/eme2023/svg/1/breakfast.svg', alt: 'Giá sốc hôm nay' },
  { id: 'tab-product', label: 'Tất cả Sản phẩm', icon: '/assets/eme2023/svg/1/cup.svg', alt: 'Tất cả Sản phẩm' },
  { id: 'tab-news', label: 'Bài viết/ Tin tức', icon: '/assets/eme2023/svg/1/meats.svg', alt: 'Bài viết/ Tin tức' },
  { id: 'tab-review', label: 'Đánh giá cửa hàng', icon: '/assets/eme2023/svg/1/meats.svg', alt: 'Đánh giá cửa hàng' },
  // { id: 'tab-contact', label: 'Liên hệ cửa hàng', icon: '/assets/eme2023/svg/1/contact.svg', alt: 'Liên hệ cửa hàng' }
]

function StoreMenu() {
  const [activeTab, setActiveTab] = useState<string>(menuItems[0].id)
  const params = useParams()
  const pathname = usePathname()
  const slug = params.slug as string

  useEffect(() => {
    const currentTab = params?.tab?.[0] || menuItems[0].id

    const activeTabTemp = currentTab?.startsWith('tab-') ? currentTab : menuItems[0].id

    setActiveTab(activeTabTemp)
  }, [pathname])



  return (
    <motion.div
      className="left-box">
      <div className="shop-left-sidebar">
        <ul className="nav nav-pills mb-3 custom-nav-tab" id="store-tab" role="tablist">
          {menuItems.map((item, index) => {
            return (
              <li key={item.id} className="nav-item" role="presentation">
                <Link
                  href={
                    `/store/${slug}/${item.id}`
                  }
                  className={`nav-link d-flex align-items-center ${item.id === activeTab ? 'active' : ''}`}
                >
                  {item.label}
                  <img src={item.icon} className="lazyload" alt={item.alt} />
                </Link>
              </li>
            )
          })}
          {/* <li className="nav-item" role="presentation">
            <Link 
              href={`/store/${slug}/tab-info`}
              className={`nav-link d-flex align-items-center ${activeTab === 'tab-info' ? 'active' : ''}`}
            >
              Hồ sơ cửa hàng<img src="/assets/eme2023/svg/1/frozen.svg" className="lazyload" alt="Hồ sơ cửa hàng" />
            </Link>
          </li> */}
        </ul>
      </div>
    </motion.div>
  )
}

export default StoreMenu