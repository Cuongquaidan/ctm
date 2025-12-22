import React from 'react'
import DropdownColMega from '@/components/features/header/DropdownColMega'

interface Dropdown4ColMegaProps {
  items?: any[],
  isMobileShow?: boolean
}

function Dropdown4ColMega({ items = [], isMobileShow }: Dropdown4ColMegaProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className={`dropdown-menu dropdown-menu-2 dropdown-menu-3 ${isMobileShow ? 'show' : ''}`}
      style={{ display: isMobileShow ? 'block' : 'none' }}
    >
      <div className="row">
        {items.map((colItems: any, index: number) => (
          <DropdownColMega
            header={colItems.header}
            items={colItems.items || colItems.children || []}
            subHeader={colItems.subHeader}
            subItems={colItems.subItems || []}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Dropdown4ColMega