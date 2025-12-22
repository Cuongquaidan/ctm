'use client'

import { getFlashSaleByStoreAtTime, getProductsFlashsaleByQueries } from '@/lib/api/product'
import { ProductT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import VerticalProduct from '@/components/features/product/item/VerticalProduct'
import Link from 'next/link'
import { getInfoTimeFlashSale, transformFlashsaleItemToSingleProduct } from '@/lib/helper'
import { FLASH_SALE_TYPES } from '@/lib/constants/constants'
import TimingBox from '@/components/ui/TimingBox'

function FlashsaleTab({ storeId }: { storeId: number }) {
  const params = useParams()
  const searchParams = useSearchParams()
  const slug = params.slug as string

  // Lấy time từ query param ?ft=06:00, mặc định là "00:00"
  const { flashType } = getInfoTimeFlashSale();
  const currentTime = searchParams.get('ft') || flashType
  const currentActiveIndex = FLASH_SALE_TYPES.indexOf(currentTime);
  const currentTimeIndex = FLASH_SALE_TYPES.indexOf(flashType);
  const nextTimeIndex = (FLASH_SALE_TYPES.indexOf(flashType) + 1);

  const [data, setData] = useState<ProductT[]>([])

  const times = [
    { value: '00:00', label: '00:00 AM' },
    { value: '06:00', label: '06:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '18:00', label: '06:00 PM' },
  ]

  const handleChangeTime = async (time: string) => {
    const resdata = await getProductsFlashsaleByQueries({
      storeIds: storeId,
      ft: time,
    })
    const productsData = resdata.map(item => transformFlashsaleItemToSingleProduct(item));
    setData(productsData)
  }

  useEffect(() => {
    handleChangeTime(currentTime)
  }, [currentTime])
  return (
    <div className="feature-category-panel pt-0 mb-4">
      <div className="d-flex justify-content-center">
        <div className="feature-panel-slider w-100">
          {times.map((timeSlot, index) => (
            <div key={timeSlot.value} className={index === 0 ? 'me-2 flex-1' : 'mx-2 flex-1'}>
              <Link

                href={`/store/${slug}/tab-flash?ft=${timeSlot.value}`}
                className={`cate-box px-3 py-xxl-3 py-2 ${currentTime === timeSlot.value ? 'active' : ''}`}
              >
                <span className="fw-bold">{timeSlot.label}</span>
              </Link>
            </div>
          ))}
          {
            currentActiveIndex === currentTimeIndex || currentActiveIndex === nextTimeIndex ? (
              <TimingBox></TimingBox>
            ) : (null)
          }
        </div>
      </div>

      {/* Hiển thị danh sách sản phẩm flash sale */}
      <div className="row g-sm-4 g-3 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
        {data.length > 0 ? (
          data.map((product, index) => (
            <div key={product.id}>
              <VerticalProduct product={product} index={index} flash_type={product.flash_type} className='product-box-3 !border-0' />
            </div>
          ))
        ) : (
          <p className="text-center"><i>Chưa có sản phẩm giảm giá</i></p>
        )}
      </div>
    </div>
  )
}

export default FlashsaleTab