import ImageError from '@/components/ui/ImageError'
import React from 'react'

function SubFooter() {
  return (
    <div className="sub-footer">
      <div className="reserve">
        <h6 className="text-content">©2022 Fastkart All rights reserved</h6>
      </div>

      <div className="payment d-flex align-items-center justify-center">
        <ImageError unoptimized src="/assets/eme2023/images/payment/1.png" width={300} height={100} alt="Payment Methods" />
      </div>
    </div>
  )
}

export default SubFooter