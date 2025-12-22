import React from 'react'
import DropdownItem from '@/components/features/header/DropdownItem';

interface DropdownColProps {
  items?: any[];
  isMobileShow?: boolean;
}

function DropdownCol({ items = [], isMobileShow }: DropdownColProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <ul className={`dropdown-menu ${isMobileShow ? 'show' : ''}`}
      style={{ display: isMobileShow ? 'block' : 'none' }}
    >
      {items.map((item, index) => (
        <DropdownItem key={index} title={item.title} link={item.link} items={item.children} />
      ))}
    </ul>
  )
}

export default DropdownCol