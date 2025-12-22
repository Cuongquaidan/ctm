import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { StoreT } from '@/types/common.types';
import ImageError from '@/components/ui/ImageError'
import React from 'react'



interface ModalStoreItemProps {
  item: StoreT;
}

function ModalStoreItem({ item }: ModalStoreItemProps) {
  return (
    <div className="col-xxl-3 col-md-4 mb-4">
      <div className="blog-box h-100">
        <div className="blog-box-image">
          <a href={`/store/${item.alias}`} className="ratio-16x9">
            <ImageError
              src={item.image ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'}
              alt={item.name}
              className="lazyload bg-img w-100 ratio-16x9 object-contain"
              width={500}
              height={300}
            />
          </a>
        </div>

        <div className="blog-detail">
          {item.name && <label>{item.des || item.name}</label>}
          <a href={`/store/${item.alias}`}>
            <h3>{item.name}</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ModalStoreItem
