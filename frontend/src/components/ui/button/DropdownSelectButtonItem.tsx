import ImageError from '@/components/ui/ImageError'
import React from 'react'

export interface DropdownSelectButtonItemProps {
  image?: string
  label: string
  value: string
  onClick?: (value: string) => void
}

function DropdownSelectButtonItem({
  image,
  label,
  value,
  onClick
}: DropdownSelectButtonItemProps) {


  return (
    <li style={{
      display: "block"
    }}>
      <a
        className="dropdown-item d-flex align-items-center gap-2"
        onClick={() => {
          if (onClick) {
            onClick(value)
          }
        }}
      >
        {image && (
          <ImageError
            src={image}
            className="img-fluid lazyload"
            alt={label}
            width={24}
            height={24}
          />
        )}
        <span>{label}</span>
      </a>
    </li>
  )
}

export default DropdownSelectButtonItem