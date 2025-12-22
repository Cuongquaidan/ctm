
import { getFeaturedProducts } from '@/lib/api/product';
import { ProductT } from '@/types/common.types';
import React from 'react'
import VerticalNItemV2Client from '@/components/features/product/section/VerticalNItemV2.client';
import { apiFetchSites } from '@/lib/api/api';


interface VerticalNItemV2Props {
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
}
async function VerticalNItemV2({ title, breakpoints, description, startDate, endDate, initialData, url, n, hasIcon, wrapperStyle, classOfItem, hasNavigation }: VerticalNItemV2Props) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];

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

  return (
    <>
      <VerticalNItemV2Client
        initialData={data}
        title={title}
        breakpoints={breakpoints}
        description={description}
        startDate={startDate}
        endDate={endDate}
        n={n}
        hasIcon={hasIcon}
        wrapperStyle={wrapperStyle}
        classOfItem={classOfItem}
        hasNavigation={hasNavigation}
      ></VerticalNItemV2Client>
    </>
  )
}

export default VerticalNItemV2