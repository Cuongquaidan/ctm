import { formatDateTime } from '@/lib/helper'
import { NotificationT } from '@/types/common.types'
import React from 'react'

interface TimerNotificationProps {
  item: NotificationT
}
function TimerNotification({ item }: TimerNotificationProps) {
  return (
    <div className="timer-notification">
      <h6><strong className="me-1">{item.title}</strong>{item.message}<strong className="ms-1">{formatDateTime(item.createdAt)}
      </strong>

      </h6>
    </div>
  )
}

export default TimerNotification