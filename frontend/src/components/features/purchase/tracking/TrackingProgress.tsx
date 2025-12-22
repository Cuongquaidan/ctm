import React from 'react'
import { TrackingTimelineT } from '@/types/common.types'
import { formatTrackingTime } from '@/lib/helper'

interface TrackingProgressProps {
  timeline: TrackingTimelineT[]
}

function TrackingProgress({ timeline }: TrackingProgressProps) {
  return (
    <div className="col-12 overflow-hidden">
      <ol className="progtrckr">
        {timeline.map((item, index) => (
          <li
            key={index}
            className={item.isCompleted ? 'progtrckr-done' : 'progtrckr-todo'}
          >
            <h5>{item.label}</h5>
            <h6>{item.datetime ? formatTrackingTime(item.datetime) : 'Pending'}</h6>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default TrackingProgress
