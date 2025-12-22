"use client";
import React, { useState } from 'react'
import ModalLocationSearchBox from '@/components/features/modal/ModalLocationSearchBox';
import { ChevronDown, Map } from 'lucide-react';

function LocationSearchBox() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  }
  return (
    <>
      <div className="location-box">
        <button className="btn location-button" data-bs-toggle="modal"
          data-bs-target="#modalLocationSearchBox"
          onClick={() => setIsOpen(true)}
        >
          <span className="location-arrow">

            <Map></Map>

          </span>
          <span className="locat-name">Your Location</span>
          <i className="fa-solid fa-angle-down" style={{
            marginLeft: "20px"
          }}></i>
        </button>
      </div>
      {isOpen && <ModalLocationSearchBox onClose={onClose} />}
    </>

  )
}

export default LocationSearchBox