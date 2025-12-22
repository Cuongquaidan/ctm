import React from 'react'
import DropdownMegaItem from '@/components/features/header/DropdownMegaItem'

interface DropdownColMegaProps {
  header: string;
  items?: any[];
  subHeader?: string;
  subItems?: any[];
}

function DropdownColMega({ header, items = [], subHeader, subItems = [] }: DropdownColMegaProps) {
  return (
    <div className="col-xl-3">
      <div className="dropdown-column m-0">
        <h5 className="dropdown-header">
          {header}
        </h5>
        {items && items.length > 0 && items.map((item: any, index: number) => (
          <DropdownMegaItem
            link={item.link}
            href={item.href}
            title={item.title}
            items={item.children || []}
            isHot={item.isHot || false}
            isNew={item.isNew || false}
            key={index}
          />
        ))}
        {subHeader && <h5 className='custom-mt dropdown-header'>{subHeader}</h5>}
        {subItems && subItems.length > 0 && subItems.map((item: any, index: number) => (
          <DropdownMegaItem
            link={item.link}
            href={item.href}
            title={item.title}
            items={item.children || []}
            isHot={item.isHot || false}
            isNew={item.isNew || false}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default DropdownColMega