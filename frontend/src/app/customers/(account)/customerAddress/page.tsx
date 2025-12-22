"use client"
import AddressItem from '@/components/features/profile/AddressItem';
import ModalSaveAddress from '@/components/features/modal/ModalSaveAddress';
import SectionHeader from '@/components/ui/SectionHeader';
import { fetchAddresses, getDefaultAddress } from '@/lib/api/address';
import { AddressT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@/components/features/provider/AuthProvider';
import { sortFilterFirst } from '@/lib/helper';

function page() {
  const [data, setData] = useState<AddressT[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const handleFetchAddresses = async () => {
    const resdata = await fetchAddresses();
    const defaultAddress = await getDefaultAddress();
    const sortedData = sortFilterFirst<AddressT>(resdata, "id", defaultAddress?.id)
    setData(sortedData);
  };
  useEffect(() => {
    handleFetchAddresses();
  }, []);
  return (
    <>
      {isAdding && <ModalSaveAddress onClose={() => setIsAdding(false)} id='addAddressModal' refresh={handleFetchAddresses} ></ModalSaveAddress>}
      <div className="dashboard-customer-address">
        <SectionHeader
          title="Địa Chỉ Giao Hàng"
        ></SectionHeader>
        <div className="mb-3 row g-3 grid-space-16">
          {data?.map((item) => (
            <AddressItem key={item.id} item={item} refresh={handleFetchAddresses} />
          ))}
        </div>
        <p className="m-0">Bạn muốn giao hàng đến địa chỉ khác? <a className="cursor-pointer" onClick={() => setIsAdding(true)}>Thêm địa chỉ giao hàng mới</a></p>
      </div>
    </>

  )
}

export default page