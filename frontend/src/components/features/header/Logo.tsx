"use client"
import React from 'react'
import { useConfig } from '@/components/features/provider/ConfigProvider';
import ImageError from '@/components/ui/ImageError';
import { fixedSiteConfig } from '@/lib/api/config';

function Logo() {

  const { config } = useConfig();
  return (
    <a href="/" className="web-logo nav-logo d-md-block d-none me-xl-4 me-3">
      {
        (config.logo || fixedSiteConfig.logo) && (<ImageError width={300} height={300} src={config.logo || fixedSiteConfig.logo as string} className="img-fluid h-100 lazyload object-contain" alt={config?.description_1 || "Honey net"} />)
      }
    </a>
  )
}

export default Logo