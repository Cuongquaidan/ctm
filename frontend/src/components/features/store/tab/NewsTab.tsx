"use client"
import SectionHeader from '@/components/ui/SectionHeader';
import { getAllNews } from '@/lib/api/new'
import React, { useEffect, useState } from 'react'
import NewsItem from '@/components/features/news/NewsItemHasAuthor';
import { PostItemT } from '@/types/common.types';
import Pagination from '@/components/ui/Pagination';
import { useSearchParams } from 'next/navigation';

interface NewsTabProps {
  storeId?: number
  initialData?: PostItemT[]
}

function NewsTab({ storeId, initialData }: NewsTabProps) {
  const [data, setData] = useState<PostItemT[]>(initialData || []);
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  // Lấy giá trị từ URL
  const page = parseInt(searchParams.get('page') || '1');
  const pageLen = parseInt(searchParams.get('pageLen') || '12');

  const handleGetAllNews = async () => {
    try {
      setLoading(true);

      // Nếu có initialData và đang ở trang 1, dùng initialData
      if (initialData && initialData.length && page === 1) {
        setData(initialData);
        return;
      }

      // Gọi API với các params
      const resdata = await getAllNews({
        page: page,
        pageLen: pageLen,
        ...(storeId && { store_idSh: storeId }),
      });

      if (resdata) {
        setData(resdata.data);
        setPageTotal(resdata.pageTotal);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleGetAllNews();
  }, [page, pageLen, storeId]);

  return (
    <>
      <SectionHeader title='Bài viết/ Tin tức'></SectionHeader>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <section className="blog-section pt-0">
            <div className="row g-4 ratio_65">
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className='col-xxl-4 col-sm-6'
                >
                  <NewsItem index={index} item={item} />
                </div>
              ))}
            </div>
          </section>

          {data.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">Không có bài viết nào</p>
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

export default NewsTab