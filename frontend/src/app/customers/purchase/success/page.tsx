import React from 'react'
import { fetchOrderSuccessDetail } from '@/lib/api/order'
import SuccessHeader from '@/components/features/purchase/SuccessHeader'
import OrderTable from '@/components/features/purchase/OrderTable'
import PriceDetails from '@/components/features/purchase/PriceDetails'
import ShippingAddress from '@/components/features/purchase/ShippingAddress'
import PaymentMethod from '@/components/features/purchase/PaymentMethod'

async function SuccessPage({
  searchParams,
}: {
  searchParams: { transactionId?: string }
}) {
  // Get transaction ID from URL params or use default
  const transactionId = searchParams.transactionId || '1708031724431131'

  let orderData = null;

  try {
    orderData = await fetchOrderSuccessDetail(transactionId);
  } catch (error) {
    console.error('Error fetching order details:', error);
    return (
      <div className="container-fluid-lg">
        <div className="alert alert-warning mt-5">Không thể tải thông tin đơn hàng. Vui lòng thử lại sau.</div>
      </div>
    );
  }

  return (
    <>
      <SuccessHeader transactionId={orderData.transactionId} />

      {/* Cart Section Start */}
      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-9 col-lg-8">
              <OrderTable items={orderData.items} />
            </div>

            <div className="col-xxl-3 col-lg-4">
              <div className="row g-4">
                <div className="col-lg-12 col-sm-6">
                  <PriceDetails
                    priceDetails={orderData.priceDetails}
                    itemCount={orderData.items.length}
                  />
                </div>

                <div className="col-lg-12 col-sm-6">
                  <ShippingAddress shippingAddress={orderData.shippingAddress} />
                </div>

                <div className="col-12">
                  <PaymentMethod paymentMethod={orderData.paymentMethod} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SuccessPage
