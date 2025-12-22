import { formatDate } from '@/lib/helper'
import { NotificationT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface NotificationHoverItemProps {
  item: NotificationT;
}

function NotificationHoverItem({ item }: NotificationHoverItemProps) {
  return (
    <a href="#" className='d-flex align-items-center gap-3 mb-3'>
      <ImageError src="https://ca-ctm.systems.com.vn/styles/logo.png" alt="user" className="img-fluid w-6" width={90} height={90} />
      <div className="d-flex flex-column flex-fill">
        <span className='fw-400 text-theme text-1-line'>{item.title}</span>
        <span className='fw-400 text-body'>{formatDate(item.createdAt)}</span>
      </div>
    </a>
  )
}

export default NotificationHoverItem