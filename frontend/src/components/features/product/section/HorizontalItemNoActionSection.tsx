
import React from 'react'
import { ProductT } from '@/types/common.types'
import HorizontalItemNoActionSectionClient from '@/components/features/product/section/HorizontalItemNoActionSection.client'
import { apiFetchSites } from '@/lib/api/api';

interface HorizontalItemNoActionSectionProps {
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
  startDate?: Date;
  endDate?: Date;
  wrapperStyle?: React.CSSProperties;
  classOfColumn?: string;
  n: number;
  hasUnderline?: boolean;
  classOfItem?: string;
  classOfImg?: string;
}

async function HorizontalItemNoActionSection({ initialData, url, title, description, breakpoints, hasIcon, hasNavigation, link, startDate, endDate, wrapperStyle, classOfColumn, n, hasUnderline, classOfItem, classOfImg }: HorizontalItemNoActionSectionProps) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];

  return (
    <>
      <HorizontalItemNoActionSectionClient
        initialData={data}
        title={title}
        hasUnderline={hasUnderline}
        description={description}
        breakpoints={breakpoints}
        hasIcon={hasIcon}
        hasNavigation={hasNavigation}
        link={link}
        startDate={startDate}
        classOfImg={classOfImg}
        classOfItem={classOfItem}
        wrapperStyle={wrapperStyle}
        endDate={endDate}
        n={n}
        classOfColumn={classOfColumn}
      ></HorizontalItemNoActionSectionClient>
    </>
  )
}

export default HorizontalItemNoActionSection