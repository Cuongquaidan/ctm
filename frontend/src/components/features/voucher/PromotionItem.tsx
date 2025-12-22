import { formatDate } from '@/lib/helper'
import { VoucherCustomerT, VoucherStoreT, VoucherT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface PromotionItemProps {
  item: VoucherStoreT | VoucherT | VoucherCustomerT | {
    [key: string]: any
  };
  index: number;
}

function PromotionItem({ item, index }: PromotionItemProps) {


  return (
    <div className="bank-offer mb-4 wow fadeInUp shrink-0 h-full"

    >
      <div className="bank-header">
        <div className="bank-left w-100">
          <div className="bank-image">
            <ImageError width={300} height={100} src={"/assets/eme2023/images/grocery/bank/name/2.png"} className="img-fluid" alt={item.description || 'honeynet'} />
          </div>
          <div className="bank-name">
            <h2 className={`bank-offer-${index % 3 + 1} text-over-2 h-16`}>{item.name}</h2>
            <h5 className="discount text-content mt-auto"

            >HSD: {formatDate(new Date(item.end_date))}</h5>
          </div>
        </div>
        <div className="bank-right w-100">
          <ImageError width={180} height={120} src={"/assets/eme2023/images/grocery/bank/price/3.svg"} className="img-fluid" alt={item.description || 'honeynet'} />
        </div>
      </div>
      <div className={`bank-footer bank-footer-${index % 3 + 1}`}
        style={{
          borderRadius: "0 0 24px 24px "
        }}
      >
        <h4>Mã:
          <input value={item.code} disabled />
        </h4>
        <a href="#" className="bank-coupon btn">Chi tiết</a>
      </div>
    </div>
  )
}

export default PromotionItem