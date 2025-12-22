"use client"
import ModalChooseVoucher from '@/components/features/modal/ModalChooseVoucher';
import { VoucherCustomerT, VoucherStoreT, VoucherT } from '@/types/common.types';
import React, { useState } from 'react'

interface ButtonGetAllModalVoucherProps {
  vouchers: VoucherStoreT[] | VoucherCustomerT[] | VoucherT[],
  type: 'store' | 'customer' | 'voucher',
  handleFetchData?: () => void
}
function ButtonGetAllModalVoucher({ vouchers, type, handleFetchData }: ButtonGetAllModalVoucherProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>  {isOpen && <ModalChooseVoucher vouchers={vouchers} type={type} onClose={() => {

      setIsOpen(false);

    }}

      handleFetchData={handleFetchData}
    />}
      <a href="#" data-bs-toggle="modal" data-bs-target="#voucherModal" onClick={() => {
        setIsOpen(true)
      }}>Xem tất cả Khuyến mãi</a>
    </>
  )
}

export default ButtonGetAllModalVoucher