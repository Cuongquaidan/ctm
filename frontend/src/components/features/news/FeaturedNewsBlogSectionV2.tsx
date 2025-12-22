import React from 'react'
import 'swiper/css';
import { PostItemT } from '@/types/common.types';
import FeaturedNewsBlogSectionV2Client from './FeaturedNewsBlogSectionV2.client';
import { getAllNews } from '@/lib/api/new';
import { apiFetchSites } from '@/lib/api/api';
interface FeaturedBlogSectionV2Props {
  initialData?: PostItemT[];
  uri?: string;
}

async function FeaturedBlogSectionV2({ initialData, uri }: FeaturedBlogSectionV2Props) {
  const response = !initialData ? await getAllNews({
    hotSh: 1
  }) : undefined;
  const data = initialData || response?.data as PostItemT[];


  return (
    <>
      <FeaturedNewsBlogSectionV2Client
        initialData={data}
      ></FeaturedNewsBlogSectionV2Client>
    </>
  )
}

export default FeaturedBlogSectionV2
