import { } from '@/types/common.types';
import React from 'react'
import BankSectionClient from '@/components/features/voucher/BankSection.client';
import { apiFetchFullUrl } from '@/lib/api/api';

const today = new Date();
const next30Days = new Date(new Date().setDate(today.getDate() + 30));
const voucherList: {
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

}[] = [
    {
      id: "bank-offer-1",
      code: "MULTICART",
      // Lấy ảnh từ class .bank-image
      imageUrl: "/assets/eme2023/images/grocery/bank/name/1.png",
      imagePriceUrl: "/assets/eme2023/images/grocery/bank/price/1.svg",
      description: "Get 10% OFF when you spend $20",
      minOrderValue: 20, // Từ text "$20"
      startDate: today,
      endDate: next30Days, // Khớp text "Valid for 30 days"

      // Các trường riêng của PercentageDiscountVoucherT
      discountType: "percentage",
      discountValue: 10, // Từ text "10% OFF"
      maxDiscountAmount: 50, // Giá trị giả định (vì HTML không ghi max cap)
    },
    {
      id: "bank-offer-2",
      code: "MULTICART",
      imageUrl: "/assets/eme2023/images/grocery/bank/name/2.png",
      imagePriceUrl: "/assets/eme2023/images/grocery/bank/price/2.svg",
      description: "Get 10% OFF when you spend $20",
      minOrderValue: 20,
      startDate: today,
      endDate: next30Days,

      discountType: "percentage",
      discountValue: 10,
      maxDiscountAmount: 50,
    },
    {
      id: "bank-offer-3",
      code: "MULTICART",
      imageUrl: "/assets/eme2023/images/grocery/bank/name/3.png",
      imagePriceUrl: "/assets/eme2023/images/grocery/bank/price/3.svg",
      description: "Get 10% OFF when you spend $20",
      minOrderValue: 20,
      startDate: today,
      endDate: next30Days,

      discountType: "percentage",
      discountValue: 10,
      maxDiscountAmount: 50,
    },

  ];
interface BankSectionProps {
  initialData?: {
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
  }[];
  title?: string;
  url?: string;
  hasIcon?: boolean;
}
async function BankSection({ initialData = voucherList, title, url, hasIcon }: BankSectionProps) {
  let data = initialData || await apiFetchFullUrl(url as string)
  return (
    <BankSectionClient initialData={data} title={title} hasIcon={hasIcon}></BankSectionClient>
  )
}

export default BankSection