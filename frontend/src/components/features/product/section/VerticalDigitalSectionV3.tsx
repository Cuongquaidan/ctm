

import React from 'react'
import { getFeaturedProductsByUrl } from '@/lib/api/product';
import VerticalDigitalSectionV3Client from '@/components/features/product/section/VerticalDigitalSectionV3.client';
import { DigitalProductT } from '@/app/(sites)/extras/index11/page';
import { apiFetchSites } from '@/lib/api/api';

interface VerticalDigitalSectionV3Props {
  initialData?: DigitalProductT[];
  url?: string;
  title?: string;
  n: number;
  description?: string;
  categories?: {
    name: string;
    link: string;
    image: string;
    slug: string;
  }[];
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };

}
async function VerticalDigitalSectionV3({ initialData, url, title, n, description, categories, breakpoints }: VerticalDigitalSectionV3Props) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as DigitalProductT[];
  return (
    <VerticalDigitalSectionV3Client
      initialData={data}
      categories={categories}
      title={title}
      description={description}
      breakpoints={breakpoints}
      n={n}
    ></VerticalDigitalSectionV3Client>
  )
}

export default VerticalDigitalSectionV3