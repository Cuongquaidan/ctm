"use client";
import { getVoucherInCart, getVouchers, removeVoucherById } from '@/lib/api/voucher';
import { VoucherT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'
import ButtonGetAllModalVoucher from '@/components/features/voucher/ButtonGetAllModalVoucher';
import { VouchersResponse } from '@/types/api.type';
import { toast } from 'react-toastify';
import ImageError from '@/components/ui/ImageError';

interface CartBoxVoucherProps {
  selectedVoucher?: VoucherT;
  refresh?: () => void;
}
function CartBoxVoucher({ selectedVoucher, refresh }: CartBoxVoucherProps) {
  const [data, setData] = useState<VouchersResponse>();


  const handleFetchData = async () => {
    const resdata = await getVouchers();
    setData(resdata);

  }

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleRemoveVoucherSelected = async (
  ) => {
    const dataRemove = await removeVoucherById();

    if (typeof dataRemove === 'object') {
      // await handleFetchData();
      await refresh?.();
      if (dataRemove.message) {
        toast.success(dataRemove.message);
      }

    }
  }

  return (
    <>

      <div className="mb-4 position-relative">
        <div className="blockVoucherBox spinner-xs">
          <div className="summery-box">
            <div className="summery-header">
              {!selectedVoucher ? (
                <h5 className="fw-bold">Mã giảm giá</h5>
              ) : (
                <div className='summery-contain p-2 position-relative spinner-sm w-100'>
                  <div className='border rounded d-flex align-items-center p-1 px-2 w-100'>
                    <ImageError src={selectedVoucher?.image} className='me-2 object-fit-contain w-45 h-45 voucher-image bg-white rounded' alt={selectedVoucher?.name || 'voucher'} width={200} height={200} />
                    <h6 className='mb-6 truncate  line-clamp-1'>
                      {selectedVoucher?.name}
                    </h6>
                    <button
                      onClick={() => handleRemoveVoucherSelected()}

                      className="btn btn-sm btn-animation ms-auto cursor-pointer p-2 min-w-[100px] btnNoUseVoucher">
                      Bỏ chọn
                    </button>
                  </div>
                </div>
              )}


            </div>
            <div className="summery-contain p-2 position-relative spinner-sm d-none">
              <div className="border rounded d-flex align-items-center p-1 px-2 w-100">
                {/* <ImageError className="me-2 object-fit-contain w-45 h-45 voucher-image bg-white rounded" src=""> */}
                <h6 className="mb">{selectedVoucher?.name}</h6>
                <a
                  onClick={() => handleRemoveVoucherSelected()}
                  className="btn btn-sm btn-animation ms-auto cursor-pointer py-1 btnNoUseVoucher" data-id="">Bỏ chọn</a>
              </div>
            </div>
            <ul className="summery-total py-0">
              <li className="list-total border-top-0 pt-2 pb-3">
                <ButtonGetAllModalVoucher vouchers={data?.list || []} type='voucher' handleFetchData={refresh} ></ButtonGetAllModalVoucher>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartBoxVoucher