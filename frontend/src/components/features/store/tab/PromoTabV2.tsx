"use client"
import PromotionItem from '@/components/features/voucher/PromotionItem';
import SectionHeaderV2 from '@/components/ui/SectionHeaderV2';
import { getVouchers, getVouchersByUrl } from '@/lib/api/voucher';
import { VoucherStoreT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import 'swiper/css';
interface PromoTabV2Props {
  uri?: string
  initialData?: VoucherStoreT[]
}

function PromoTabV2({ uri, initialData }: PromoTabV2Props) {
  const [data, setData] = useState<VoucherStoreT[]>(initialData || []);
  const handleFetchPromotions = async () => {
    if (initialData && initialData.length) {
      setData(initialData)
      return
    }

    if (uri) {
      const resdata = await getVouchersByUrl(uri)
      setData(resdata as VoucherStoreT[])
    } else {
      const resdata = await getVouchers();
      setData(resdata.list as VoucherStoreT[]);
    }
  }

  useEffect(() => {
    handleFetchPromotions();
  }, [uri, initialData]);
  return (
    <>
      <SectionHeaderV2 title='Mã giảm giá'></SectionHeaderV2>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0 }}
        className="bank-section mb-3 drag-scroll d-flex gap-4 overflow-x-auto hide-scrollbar"

      >
        <Swiper
          slidesPerView={3}
          spaceBetween={80}

        >
          {data.map((item, index) => (
            <SwiperSlide key={index} style={{
              marginRight: 0,
              width: "100%"
            }}>
              <PromotionItem item={item} key={index}
                index={index}
              ></PromotionItem>
            </SwiperSlide>
          ))}
        </Swiper>

      </motion.div>

    </>

  )
}

export default PromoTabV2
