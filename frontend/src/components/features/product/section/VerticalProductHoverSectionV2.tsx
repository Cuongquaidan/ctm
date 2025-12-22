
import { ProductT } from '@/types/common.types';
import React from 'react'
import { apiFetchFullUrl, apiFetchSites } from '@/lib/api/api';
import VerticalProductHoverSectionV2Client from './VerticalProductHoverSectionV2.client';
interface VerticalProductHoverSectionV2Props {
  title?: string;
  description?: string;
  breakpoints?: any;
  startDate?: Date;
  endDate?: Date;
  initialData: ProductT[];
  url?: string;
  hasIcon?: boolean;
  n: number;
  wrapperStyle?: React.CSSProperties;
  classOfColumn?: string;
  classOfItem?: string;
}
async function VerticalProductHoverSectionV2({ title, description, startDate, endDate, initialData, url, breakpoints, hasIcon, n, wrapperStyle, classOfItem, classOfColumn }: VerticalProductHoverSectionV2Props) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];

  return (
    <>
      <VerticalProductHoverSectionV2Client
        n={n}
        title={title}
        description={description}
        startDate={startDate}
        endDate={endDate}
        data={data}
        breakpoints={breakpoints}
        hasIcon={hasIcon}
        classOfItem={classOfItem}
        classOfColumn={classOfColumn}
        wrapperStyle={wrapperStyle}
      ></VerticalProductHoverSectionV2Client>
    </>
  )
}

export default VerticalProductHoverSectionV2