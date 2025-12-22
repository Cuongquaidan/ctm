'use client'

import { getFlashSaleByStoreAtTime } from '@/lib/api/product'
import { ProductT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import VerticalProductHover from '@/components/features/product/item/VerticalProductHover'
import Link from 'next/link'

function FlashsaleTabV2({ storeId }: { storeId: number }) {
  const params = useParams()
  const searchParams = useSearchParams()
  const slug = params.slug as string

  // Lấy time từ query param ?ft=06:00, mặc định là "00:00"
  const currentTime = searchParams.get('ft') || '00:00'
  const [data, setData] = useState<ProductT[]>([])

  const times = [
    { value: '00:00', label: '00:00 AM' },
    { value: '06:00', label: '06:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '18:00', label: '06:00 PM' },
  ]

  const handleChangeTime = async (time: string) => {
    const resdata = await getFlashSaleByStoreAtTime(storeId, new Date() + '', time)
    setData(resdata)
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
          <div className="timing-box d-flex justify-content-end h-100 ms-3 ms-xl-5">
            <div className="timing d-flex align-items-center d-none">
              <i className="fa-thin fa-clock font-20 me-1"></i>
              <h6 className="name">Thời gian còn :</h6>
              <div className="time ms-1 clockdiv1" >
                <ul>
                  <li>
                    <div className="counter bg-black text-white d-flex flex-column rounded border justify-content-center">
                      <div>
                        <span className="hours fw-bold fs-5 line-height-1"></span>
                      </div>
                      <span className="line-height-1">giờ</span>
                    </div>
                  </li>
                  <li></li>
                  <li>
                    <div className="counter bg-black text-white d-flex flex-column rounded border justify-content-center">
                      <div>
                        <span className="minutes fw-bold fs-5 line-height-1"></span>
                      </div>
                      <span className="line-height-1">phút</span>
                    </div>
                  </li>
                  <li></li>
                  <li>
                    <div className="counter bg-black text-white d-flex flex-column rounded border justify-content-center">
                      <div>
                        <span className="seconds fw-bold fs-5 line-height-1"></span>
                      </div>
                      <span className="line-height-1">giây</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hiển thị danh sách sản phẩm flash sale */}
      <div className="row g-sm-4 g-3 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
        {data.length > 0 ? (
          data.map((product, index) => (
            <div key={product.id}>
              <VerticalProductHover product={product} index={index} className='product-box-3 !border-0' />
            </div>
          ))
        ) : (
          <p className="text-center"><i>Chưa có sản phẩm giảm giá</i></p>
        )}
      </div>
    </div>
  )
}

export default FlashsaleTabV2
