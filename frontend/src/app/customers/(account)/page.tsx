"use client"
import dynamic from 'next/dynamic'
import { getDashboardStats } from '@/lib/api/dashboard'
import React, { useEffect, useState } from 'react'
import { DashboardStatItemT } from '@/types/common.types'
import SectionHeader from '@/components/ui/SectionHeader'

const LordIcon = dynamic(() => import('@/components/ui/icons/LordIcon'), {
  ssr: false,
  loading: () => <div style={{ width: 60, height: 60, display: 'inline-block' }} />
})

function page() {
  const [data, setData] = useState<DashboardStatItemT[]>([])
  const handleFetchDataStats = async () => {
    const res = await getDashboardStats();
    setData(res);
  }
  useEffect(() => {
    handleFetchDataStats();
  }, [])
  return (
    <>

      <div className="dashboard-home">
        <SectionHeader title='Tổng quan'></SectionHeader>
        <div className="total-box mt-0">
          <div className="row g-sm-4 g-3">

            <div className="col-xxl-3 col-md-6">
              <div className="totle-contain z-0">
                {/* <lord-icon class="img-1 lazyload" src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:100px;height:100px"></lord-icon> */}
                <div><LordIcon size={60} icon={require(`@/assets/lordicon/wbtzvepm.json`)} primary='#f58233' secondary='#ffc20e'></LordIcon></div>
                {/* <lord-icon src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:60px;height:60px"></lord-icon> */}
                <div className='absolute top-1/2 z-0 -right-6 transform -translate-y-1/2'>
                  <LordIcon size={100} icon={require(`@/assets/lordicon/wbtzvepm.json`)} primary='#ccc' secondary='#ddd'></LordIcon>
                </div>
                <div className="totle-detail relative z-1">
                  <h5>{data[0]?.label}</h5>
                  <h3>{data[0]?.value}</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="totle-contain">
                {/* <lord-icon class="img-1 lazyload" src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:100px;height:100px"></lord-icon> */}
                <div><LordIcon size={60} icon={require(`@/assets/lordicon/wvqpnihn.json`)} primary='#f58233' secondary='#ffc20e'></LordIcon></div>
                {/* <lord-icon src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:60px;height:60px"></lord-icon> */}
                <div className='absolute top-1/2 -right-6 transform -translate-y-1/2'>
                  <LordIcon size={100} icon={require(`@/assets/lordicon/wvqpnihn.json`)} primary='#ccc' secondary='#ddd'></LordIcon>
                </div>

                <div className="totle-detail">
                  <h5>{data[1]?.label}</h5>
                  <h3>{data[1]?.value}</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="totle-contain z-0">
                {/* <lord-icon class="img-1 lazyload" src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:100px;height:100px"></lord-icon> */}
                <div><LordIcon size={60} icon={require(`@/assets/lordicon/wbtzvepm.json`)} primary='#f58233' secondary='#ffc20e'></LordIcon></div>
                {/* <lord-icon src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:60px;height:60px"></lord-icon> */}
                <div className='absolute top-1/2 z-0 -right-6 transform -translate-y-1/2'>
                  <LordIcon size={100} icon={require(`@/assets/lordicon/wbtzvepm.json`)} primary='#ccc' secondary='#ddd'></LordIcon>
                </div>
                <div className="totle-detail relative z-1">
                  <h5>{data[2]?.label}</h5>
                  <h3>{data[2]?.value}</h3>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="totle-contain z-0">
                {/* <lord-icon class="img-1 lazyload" src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:100px;height:100px"></lord-icon> */}
                <div><LordIcon size={60} icon={require(`@/assets/lordicon/wbtzvepm.json`)} primary='#f58233' secondary='#ffc20e'></LordIcon></div>
                {/* <lord-icon src="/assets/eme2023/lordicon/wbtzvepm.json" stroke="100" trigger="loop-on-hover" colors="primary:#f58233,secondary:#ffc20e" style="width:60px;height:60px"></lord-icon> */}
                <div className='absolute top-1/2 z-0 -right-6 transform -translate-y-1/2'>
                  <LordIcon size={100} icon={require(`@/assets/lordicon/wbtzvepm.json`)} primary='#ccc' secondary='#ddd'></LordIcon>
                </div>
                <div className="totle-detail relative z-1">
                  <h5>{data[3]?.label}</h5>
                  <h3>{data[3]?.value}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default page