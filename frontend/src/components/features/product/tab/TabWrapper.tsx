
import React from 'react'
import ProductDescriptionTab from '@/components/features/product/tab/ProductDescriptionTab'
import ProductInfoDetailTab from '@/components/features/product/tab/ProductInfoDetailTab'
import ReviewTab from '@/components/features/product/tab/ReviewTab'
import { ProductT } from '@/types/common.types'
import Link from 'next/link'

interface TabWrapperProps {
  product: ProductT;
  currentTab?: string;
}

function TabWrapper({ product, currentTab }: TabWrapperProps) {
  const activeTab = currentTab || 'description'

  return (
    <>
      <ul className="nav nav-tabs custom-nav" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <Link
            href="?tab=description"
            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
            scroll={false}
          >
            Mô tả sản phẩm
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            href="?tab=info"
            className={`nav-link ${activeTab === 'info' ? 'active' : ''}`}
            scroll={false}
          >
            Thông tin chi tiết
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            href="?tab=review"
            className={`nav-link ${activeTab === 'review' ? 'active' : ''}`}
            scroll={false}
          >
            Đánh giá - Nhận xét từ Khách Hàng
          </Link>
        </li>
      </ul>

      <div className="tab-content custom-tab" id="myTabContent">
        {activeTab === 'description' && <ProductDescriptionTab description={product.content} />}
        {activeTab === 'info' && <ProductInfoDetailTab info={product.detail_info} />}
        {activeTab === 'review' && <ReviewTab productId={product.id} />}
      </div>
    </>
  )
}

export default TabWrapper