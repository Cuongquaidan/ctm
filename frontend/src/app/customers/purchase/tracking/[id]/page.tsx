import React from 'react'
import { fetchOrderTrackingById } from '@/lib/api/order'
import OrderDetails from '@/components/features/purchase/tracking/OrderDetails'
import TrackingHistory from '@/components/features/purchase/tracking/TrackingHistory'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'

async function TrackingPage({ params }: { params: { id: string } }) {
  let trackingData = null;

  try {
    trackingData = await fetchOrderTrackingById(params.id);
  } catch (error) {
    console.error('Error fetching order tracking:', error);
    return (
      <>
        <BreadcrumbBackToHome current='Order tracking' title='Order tracking'></BreadcrumbBackToHome>
        <div className="container-fluid-lg">
          <div className="alert alert-warning">Không thể tải thông tin đơn hàng. Vui lòng thử lại sau.</div>
        </div>
      </>
    );
  }

  return (
    <>
      <BreadcrumbBackToHome current='Order tracking' title='Order tracking'></BreadcrumbBackToHome>

      <OrderDetails data={trackingData} />

      <TrackingHistory history={trackingData.history} />
    </>
  )
}

export default TrackingPage