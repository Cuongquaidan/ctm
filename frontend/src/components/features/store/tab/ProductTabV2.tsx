"use client"
import VerticalProductHover from '@/components/features/product/item/VerticalProductHover';
import SortBox from '@/components/ui/button/SortBox';
import Pagination from '@/components/ui/Pagination'
import SectionHeaderV2 from '@/components/ui/SectionHeaderV2';
import { getAllProducts, getProductsByStoreIdByUrl } from '@/lib/api/product';
import { ProductT } from '@/types/common.types';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'


interface ProductTabV2Props {
  url?: string
  initialData?: ProductT[]
}

function ProductTabV2({ url, initialData }: ProductTabV2Props) {
  const [data, setData] = useState<ProductT[]>(initialData || []);
  const params = useParams();
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort') || 'most_popular';
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || '12');
  const { slug } = params;

  const handleGetAllProducts = async () => {
    // Gọi API lấy sản phẩm với sortBy, page, pageSize
    if (initialData && initialData.length) {
      setData(initialData)
      return
    }

    if (url) {
      const resdata = await getProductsByStoreIdByUrl(url)
      setData(resdata)
    } else {
      const resdata = await getAllProducts({ storeSlug: slug + "", sortBy: sort, page, pageSize });
      setData(resdata);
    }
  }

  useEffect(() => {
    handleGetAllProducts();
  }, [slug, url, initialData]);






  return (
    <>
      <SectionHeaderV2 title='Tất cả sản phẩm'></SectionHeaderV2>
      <SortBox />
      <div className="row g-8">
        {data.map((item, index) => (
          <div key={item.id} className='col-xxl-3 col-md-4 col-6 wow fadeInUp'>
            <VerticalProductHover product={item} index={index} className='product-box-4' />

          </div>

        ))}
      </div>
      <Pagination totalPages={5} ></Pagination>
    </>
  )
}

export default ProductTabV2
