import React from 'react'
import { ProductT } from '@/types/common.types'
import { getActiveProductOffers, getActiveProductOffersByUrl } from '@/lib/api/product'
import DealSectionClient from '@/components/features/product/section/DealSection.client'
interface DealSectionProps {
  items?: ProductT[];
  url?: string;
}
async function DealSection({ items, url }: DealSectionProps) {
  let data = items || [];
  if (!items || !items.length) {
    if (url) {
      data = await getActiveProductOffersByUrl(url);
    } else {
      data = await getActiveProductOffers();
    }
  }
  return (
    <DealSectionClient items={data}></DealSectionClient>

  )
}

export default DealSection