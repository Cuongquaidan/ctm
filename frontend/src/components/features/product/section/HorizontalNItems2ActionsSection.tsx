import { ProductT } from '@/types/common.types';
import React from 'react'
import HorizontalNItems2ActionsSectionClient from '@/components/features/product/section/HorizontalNItems2ActionsSection.client';
import { apiFetchSites } from '@/lib/api/api';
interface HorizontalNItems2ActionsSectionProps {
  n: number;
  initialData?: ProductT[];
  url?: string;
  title?: string;
}

async function HorizontalNItems2ActionsSection({ initialData, url, title, n }: HorizontalNItems2ActionsSectionProps) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];

  return (
    <HorizontalNItems2ActionsSectionClient
      initialData={data}
      title={title}
      n={n}
    ></HorizontalNItems2ActionsSectionClient>
  )
}

export default HorizontalNItems2ActionsSection