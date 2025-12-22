
import { ProductT } from '@/types/common.types';
import React from 'react'
import { apiFetchFullUrl, apiFetchSites } from '@/lib/api/api';
import VerticalProductHoverSectionV3Client from './VerticalProductHoverSectionV3.client';
interface VerticalProductHoverSectionV3Props {
  title?: string;
  description?: string;
  breakpoints?: any;
  startDate?: Date;
  endDate?: Date;
  hasNavigation?: boolean;
  initialData: ProductT[];
  url?: string;
  hasIcon?: boolean;
  n: number;
  wrapperStyle?: React.CSSProperties;
  classOfItem?: string;
}
async function VerticalProductHoverSectionV3({ title, description, startDate, endDate, initialData, url, breakpoints, hasIcon, n, wrapperStyle, classOfItem, hasNavigation }: VerticalProductHoverSectionV3Props) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];

  return (
    <>
      <VerticalProductHoverSectionV3Client
        n={n}
        title={title}
        description={description}
        startDate={startDate}
        endDate={endDate}
        data={data}
        hasNavigation={hasNavigation}
        breakpoints={breakpoints}
        hasIcon={hasIcon}
        classOfItem={classOfItem}
        wrapperStyle={wrapperStyle}
      ></VerticalProductHoverSectionV3Client>
    </>
  )
}

export default VerticalProductHoverSectionV3