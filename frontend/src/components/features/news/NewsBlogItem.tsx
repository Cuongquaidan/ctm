import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { formatVietnameseDateTime } from '@/lib/helper';
import { PostItemT } from '@/types/common.types'
import ImageError from '@/components/ui/ImageError'
import React from 'react'
interface BlogItemProps {
  item: PostItemT;
}

function BlogItem({ item }: BlogItemProps) {
  return (

    <div className="blog-box wow fadeInUp shrink-0" data-wow-daley="0s">
      <div className="blog-box-image">
        <a href={`/news/${item.alias}`} className="blog-image">
          <ImageError src={item.image ? IMAGES_BASE_URL + "/" + item.image : "/images/logo.png"} className="bg-img lazyload w-100" alt={item.meta_title || "honeynet"} width={500} height={500} />
        </a>
      </div>
      <a href={`/news/${item.alias}`} className="blog-detail">
        <div className="date">{formatVietnameseDateTime(new Date(item.publish_at))}</div>
        <div className="name">{item.name}</div>
      </a>
    </div>
  )
}

export default BlogItem