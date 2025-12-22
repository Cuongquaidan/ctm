import ImageError from '@/components/ui/ImageError';
import { formatCurrency, formatDateTime } from '@/lib/helper'
import { VoucherCustomerT, VoucherT } from '@/types/common.types'
import React from 'react'

interface VoucherItemProps {
  item: VoucherCustomerT | VoucherT;
}

function VoucherItem({ item }: VoucherItemProps) {

  return (
    <div className="col-xxl-4 col-sm-6">
      <div className="blog-box wow fadeInUp h-full">
        <div className="blog-image bg-white">
          <a >
            <ImageError
              alt={item.description || "Voucher Image"}
              src={item.image}
              className="bg-img w-full lazyload"
              width={400}
              height={400}
            ></ImageError>
          </a>
        </div>
        <div className="blog-contain">
          {item.name}
          {/* <p>
            Áp dụng từ <b>{formatDateTime(new Date(item.start_date))}</b> đến{' '}
            <b>{formatDateTime(new Date(item.end_date))}</b>
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default VoucherItem