import React from 'react'
import { OrderTrackingDetailT } from '@/types/common.types'
import { formatOrderHistoryDateTime } from '@/lib/helper'

interface TrackingHistoryProps {
  history: OrderTrackingDetailT['history']
}

function TrackingHistory({ history }: TrackingHistoryProps) {
  return (
    <section className="order-table-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table order-tab-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item, index) => {
                    const { date, time } = formatOrderHistoryDateTime(item.datetime)
                    return (
                      <tr key={index}>
                        <td>{item.description}</td>
                        <td>{date}</td>
                        <td>{time}</td>
                        <td>{item.location}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackingHistory
