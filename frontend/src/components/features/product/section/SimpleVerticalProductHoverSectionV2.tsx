
import { ProductT } from '@/types/common.types';
import React from 'react'
import SimpleVerticalProductHoverSectionV2Client from './SimpleVerticalProductHoverSectionV2.client';
import { apiFetchSites } from '@/lib/api/api';
interface SimpleVerticalProductHoverSectionV2Props {
  title?: string;
  description?: string;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };
  startDate?: Date;
  endDate?: Date;
  initialData: ProductT[];
  url?: string;
  hasIcon?: boolean;
  n: number;
  wrapperStyle?: React.CSSProperties;
  classOfItem?: string;
}
async function SimpleVerticalProductHoverSectionV2({ title, description, startDate, endDate, initialData, url, breakpoints, hasIcon, n, wrapperStyle, classOfItem }: SimpleVerticalProductHoverSectionV2Props) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];
  return (
    <>
      <SimpleVerticalProductHoverSectionV2Client
        n={n}
        title={title}
        description={description}
        startDate={startDate}
        endDate={endDate}
        data={data}
        breakpoints={breakpoints}
        hasIcon={hasIcon}
        classOfItem={classOfItem}
        wrapperStyle={wrapperStyle}
      ></SimpleVerticalProductHoverSectionV2Client>
    </>
  )
}

export default SimpleVerticalProductHoverSectionV2