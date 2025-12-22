"use client"
import ModalSaveAddress from '@/components/features/modal/ModalSaveAddress';
import ModalConfirmDelete from '@/components/features/modal/ModalConfirmDelete';
import { AddressT } from '@/types/common.types'
import React, { useState } from 'react'

interface AddressItemProps {
  item: AddressT;
  onClose?: () => void;
  refresh: () => void;
  refreshCurrentAddress?: () => void;
}
import { useRouter } from 'next/navigation';
import { deleteAddress, setDefaultAddress } from '@/lib/api/address';
import { useAuthContext } from '../provider/AuthProvider';

function AddressItem({ item, onClose, refresh, refreshCurrentAddress }: AddressItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { user, handleGetProfile } = useAuthContext();

  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const handleDelete = async () => {
    try {
      const resdata = await deleteAddress(item.id);
      if (resdata) {
        refresh();
      }
    } catch (error) {
      console.error('Failed to delete address:', error);
    }
  };

  const handleSelectDefault = async () => {
    try {
      await setDefaultAddress(item.id + "");
      onClose && onClose();
      handleGetProfile();
      refreshCurrentAddress && refreshCurrentAddress();
    } catch (error) {
      console.error('Failed to set default address:', error);
    }
  };

  const isDefault = item.id === user?.address_id;

  return (
    <div className="col-xl-6 col-md-6">
      <div className={`card h-100 ${isDefault ? 'border-danger' : ''}`}>
        <div className="card-body d-flex flex-column gap-4">
          <div className="d-flex flex-column gap-4">
            <h4 className="fw-600 mb-2">{item.name}</h4>
            <div className="mb-2"><span>Địa chỉ:</span> <span className="fw-600">{item.fulladdress}</span></div>
            <div className="mb-2"><span>Số điện thoại:</span> <span className="fw-600">{item.phone}</span></div>
          </div>
          <div className="d-flex gap-2 mt-auto">
            <a className={`btn btn-animation btn-sm d-inline-block cursor-pointer btnAddressDefault ${isDefault ? 'disabled' : ''}`}
              onClick={() => handleSelectDefault()}
            >Giao đến địa chỉ này</a>
            <a className={`btn btn-sm btn-secondary d-inline-block border rounded cursor-pointer`} onClick={() => setIsEditing(true)}>Sửa</a>
            <a
              className={`btn btn-sm btn-secondary d-inline-block border rounded cursor-pointer btnAddressDel ${isDefault ? 'disabled' : ''}`}
              onClick={() => !isDefault && setIsDeleting(true)}
            >
              Xóa
            </a>
          </div>
          {isEditing && <ModalSaveAddress addressId={item.id} onClose={() => setIsEditing(false)} id='updateAddressModal' refresh={refresh} />}
          {isDeleting && (
            <ModalConfirmDelete
              id='confirmDeleteAddressModal'
              title="Xác nhận xóa địa chỉ"
              message={`Bạn có chắc chắn muốn xóa địa chỉ "${item.name}" không?`}
              onConfirm={handleDelete}
              onClose={() => setIsDeleting(false)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default AddressItem