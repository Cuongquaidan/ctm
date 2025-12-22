
import { ProductT } from '@/types/common.types';
import React from 'react'
import { getFeaturedProductsByUrl } from '@/lib/api/product';
import Vertical3ActionSectionV3Client from '@/components/features/product/section/Vertical3ActionSectionV3.client';

interface Vertical3ActionSectionV3Props {
  initialData?: ProductT[];
  url?: string;
  title?: string;
  description?: string;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };

}
async function Vertical3ActionSectionV3({ initialData, url, title, description, breakpoints }: Vertical3ActionSectionV3Props) {
  let data = initialData || await getFeaturedProductsByUrl(url || '');
  return (
    <Vertical3ActionSectionV3Client
      initialData={data}
      title={title}
      description={description}
      breakpoints={breakpoints}
    ></Vertical3ActionSectionV3Client>
  )
}

export default Vertical3ActionSectionV3