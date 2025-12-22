import { Headset } from 'lucide-react'
import React from 'react'

function RightSideSupport({ color, sizePhone, sizeText }: { color?: string, sizePhone?: string, sizeText?: string }) {
  return (
    <li className="right-side shrink-0">
      <div className="rightside-menu support-sidemenu">
        <div className="support-box d-flex align-items-start gap-4">
          <div className="support-image">
            <Headset color={color} size={36} />
          </div>
          <div className="support-number"
            style={{
              color: color
            }}
          >
            <h2 className='text-lg' style={{ fontSize: sizePhone }}>(123) 456 7890</h2>
            <h4 className='text-lg' style={{ fontSize: sizeText }}>24/7 Support Center</h4>
          </div>
        </div>
      </div>
    </li>
  )
}

export default RightSideSupport