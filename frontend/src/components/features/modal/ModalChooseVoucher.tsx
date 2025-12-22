"use client";
import ModalVoucherItem from '@/components/features/voucher/ModalVoucherItem'
import React, { useEffect, useState } from 'react'
import Modal from '@/components/features/modal/Modal'
import { getVouchers, applyStoreVoucher, applyVoucher } from '@/lib/api/voucher';
import { VoucherCustomerT, VoucherStoreT, VoucherT } from '@/types/common.types';
import { toast } from 'react-toastify';

interface ModalChooseVoucherProps {
  onClose: () => void;
  vouchers: VoucherT[] | VoucherCustomerT[] | VoucherStoreT[];
  type: 'store' | 'customer' | 'voucher';
  handleFetchData?: () => void;
}

function ModalChooseVoucher({ onClose, vouchers, type, handleFetchData }: ModalChooseVoucherProps) {
  const handleChooseVoucher = async (voucher: VoucherStoreT | VoucherCustomerT | VoucherT) => {
    let datares;
    if (type === 'store') {

      datares = await applyStoreVoucher((voucher as VoucherStoreT).store_id, voucher.id);
    }
    if (type === 'voucher') {
      datares = await applyVoucher(voucher.id);
    }

    if (datares) {
      await handleFetchData?.();
      toast.success(datares.message || "Đã chọn voucher");
    }
  }
  return (
    <Modal onClose={() => { onClose() }} title="Mã giảm giá" classNameMainModal="modal-lg !p-3" id="modalChooseVoucher">
      {vouchers.map(voucher => (
        <ModalVoucherItem key={voucher.id} voucher={voucher} onClose={() => {
          handleChooseVoucher(voucher);
          onClose();
        }} />
      ))}
    </Modal>
  )
}

export default ModalChooseVoucher