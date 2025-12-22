
import React from 'react'
import { ProductT } from '@/types/common.types'
import VerticalNItems from '@/components/features/product/section/VerticalNItems'
import { data } from '@/assets/data/Home'
import VerticalNItemsFlashsale from '@/components/features/product/section/VerticalNItemsFlashsale'
import { getInfoTimeFlashSale } from '@/lib/helper'
import { buildURIWithQueries } from '@/lib/api/api'


function HomeTab({ storeId }: { storeId: number }) {
  const { endCountdownDate, flashType, startCountdownDate } = getInfoTimeFlashSale();

  return (
    <>
      <VerticalNItemsFlashsale
        title='Flash Sale'
        link='/flash-sale'
        startDate={startCountdownDate}
        endDate={endCountdownDate}
        url={buildURIWithQueries('/promotions/getFlashSaleByProducts', {
          ft: flashType,
          storeIds: storeId
        })}
        n={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 0
          },
          1800: {
            slidesPerView: 6,
            spaceBetween: 0
          }
        }}

      ></VerticalNItemsFlashsale>
      <VerticalNItems
        url={buildURIWithQueries("/products/getList", {
          store_idSh: storeId,
          hotSh: 1
        })}
        title='Sản phẩm Nổi bật'
        hasNavigation={true}
        n={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 0
          },
          1800: {
            slidesPerView: 6,
            spaceBetween: 0
          }
        }}

      ></VerticalNItems>
    </>
  )
}

export default HomeTab