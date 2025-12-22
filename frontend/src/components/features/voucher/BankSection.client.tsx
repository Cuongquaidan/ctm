"use client"
import CustomSection from '@/components/ui/CustomSection';
import { VoucherT } from '@/types/common.types';
import React from 'react'
import PromotionItem from './PromotionItem';
interface BankSectionClientProps {
  initialData: {
    id: string;
    code: string;
    imageUrl: string;
    imagePriceUrl: string;
    description: string;
    minOrderValue: number;
    startDate: Date;
    endDate: Date;
    discountType: "percentage" | "fixed_amount";
    discountValue: number;
    maxDiscountAmount: number;
  }[],
  title?: string,
  hasIcon?: boolean
}
function BankSectionClient({ initialData, title, hasIcon }: BankSectionClientProps) {
  return (
    <CustomSection
      items={initialData}
      hasIcon={hasIcon}
      title={title}
      hasNavigation={true}
      wrapperStyle={{
        border: "none"
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024: {
          spaceBetween: 20,
          slidesPerView: 3
        }
      }}
      renderItem={(item, index) => (
        <PromotionItem key={item.id} item={item} index={index} />
      )}
      isLoop={true}
    ></CustomSection>
  )
}

export default BankSectionClient