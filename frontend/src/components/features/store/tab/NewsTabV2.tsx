
import SectionHeaderV2 from '@/components/ui/SectionHeaderV2';
import { getAllNews } from '@/lib/api/new'
import React from 'react'
import NewsItem from '@/components/features/news/NewsItemHasAuthor';
import { PostItemT } from '@/types/common.types';

interface NewsTabV2Props {
  url?: string
  initialData?: PostItemT[]
}

async function NewsTabV2({ url, initialData }: NewsTabV2Props) {
  const data = initialData && initialData.length ? initialData : (url ? (await getAllNews({})).data : (await getAllNews({})).data);
  return (
    <>
      <SectionHeaderV2 title='Bài viết/ Tin tức'></SectionHeaderV2>
      <section className="blog-section pt-0">
        <div className="row g-4 ratio_65">
          {data.map((item, index) => (
            <NewsItem index={index} key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default NewsTabV2
