"use client"
import PromotionItem from '@/components/features/voucher/PromotionItem';
import SectionHeader from '@/components/ui/SectionHeader';
import { getVouchers, getVouchersByUrl, getVoucherStores } from '@/lib/api/voucher';
import { VoucherStoreT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import CustomSection from '@/components/ui/CustomSection';
interface PromoTabProps {
  uri?: string
  storeId: number
  initialData?: VoucherStoreT[]
}

function PromoTab({ uri, storeId, initialData }: PromoTabProps) {
  const [data, setData] = useState<VoucherStoreT[]>(initialData || []);
  const handleFetchPromotions = async () => {
    if (initialData && initialData.length) {
      setData(initialData)
      return
    }

    if (!initialData) {
      const resdata = await getVoucherStores({
        storeIdSh: storeId
      })
      setData(resdata as VoucherStoreT[])
    } else {
      // const resdata = await getVouchers();
      setData([] as VoucherStoreT[]);
    }
  }

  useEffect(() => {
    handleFetchPromotions();
  }, [uri, initialData]);
  return (
    <div className='bank-section'>
      <CustomSection<VoucherStoreT>
        title='Mã giảm giá'
        hasNavigation={true}
        items={data}
        renderItem={(item, index) => (
          <PromotionItem item={item} key={index} index={index}></PromotionItem>
        )}
        wrapperStyle={{
          border: "none"
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}

      ></CustomSection>

    </div>
  )
}

export default PromoTab