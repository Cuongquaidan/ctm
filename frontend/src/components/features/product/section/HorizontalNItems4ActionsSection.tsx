import { ProductT } from '@/types/common.types';
import React from 'react'
import HorizontalNItems4ActionsSectionClient from '@/components/features/product/section/HorizontalNItems4ActionsSection.client';
import { apiFetchSites } from '@/lib/api/api';
interface HorizontalNItems4ActionsSectionProps {
  n: number;
  initialData?: ProductT[];
  url?: string;
  title?: string;
}

async function HorizontalNItems4ActionsSection({ initialData, url, title, n }: HorizontalNItems4ActionsSectionProps) {
  const response = url ? await apiFetchSites(url as string) : undefined;
  const data = initialData || response?.data as ProductT[];

  return (
    <HorizontalNItems4ActionsSectionClient
      initialData={data}
      title={title}
      n={n}
    ></HorizontalNItems4ActionsSectionClient>
  )
}

export default HorizontalNItems4ActionsSection