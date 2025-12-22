"use client"
import React, { useEffect, useState } from 'react'
import Modal from '@/components/features/modal/Modal'
import AddressItem from '@/components/features/profile/AddressItem'
import ModalSaveAddress from '@/components/features/modal/ModalSaveAddress'
import { AddressT } from '@/types/common.types';
import { fetchAddresses, fetchAddressesByUrl } from '@/lib/api/address'
import { sortFilterFirst } from '@/lib/helper'
import { useAuthContext } from '@/components/features/provider/AuthProvider'

interface ModalChooseAddressProps {
  initialData?: AddressT[]
  url?: string
  onClose: () => void;
  refreshCurrentAddress?: () => void;
}

function ModalChooseAddress({ initialData, url, onClose, refreshCurrentAddress }: ModalChooseAddressProps) {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [addresses, setAddresses] = useState<AddressT[]>(initialData || []);
  const { user } = useAuthContext();

  const handleFetchAddresses = async () => {

    try {
      if (url) {
        const resdata = await fetchAddressesByUrl(url);
        const sortedData = sortFilterFirst<AddressT>(resdata, "id", user?.address_id)
        setAddresses(sortedData);

      } else {
        const resdata = await fetchAddresses();
        const sortedData = sortFilterFirst<AddressT>(resdata, "id", user?.address_id)
        setAddresses(sortedData);

      }

    } catch (error) {
      // Handle error silently or show error message to user
    }
  }

  useEffect(() => {
    handleFetchAddresses();
  }, [url]);

  return (
    <Modal onClose={onClose} title="Chọn Địa Chỉ Giao Hàng" classNameMainModal="modal-xl !p-3" id="modalChooseAddress">
      <>
        {isAdding && <ModalSaveAddress refresh={handleFetchAddresses} onClose={() => setIsAdding(false)} id='addAddressModal'  ></ModalSaveAddress>}
        <div className="dashboard-customer-address">
          <div className="row g-3 grid-space-16 mb-3 p-3">
            {addresses?.map((item) => (
              <AddressItem refresh={handleFetchAddresses} key={item.id} item={item} refreshCurrentAddress={refreshCurrentAddress} />
            ))}
            {!addresses || addresses.length === 0 && <p className="text-center w-100">Chưa có địa chỉ nào. Vui lòng thêm địa chỉ mới.</p>}
          </div>
          <p className="m-0">Bạn muốn giao hàng đến địa chỉ khác? <a className="cursor-pointer" onClick={() => setIsAdding(true)}>Thêm địa chỉ giao hàng mới</a></p>
        </div>
      </>
    </Modal>
  )
}

export default ModalChooseAddress