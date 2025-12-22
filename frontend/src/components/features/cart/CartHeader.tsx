import TrashIconButton from '@/components/ui/button/TrashIconButton';
import React from 'react'

interface CartHeaderProps {
  total: number;
  clearAll: () => void;
  isAllChecked: boolean;
  onCheckAll: () => void;
}

function CartHeader({
  total,
  clearAll,
  isAllChecked,
  onCheckAll
}: CartHeaderProps) {
  return (
    <div className="cartTable rounded bg-gray mb-4 px-3 py-2">
      <div className="cart-header">
        <div className="d-flex align-items-center">
          <div className="p-0" style={{ width: "24px" }}>
            <div className="form-check p-0 m-0">
              <input
                className="checkbox_animated check-box me-0 cartCheckAll"
                type="checkbox"
                checked={isAllChecked}
                onChange={() => onCheckAll()}
              />
            </div>
          </div>
          <div className="px-3 flex-1"><span className="fw-normal">Tất cả (<span className="text-lowercase">{total} Sản phẩm</span>)</span></div>
          <div className="px-3 text-center w-xl-250 w-md-150"><span className="fw-normal">Đơn giá</span></div>
          <div className="px-3 text-center  w-xl-250 w-md-150"><span className="fw-normal">Số lượng</span></div>
          <div className="px-3 text-center w-xl-250 w-md-150"><span className="fw-normal">Thành tiền</span></div>
          <div className="p-0" style={{
            width: "26px",
          }}>
            <TrashIconButton handleConfirm={clearAll} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartHeader