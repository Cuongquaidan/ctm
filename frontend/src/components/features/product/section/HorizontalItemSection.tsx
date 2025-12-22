
import React from 'react'
import { ProductT } from '@/types/common.types'
import HorizontalItemSectionClient from '@/components/features/product/section/HorizontalItemSection.client';
import { apiFetchSites } from '@/lib/api/api';

interface HorizontalItemSectionProps {
  initialData?: ProductT[];
  url?: string;
  title?: string;
  description?: string;
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };
  hasIcon?: boolean;
  hasNavigation?: boolean;
  link?: string;
  wrapperStyle?: React.CSSProperties;
  startDate?: Date;
  endDate?: Date;
  n: number;
  hasUnderline?: boolean;
  classOfColumn?: string;
}

async function HorizontalItemSection({ initialData, url, title, description, breakpoints, hasIcon, hasNavigation, link, wrapperStyle, startDate, endDate, n, hasUnderline, classOfColumn }: HorizontalItemSectionProps) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];


  return (
    <>
      <HorizontalItemSectionClient
        n={n}
        initialData={data}
        title={title}
        description={description}
        wrapperStyle={wrapperStyle}
        breakpoints={breakpoints}
        hasIcon={hasIcon}
        hasNavigation={hasNavigation}
        classOfColumn={classOfColumn}
        link={link}
        startDate={startDate}
        endDate={endDate}
        hasUnderline={hasUnderline}
      ></HorizontalItemSectionClient>
    </>
  )
}

export default HorizontalItemSection