"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ModalStore from '@/components/features/modal/ModalStore';

const LordIcon = dynamic(() => import('@/components/ui/icons/LordIcon'), {
  ssr: false,
  loading: () => <div style={{ width: 30, height: 30, display: 'inline-block' }} />
})

function HeaderStore() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="location-box">
        <button className="btn location-button" data-bs-toggle="modal" onClick={() => setIsOpen(true)} aria-label="Cửa hàng">
          <span className="location-arrow">
            <i className="fas fa-store ms-0 d-block"></i>
          </span>
          <span className="locat-name">Cửa hàng</span>
          <i className="fa-solid fa-angle-down" style={{
            marginLeft: "20px"
          }}></i>
        </button>
        {isOpen && <ModalStore onClose={() => setIsOpen(false)} uri='/stores/getList'></ModalStore>}
      </div>

    </>
  )
}

export default HeaderStore