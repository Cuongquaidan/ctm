import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface CircleLogoProps {
  url: string;
  name: string;
}

function CircleLogo({ url, name }: CircleLogoProps) {
  return (
    <div className="rounded-circle bg-white p-2">
      <ImageError width={1000} height={1000} className="w-100 ratio-1x1 rounded-circle object-fit-contain" src={url !== null ? IMAGES_BASE_URL + "/" + url : '/images/logo.png'} alt={name} />
    </div>
  )
}

export default CircleLogo