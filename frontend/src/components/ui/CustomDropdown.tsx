"use client"
import React, { ReactNode, useRef, useState } from 'react'

function CustomDropdown({
  title,
  children,
  id,
}: {
  title: string
  children: ReactNode
  id?: string
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(true)

  const handleClick = () => {
    if (bodyRef.current) {
      const scrollHeight = bodyRef.current.scrollHeight

      if (isShow) {
        bodyRef.current.style.maxHeight = '0px'
      } else {
        bodyRef.current.style.maxHeight = `${scrollHeight}px`
      }
    }
    setIsShow(!isShow)
  }

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' >
        <button
          onClick={handleClick}
          className='accordion-button'
          type='button'
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <span>{title}</span>
          {isShow ? (<i className="fa fa-chevron-up" style={{
            fontSize: "13px"
          }}></i>) : (
            <i className="fa fa-chevron-down" style={{
              fontSize: "13px"
            }}></i>
          )}


        </button>
      </h2>
      <div className='overflow-hidden p-0 transition-all' ref={bodyRef}>
        <div

          className='accordion-collapse  show'
        >
          <div className='accordion-body '  >
            {children}
          </div>
        </div>
      </div>

    </div>
  )
}

export default CustomDropdown