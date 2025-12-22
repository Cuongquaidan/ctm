"use client"
import { vouchersData } from '@/assets/data/Vouchers'
import VoucherItem from '@/components/features/voucher/VoucherItem';
import SectionHeader from '@/components/ui/SectionHeader';
import { getMyVouchers, getVouchers } from '@/lib/api/voucher';
import { VoucherT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'

function page() {
  const [data, setData] = useState<VoucherT[]>(vouchersData);
  const handleFetchVouchers = async () => {
    const res = await getMyVouchers();

    setData(res.list);
  };
  useEffect(() => {
    handleFetchVouchers();
  }, []);
  return (
    <>

      <div className="dashboard-home">
        <SectionHeader title='Mã giảm giá'></SectionHeader>
        <div className="blog-section pt-0">
          <div className="row g-4 ratio_65">
            {data?.map((voucher) => (
              <VoucherItem key={voucher.id} item={voucher} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page