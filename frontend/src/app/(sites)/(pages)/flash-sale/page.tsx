"use client"
import VerticalProduct from '@/components/features/product/item/VerticalProduct'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import TimingBox from '@/components/ui/TimingBox'
import { getAllFlashsalesAtTime, getProductsFlashsale, getProductsFlashsaleByQueries } from '@/lib/api/product'
import { FlashsaleItemT, ProductT } from '@/types/common.types'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getInfoTimeFlashSale, transformFlashsaleItemToSingleProduct } from '@/lib/helper'

function page() {
  const searchParams = useSearchParams()
  const { flashType } = getInfoTimeFlashSale();

  // Lấy time từ query param ?ft=06:00, mặc định là "00:00"
  const currentTime = searchParams.get('ft') || flashType
  const [data, setData] = useState<ProductT[]>([])

  const times = [
    { value: '00:00', label: '00:00 AM' },
    { value: '06:00', label: '06:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '18:00', label: '06:00 PM' },
  ]

  const handleChangeTime = async (time: string) => {
    const resdata = await getProductsFlashsaleByQueries({
      ft: time
    })
    const dataProducts = resdata.map(item => transformFlashsaleItemToSingleProduct(item as FlashsaleItemT));
    setData(dataProducts)
  }

  useEffect(() => {
    handleChangeTime(currentTime)
  }, [currentTime])

  return (
    <>
      <BreadcrumbBackToHome current='Flash Sale' title='Flash Sale'></BreadcrumbBackToHome >

      <section className="section-b-space product-section breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="feature-category-panel pt-0 mb-4">
            <div className="d-flex justify-content-center">
              <div className="feature-panel-slider w-100">
                {times.map((timeSlot, index) => (
                  <div key={index} className={index === 0 ? 'me-2 flex-1' : 'mx-2 flex-1'}>
                    <Link
                      href={{
                        pathname: '/flash-sale',
                        query: { ft: timeSlot.value }
                      }}
                      className={`cate-box px-3 py-xxl-3 py-2 ${currentTime === timeSlot.value ? 'active' : ''}`}
                    >
                      <span className="fw-bold">{timeSlot.label}</span>
                    </Link>
                  </div>
                ))}

                <TimingBox />
              </div>
            </div>

            {/* Hiển thị danh sách sản phẩm flash sale */}
            <div className="row g-sm-4 g-3 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-1 mt-3">
              {data.length > 0 ? (
                data?.map((product, index) => (
                  <div key={index}>
                    <VerticalProduct product={product} index={index} flash_type={product.flash_type} className='product-box-3 !border-0 bg-white' />
                  </div>
                ))
              ) : (
                <p className="text-center"><i>Chưa có sản phẩm giảm giá</i></p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page