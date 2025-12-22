import DangerBadge from '@/components/ui/badge/DangerBadge';
import WarningBadge from '@/components/ui/badge/WarningBadge';
import React from 'react'

interface DropdownMegaItemProps {
  items?: {
    title: string;
    link?: string;
    href?: string;
  }[];
  title: string;
  link?: string;
  href?: string;
  isHot?: boolean;
  isNew?: boolean;
}

function DropdownMegaItem({ items = [], title, link, href, isHot, isNew }: DropdownMegaItemProps) {
  const itemLink = link || href || '#';

  return (
    <>
      <a className="dropdown-item" href={itemLink}>
        {title}
        {isNew && <DangerBadge text='New'></DangerBadge>}
        {isHot && <WarningBadge text='Hot'></WarningBadge>}
      </a>
      {items && items.length > 0 && (
        <ul className="sub-menu">
          {items.map((child, index) => (
            <li key={index}>
              <a href={child.link || child.href || '#'}>{child.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default DropdownMegaItem