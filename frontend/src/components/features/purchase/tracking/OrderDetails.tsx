import React from 'react'
import ImageError from '@/components/ui/ImageError'
import { OrderTrackingDetailT } from '@/types/common.types'
import { formatEstimatedDelivery } from '@/lib/helper'
import OrderDetailsCard from '@/components/features/purchase/tracking/OrderDetailsCard'
import TrackingProgress from '@/components/features/purchase/tracking/TrackingProgress'

interface OrderDetailsProps {
  data: OrderTrackingDetailT
}

function OrderDetails({ data }: OrderDetailsProps) {
  return (
    <section className="order-detail">
      <div className="container-fluid-lg">
        <div className="row g-sm-4 g-3">
          <div className="col-xxl-3 col-xl-4 col-lg-6">
            <div className="order-image">
              <ImageError
                src={data.productImage}
                className="img-fluid"
                alt={data.productName || 'Product'}
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="col-xxl-9 col-xl-8 col-lg-6">
            <div className="row g-sm-4 g-3">
              <div className="col-xl-4 col-sm-6">
                <OrderDetailsCard
                  icon="package"
                  title="Tracking Code"
                  content={<h2 className="theme-color">{data.trackingCode}</h2>}
                />
              </div>

              <div className="col-xl-4 col-sm-6">
                <OrderDetailsCard
                  icon="truck"
                  title="Service"
                  content={data.service.logo}
                />
              </div>

              <div className="col-xl-4 col-sm-6">
                <OrderDetailsCard
                  icon="info"
                  title="Package Info"
                  content={data.packageInfo}
                />
              </div>

              <div className="col-xl-4 col-sm-6">
                <OrderDetailsCard
                  icon="crosshair"
                  title="From"
                  content={data.from}
                />
              </div>

              <div className="col-xl-4 col-sm-6">
                <OrderDetailsCard
                  icon="map-pin"
                  title="Destination"
                  content={data.destination}
                />
              </div>

              <div className="col-xl-4 col-sm-6">
                <OrderDetailsCard
                  icon="calendar"
                  title="Estimated Time"
                  content={formatEstimatedDelivery(data.estimatedDelivery)}
                />
              </div>

              <TrackingProgress timeline={data.timeline} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderDetails
