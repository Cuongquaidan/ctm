
import { getFeaturedProducts } from '@/lib/api/product';
import { ProductT } from '@/types/common.types';
import React from 'react'
import VerticalNItemsClient from '@/components/features/product/section/VerticalNItems.client';
import { apiFetchSites } from '@/lib/api/api';


interface VerticalNItemsProps {
  title?: string;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    }
  };
  description?: string;
  startDate?: Date;
  endDate?: Date;
  initialData?: ProductT[];
  url?: string;
  n: number;
  hasIcon?: boolean;
  wrapperStyle?: React.CSSProperties;
  classOfItem?: string;
  hasNavigation?: boolean;
  hasPagination?: boolean;
  link?: string;
}
async function VerticalNItems({ title, breakpoints, description, startDate, endDate, initialData, url, n, hasIcon, wrapperStyle, classOfItem, hasNavigation, hasPagination, link }: VerticalNItemsProps) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data || response as ProductT[];

  const groupedData: ProductT[][] = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i += n) {
      const group: ProductT[] = [];
      for (let j = 0; j < n; j++) {
        if (data[i + j]) {
          group.push(data[i + j]);
        }
      }
      groupedData.push(group);
    }
  }
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <>
      <VerticalNItemsClient
        initialData={data}
        title={title}
        breakpoints={breakpoints}
        hasPagination={hasPagination}
        description={description}
        startDate={startDate}
        endDate={endDate}
        hasIcon={hasIcon}
        wrapperStyle={wrapperStyle}
        classOfItem={classOfItem}
        hasNavigation={hasNavigation}
        link={link}
        n={n}
      ></VerticalNItemsClient>
    </>
  )
}

export default VerticalNItems