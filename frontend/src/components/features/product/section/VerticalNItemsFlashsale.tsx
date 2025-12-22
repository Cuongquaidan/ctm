
import { FlashsaleItemT, ProductT } from '@/types/common.types';
import React from 'react'
import VerticalNItemsClient from '@/components/features/product/section/VerticalNItems.client';
import { apiFetchSites } from '@/lib/api/api';
import { transformFlashsaleItemToSingleProduct } from '@/lib/helper';
import { getProductsFlashsale, getProductsFlashsaleByUri } from '@/lib/api/product';


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
  isFlashSaleItem?: boolean;
  link?: string;
}

async function VerticalNItemsFlashsale({ title, breakpoints, description, startDate, endDate, initialData, url, n, hasIcon, wrapperStyle, classOfItem, hasNavigation, hasPagination, link, isFlashSaleItem }: VerticalNItemsProps) {
  const response = url ? await getProductsFlashsaleByUri(url as string) : undefined;
  const data = initialData || response as FlashsaleItemT[];
  const dataProducts = data.map(item => transformFlashsaleItemToSingleProduct(item as FlashsaleItemT));



  const groupedData: ProductT[][] = [];
  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i += n) {
      const group: ProductT[] = [];
      for (let j = 0; j < n; j++) {
        if (dataProducts[i + j]) {
          group.push(dataProducts[i + j]);
        }
      }
      groupedData.push(group);
    }
  }
  if (!dataProducts || dataProducts.length === 0) {
    return <></>;
  }

  return (
    <>
      <VerticalNItemsClient
        initialData={dataProducts}
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
        isFlashSaleItem={isFlashSaleItem}
      ></VerticalNItemsClient>
    </>
  )
}

export default VerticalNItemsFlashsale