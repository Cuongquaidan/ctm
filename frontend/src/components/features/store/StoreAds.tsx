
import { StoreAdT } from '@/types/common.types'
import React from 'react'
import StoreAdsClient from '@/components/features/store/StoreAds.client'
import { getAllStoreAds } from '@/lib/api/store'

async function StoreAds({ initialData }: { initialData?: StoreAdT[] }) {
  let items = initialData || await getAllStoreAds();
  return (
    <StoreAdsClient items={items}></StoreAdsClient>
  )
}

export default StoreAds