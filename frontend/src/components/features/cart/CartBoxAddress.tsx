"use client"
import ModalChooseAddress from '@/components/features/modal/ModalChooseAddress';
import { getDefaultAddress } from '@/lib/api/address';
import { AddressT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'


interface CartBoxAddressProps {
  initialDefaultAddress?: AddressT;
  url?: string;
}
function CartBoxAddress({ initialDefaultAddress, url }: CartBoxAddressProps) {
  const [isOpenChangeAddress, setIsOpenChangeAddress] = useState<boolean>(false);
  const [defaultAddress, setDefaultAddress] = useState<AddressT>(initialDefaultAddress || {} as AddressT);
  const handleFetchDefaultAddress = async () => {
    if (url) {
      // const resdata = await getDefaultAddressByUrl(url);
      // setDefaultAddress(resdata);
    } else {
      const resdata = await getDefaultAddress();
      setDefaultAddress(resdata);
    }
  }
  useEffect(() => {
    handleFetchDefaultAddress();
  }, [url]);
  return (
    <>

      <div className="mb-4">
        <div className="summery-box">
          <div className="summery-header">
            <h5 className="fw-bold">Giao tới</h5><a onClick={() => setIsOpenChangeAddress(true)}>Thay đổi</a>
          </div>
          <div className="summery-contain border-bottom-0 rounded-bottom py-2 deliveryBox">
            <ul>
              {defaultAddress && <>
                <li className="pb-0 d-flex justify-content-between"><b>{defaultAddress?.name}</b><b>{defaultAddress?.phone}</b></li>
                <li>{defaultAddress?.fulladdress}</li>
              </>}
            </ul>
            <div className="form-group d-none">
              <input name="address_id" type="text" required />
            </div>
          </div>
        </div>
      </div>
      {isOpenChangeAddress && <ModalChooseAddress onClose={() => setIsOpenChangeAddress(false)} refreshCurrentAddress={handleFetchDefaultAddress} />}
    </>
  )
}

export default CartBoxAddress