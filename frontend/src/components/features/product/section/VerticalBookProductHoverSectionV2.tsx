
import { BookT, ProductT } from '@/types/common.types';
import React from 'react'
import VerticalBookProductHoverSectionV2Client from '@/components/features/product/section/VerticalBookProductHoverSectionV2.client';
import { apiFetchSites } from '@/lib/api/api';
interface VerticalBookProductHoverSectionV2Props {
  title?: string;
  description?: string;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };
  startDate?: Date;
  endDate?: Date;
  initialData: BookT[];
  url?: string;
  hasIcon?: boolean;
  n: number;
  wrapperStyle?: React.CSSProperties;
  classOfItem?: string;
}
async function VerticalBookProductHoverSectionV2({ title, description, startDate, endDate, initialData, url, breakpoints, hasIcon, n, wrapperStyle, classOfItem }: VerticalBookProductHoverSectionV2Props) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];
  return (
    <>
      <VerticalBookProductHoverSectionV2Client
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
      ></VerticalBookProductHoverSectionV2Client>
    </>
  )
}

export default VerticalBookProductHoverSectionV2