"use client";
import React, { useEffect, useState } from 'react'
import ButtonGetAllModalVoucher from '@/components/features/voucher/ButtonGetAllModalVoucher'
import { getVoucherStoresById, removeVoucherStoreById } from '@/lib/api/voucher';
import { VoucherStoreT } from '@/types/common.types';
import { toast } from 'react-toastify';
import { VoucherStoresResponse } from '@/types/api.type';
import ImageError from '@/components/ui/ImageError';

interface CartTableFooterProps {
  storeId: number;
  voucherSelected?: VoucherStoreT;
  refresh?: () => void;
}



function CartTableFooter({ storeId, voucherSelected, refresh }: CartTableFooterProps) {
  const [data, setData] = useState<VoucherStoresResponse | null>(null);

  const handleFetchData = async () => {
    const resdata = await getVoucherStoresById(storeId);
    setData(resdata);


  }

  useEffect(() => {
    handleFetchData();
  }, [storeId]);

  const handleRemoveVoucher = async (
    storeId: number,
    voucherId: number
  ) => {
    const dataRemove = await removeVoucherStoreById(storeId, voucherId);
    if (dataRemove) {
      await handleFetchData();
      if (typeof dataRemove === 'object') {
        await refresh?.();

        toast.success(dataRemove.message || "Đã bỏ chọn voucher");
      }

    }
  }

  return (
    <div className="w-100 py-3 d-flex align-items-center">
      <span className="mb-0 pe-3 fw-bold">Shop Khuyến Mãi</span>

      {voucherSelected && (
        <div className="d-flex align-items-center me-3">
          <ImageError
            className="me-2 object-fit-contain w-45 h-45 voucher-image bg-white rounded"
            width={45}
            height={45}
            src={voucherSelected.image}
            alt={voucherSelected.name || "honeynet"}
          />
          <h6 className="mb-0 me-2  "
            style={{
              maxWidth: "300px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >{voucherSelected.name}</h6>
          <button
            className="btn  p-2 min-w-[100px] btn-sm btn-animation ms-auto cursor-pointer  btnNoUseStoreVoucher"
            onClick={() => {
              handleRemoveVoucher(storeId, voucherSelected.id);
            }}
          >
            Bỏ chọn
          </button>
          <span className="ps-3">|</span>
        </div>
      )}

      <ButtonGetAllModalVoucher vouchers={data?.list || []} type="store" handleFetchData={refresh}></ButtonGetAllModalVoucher>
    </div>
  )
}

export default CartTableFooter