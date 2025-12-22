
"use client"
import React from 'react'
import BlogItem from '@/components/features/news/NewsBlogItem'
import 'swiper/css';
import { PostItemT } from '@/types/common.types';
import CustomSection from '@/components/ui/CustomSection';
interface BlogSectionClientProps {
  data?: PostItemT[];
  title?: string;
  description?: string;
  link?: string;
  hasPagination?: boolean;
  wrapperStyle?: React.CSSProperties;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };
}

function BlogSectionClient({ data, title, description, link, hasPagination, wrapperStyle, breakpoints }: BlogSectionClientProps) {
  return (
    <>
      <CustomSection<PostItemT>
        title={title}
        items={data}
        description={description}
        link={link}
        hasPagination={hasPagination}
        breakpoints={breakpoints}
        wrapperStyle={wrapperStyle}
        renderItem={(item, index) => (
          <BlogItem item={item} key={index}></BlogItem>
        )}
      ></CustomSection>
    </>
  )
}

export default BlogSectionClient