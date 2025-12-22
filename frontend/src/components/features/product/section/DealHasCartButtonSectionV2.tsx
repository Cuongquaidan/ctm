import { getAllStoreAds } from '@/lib/api/store';
import { ProductT, StoreAdT } from '@/types/common.types';
import React from 'react'
import DealHasCartButtonSectionClientV2 from './DealHasCartButtonSectionV2.client';
import { getActiveProductOffers } from '@/lib/api/product';

interface DealHasCartButtonSectionV2Props {
  initialData?: ProductT[];
}
async function DealHasCartButtonSectionV2({ initialData }: DealHasCartButtonSectionV2Props) {
  let data = initialData || await getActiveProductOffers();
  return (
    <DealHasCartButtonSectionClientV2 initialData={data}></DealHasCartButtonSectionClientV2>
  )
}

export default DealHasCartButtonSectionV2