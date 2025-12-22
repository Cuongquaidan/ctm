
import { ProductT } from '@/types/common.types';
import React from 'react'
import HorizontalNItemsSectionV2Client from '@/components/features/product/section/HorizontalNItemsSectionV2.client';
import { apiFetchSites } from '@/lib/api/api';
interface HorizontalNItemsSectionV2Props {
  title?: string;
  description?: string;
  initialData?: ProductT[];
  url?: string;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    }
  }
  startDate?: Date;
  endDate?: Date;
  n: number;
  hasIcon?: boolean;
  hasNavigation?: boolean;
}
async function HorizontalNItemsSectionV2({ title, description, initialData, url, breakpoints, startDate, endDate, n, hasIcon, hasNavigation }: HorizontalNItemsSectionV2Props) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];
  return (
    <HorizontalNItemsSectionV2Client
      n={n}
      initialData={data}
      title={title}
      breakpoints={breakpoints}
      hasIcon={hasIcon}
      hasNavigation={hasNavigation}
      startDate={startDate}
      description={description}
      endDate={endDate}
    ></HorizontalNItemsSectionV2Client>
  )
}

export default HorizontalNItemsSectionV2