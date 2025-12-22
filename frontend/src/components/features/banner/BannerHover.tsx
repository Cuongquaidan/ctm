import ImageError from '@/components/ui/ImageError'
import React from 'react'
export interface BannerHoverProps {
  src: string;
  title: string;
  description: string;
}
function BannerHover({ src, title, description }: BannerHoverProps) {
  return (
    <div className="banner-contain-2 hover-effect">
      <ImageError src={src} width={1600} height={900} className="bg-img object-cover rounded-3  lazyload " style={{
        height: "300px"
      }} alt={title}
      />
      <div className="banner-detail p-center-right  shop-banner ms-auto banner-small bottom-0 right-0" style={{
        position: "absolute"
      }}>
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  )
}

export default BannerHover