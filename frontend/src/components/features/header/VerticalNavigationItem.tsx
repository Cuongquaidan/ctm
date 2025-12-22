"use client";
import React, { useRef, useState } from 'react'
import Dropdown4ColMega from '@/components/features/header/Dropdown4ColMega';
import DropdownCol from '@/components/features/header/DropdownCol';

interface VerticalNavigationItemProps {
  title: string;
  isMega?: boolean;
  items?: VerticalNavigationItemProps[];
}
function VerticalNavigationItem({ title, items, isMega }: VerticalNavigationItemProps) {
  const [isShow, setIsShow] = useState<boolean>(false)

  const handleClick = () => {
    setIsShow(!isShow)

  }
  return (
    <li className={`nav-item dropdown  ${isMega ? 'dropdown-mega' : ''}`}>
      <span className="nav-link dropdown-toggle d-flex gap-2 align-items-center"
        onClick={handleClick}
      >{title}
        <i className="fa fa-chevron-down text-sm"  ></i></span>
      {isMega && items && (
        <Dropdown4ColMega items={items} isMobileShow={isShow}></Dropdown4ColMega>
      )}
      {!isMega && items && (
        <DropdownCol items={items} isMobileShow={isShow}></DropdownCol>
      )}
    </li>
  )
}

export default VerticalNavigationItem