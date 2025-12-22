import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { formatVietnameseDateTime } from '@/lib/helper'
import { PostItemT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface NewsItemProps {
  item: PostItemT;
  index?: number;
}


function NewsItem({ item, index = 0 }: NewsItemProps) {
  return (
    <div className="blog-box wow fadeInUp shrink-0" data-wow-daley={`${0.1 + index * 0.05}s`}>
      <div className="blog-image">
        <a href={`/news/${item.alias}`} className="blog-image">
          <ImageError src={item.image !== null ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'} data-src={item.image !== null ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'} className="bg-img lazyload" alt={item.name} width={500} height={500} />
        </a>
      </div>
      <div className="blog-contain">
        <div className="blog-label">
          <span className="time"><i className="fa-regular fa-clock"></i><span className="ms-1">{formatVietnameseDateTime(new Date(item.publish_at))}</span></span>
        </div>
        <a href={`/news/${item.alias}`} className="blog-name">
          <h3>{item.name}</h3>
        </a>
      </div>
    </div>
  )
}

export default NewsItem