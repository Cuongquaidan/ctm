
import React from 'react'
import 'swiper/css';
import { PostItemT } from '@/types/common.types';
import { apiFetchSites } from '@/lib/api/api';
import NewsBlogSectionClient from './NewsBlogSection.client';
interface BlogSectionProps {
  initialData?: PostItemT[];
  uri?: string;
  title?: string;
  hasPagination?: boolean;
  description?: string;
  link?: string;
  wrapperStyle?: React.CSSProperties;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };
}


async function BlogSection({ initialData, uri, title, hasPagination, description, link, wrapperStyle, breakpoints }: BlogSectionProps) {

  const response = uri ? await apiFetchSites(uri as string) : undefined;
  const data = initialData || response?.data as PostItemT[];


  return (
    <>
      <NewsBlogSectionClient
        data={data}
        title={title}
        description={description}
        link={link}
        wrapperStyle={wrapperStyle}
        breakpoints={breakpoints}
        hasPagination={hasPagination}
      ></NewsBlogSectionClient>
    </>
  )
}

export default BlogSection