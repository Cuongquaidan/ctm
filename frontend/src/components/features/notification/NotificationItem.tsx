import { formatDateTime } from '@/lib/helper'
import { NotificationT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface NotificationItemProps {
  item: NotificationT;
}

function NotificationItem({ item }: NotificationItemProps) {
  return (
    <li>
      <a href="https://ca-ctm.systems.com.vn/customers/notifications/detail?type=personal&id=135">
        <div className="people-box">
          <div>
            <div className="people-image people-text">
              <ImageError width={180} height={180} alt="user" className="img-fluid " src="https://ca-ctm.systems.com.vn/styles/logo.png" />
            </div>
          </div>
          <div className="people-comment position-relative">
            <div className="people-name">
              <h5 className="mb-2 fw-500 text-theme">{item.title}</h5>
              <div className="date-time">
                <h6 className="text-content">{formatDateTime(item.createdAt)}</h6>
              </div>
            </div>
          </div>
        </div>
      </a>

    </li>
  )
}

export default NotificationItem