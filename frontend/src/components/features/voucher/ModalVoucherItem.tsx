import ImageError from '@/components/ui/ImageError';
import { apiFetchCustomers } from '@/lib/api/api';
import { applyVoucherToCart } from '@/lib/api/voucher';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';
import { formatCurrency, formatDate } from '@/lib/helper'
import { VoucherCustomerT, VoucherStoreT, VoucherT } from '@/types/common.types'
import React from 'react'

interface ModalVoucherItemProps {
  voucher: VoucherCustomerT | VoucherStoreT | VoucherT;
  onClose: () => void;
  urlApply?: string;
}

function ModalVoucherItem({ voucher, onClose, urlApply }: ModalVoucherItemProps) {
  const handleSelectVoucher = async () => {
    // Không cho click khi verified === false
    if (!voucher.verified || !urlApply) return;

    const data = await apiFetchCustomers(urlApply, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voucherId: voucher.id,
        storeId: 'store_id' in voucher ? (voucher as any).store_id : undefined
      }),
    });
  }

  return (
    <div
      className={`border rounded p-0 mb-3 voucherItem ${!voucher.verified ? 'disabled opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={() => {
        if (!voucher.verified) return; // Không cho click khi verified === false
        handleSelectVoucher();
        onClose();
      }}
      style={{
        pointerEvents: !voucher.verified ? 'none' : 'auto',
        filter: !voucher.verified ? 'grayscale(50%)' : 'none'
      }}
    >
      <div className='d-flex align-items-center p-2'>
        <div className='w-55 h-55 d-flex me-2 bg-white rounded'>
          {/* <ImageError width={200} height={200} src={voucher.image ? IMAGES_BASE_URL + "/" + voucher.image : "/images/default.jpg"} alt={voucher.name} className='object-fit-contain w-55 h-55 rounded'></ImageError> */}
          <ImageError width={200} height={200} src={voucher.image} alt={voucher.name} className='object-fit-contain w-55 h-55 rounded'></ImageError>
        </div>
        <div className='d-flex flex-column justify-content-center'>
          <h6 className='mb-2'>{voucher.description}</h6>
          <h6>HSD: {formatDate(new Date(voucher.end_date))}</h6>
        </div>
      </div>
    </div>
  )
}

export default ModalVoucherItem