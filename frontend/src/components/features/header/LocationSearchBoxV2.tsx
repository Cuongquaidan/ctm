"use client";
import React, { useState } from 'react'
import ModalLocationSearchBox from '@/components/features/modal/ModalLocationSearchBox';

function LocationSearchBoxV2() {
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
          <span className="location-arrow ">
            <i style={{
              marginLeft: 0
            }} className="fa fa-map-pin" ></i>
          </span>
          <span className='text-white'>Your Location</span>
          <i className="fa-solid fa-angle-down text-white" style={{
            marginLeft: "20px"
          }}></i>
        </button>
      </div>
      {isOpen && <ModalLocationSearchBox onClose={onClose} />}
    </>

  )
}

export default LocationSearchBoxV2