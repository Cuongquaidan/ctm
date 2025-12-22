import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { formatVietnameseDateTime } from '@/lib/helper';
import { PostItemT } from '@/types/common.types';
import ImageError from '@/components/ui/ImageError';
import React from 'react'
interface NewItemHorizontalProps {
  item: PostItemT;
}

function NewItemHorizontal({ item }: NewItemHorizontalProps) {
  return (
    <div className="recent-box">
      <a href={item.image} className="recent-image">
        <ImageError width={200} height={200} src={item.image !== null ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'} data-src={item.image !== null ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'} className="img-fluid lazyload ratio-1x1 object-fit-cover w-100" alt={item.meta_title} />
      </a>
      <div className="recent-detail">
        <a href={`/news/${item.alias}`}>
          <div className="recent-name fw-500 text-2-line">{item.name}</div>
        </a>
        <div className="text-1-line"><small>{formatVietnameseDateTime(item.publish_at)}</small></div>
      </div>
    </div>
  )
}

export default NewItemHorizontal