import ModalConfirmDelete from '@/components/features/modal/ModalConfirmDelete';
import React, { useState } from 'react'

function TrashIconButton({ handleConfirm }: { handleConfirm: () => void }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {isOpen && (
        <ModalConfirmDelete
          id='confirmDeleteInCart'
          title="Xác nhận xóa"
          message={`Bạn có chắc chắn muốn xóa?`}
          onConfirm={handleConfirm}
          onClose={() => setIsOpen(false)}
        />
      )}
      <a className="cursor-pointer cartRemoveAll" onClick={() => setIsOpen(true)}><i className="fa-solid fa-trash text-secondary"></i></a>
    </>

  )
}

export default TrashIconButton