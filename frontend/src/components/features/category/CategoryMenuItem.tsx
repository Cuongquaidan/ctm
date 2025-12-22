import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { CategoryT } from '@/types/common.types';
import ImageError from '@/components/ui/ImageError';
import React from 'react'

interface CategoryMenuItemProps {
  item: CategoryT;
  index: number;
}

function CategoryMenuItem({ item, index }: CategoryMenuItemProps) {



  return (
    <li className="wow fadeInUp ">
      <div className="category-list">
        <ImageError
          width={50}
          height={50}
          src={item.image ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'}
          data-src={item.image ? IMAGES_BASE_URL + "/" + item.image : '/images/logo.png'}
          className="lazyload"
          alt={item.description || "honeynet"}
          style={{
            height: "40px",
            width: "40px",
          }}
        />
        <h3 className="line-height-15 "
        >
          <a href={item.alias}>{item.name}</a>
        </h3>
      </div>
    </li>)
}

export default CategoryMenuItem