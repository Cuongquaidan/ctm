"use client"
import VerticalProduct from '@/components/features/product/item/VerticalProduct';
import SortBox from '@/components/ui/button/SortBox';
import Pagination from '@/components/ui/Pagination'
import SectionHeader from '@/components/ui/SectionHeader';
import { getAllProducts, getProductsByStoreIdByUrl, getProductsPaginated } from '@/lib/api/product';
import { ProductT } from '@/types/common.types';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'


interface ProductTabProps {
  storeId?: number
  url?: string
  initialData?: ProductT[]
}

function ProductTab({ storeId, url, initialData }: ProductTabProps) {


  const [data, setData] = useState<ProductT[]>(initialData || []);
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams();
  const searchParams = useSearchParams();

  // Lấy giá trị từ URL
  const page = parseInt(searchParams.get('page') || '1');
  const sortBy = searchParams.get('sort') || 'most_popular';
  const pageLen = parseInt(searchParams.get('pageLen') || '12');
  const { slug } = params;

  const handleGetAllProducts = async () => {
    try {
      setLoading(true);

      // Nếu có initialData và đang ở trang 1, dùng initialData
      if (initialData && initialData.length && page === 1 && !searchParams.get('sort')) {
        setData(initialData);
        return;
      }

      // Gọi API với các params
      const resdata = await getProductsPaginated({
        page: page,
        pageLen: pageLen,
        sortBy: sortBy,
        ...(storeId && { store_idSh: storeId }),
      });

      if (resdata) {
        setData(resdata.data);
        setPageTotal(resdata.pageTotal);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleGetAllProducts();
  }, [page, sortBy, pageLen, storeId]);






  return (
    <>
      <SectionHeader title='Tất cả sản phẩm'></SectionHeader>
      <SortBox />

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="row g-8">
            {data.map((item, index) => (
              <div key={item.id} className='col-xxl-3 col-md-4 col-6 wow fadeInUp'>
                <VerticalProduct product={item} index={index} className='product-box-4' />
              </div>
            ))}
          </div>

          {data.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">Không có sản phẩm nào</p>
            </div>
          )}

          {pageTotal > 1 && (
            <Pagination totalPages={pageTotal} />
          )}
        </>
      )}
    </>
  )
}

export default ProductTab