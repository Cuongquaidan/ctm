import React from 'react'
interface CheckoutItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}
function CheckoutItem({ icon, title, children }: CheckoutItemProps) {
  return (
    <>
      <div className="checkout-icon">
        {icon}
      </div>
      <div className="checkout-box">
        <div className="checkout-title">
          <h4>{title}</h4>
        </div>

        <div className="checkout-detail">
          {children}
        </div>
      </div>
    </>
  )
}

export default CheckoutItem