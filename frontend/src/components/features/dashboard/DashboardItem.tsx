"use client"
import { DashboardStatItemT } from '@/types/common.types'
import dynamic from 'next/dynamic'
import React from 'react'

interface DashboardItemProps {
  item: DashboardStatItemT;
}

const LordIcon = dynamic(() => import('@/components/ui/icons/LordIcon'), {
  ssr: false,
  loading: () => <div style={{ width: 60, height: 60, display: 'inline-block' }} />
})

function DashboardItem({ item }: DashboardItemProps) {
  return (
    <div className="col-xxl-3 col-md-6">
      <div className="totle-contain">
        {/* <lord-icon class="img-1 lazyload" src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:100px;height:100px"></lord-icon> */}
        <LordIcon size={60} icon={require(`@/${item.icon}`)} primary='#f58233' secondary='#ffc20e'></LordIcon>
        {/* <lord-icon src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:60px;height:60px"></lord-icon> */}
        <LordIcon size={100} icon={require(`@/${item.icon}`)} primary='#f58233' secondary='#ffc20e'></LordIcon>

        <div className="totle-detail">
          <h5>{item.label}</h5>
          <h3>{item.value}</h3>
        </div>
      </div>
    </div>
  )
}

export default DashboardItem