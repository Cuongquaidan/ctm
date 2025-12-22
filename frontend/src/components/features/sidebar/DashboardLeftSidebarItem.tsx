"use client"

import { DashboardLeftSidebarItemT } from '@/types/common.types'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface DashboardLeftSidebarItemProps {
  item: DashboardLeftSidebarItemT;
}

function DashboardLeftSidebarItem({ item }: DashboardLeftSidebarItemProps) {
  const pathname = usePathname();

  const isActive =
    item.link === "/customers/"
      ? pathname === "/customers"
      : pathname.startsWith(item.link);

  return (
    <li className="nav-item">
      <Link
        href={item.link as any}
        className={`nav-link ${isActive ? 'active' : ''}`}
      >
        <i className={item.icon}></i>
        {item.title}
      </Link>
    </li>
  )
}

export default DashboardLeftSidebarItem