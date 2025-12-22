import { Eye, RefreshCw } from 'lucide-react'
import React from 'react'

function Box2Option() {
  return (
    <ul className="option">
      <li className='tooltip-customer' data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
        <p className='custom-tooltip'>Quick View</p>
        <a>
          <Eye className='iconly-Show icli' strokeWidth={1} />
        </a>
      </li>
      <li className='tooltip-customer' data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
        <p className='custom-tooltip'>Compare</p>
        <a >
          <RefreshCw className='iconly-Swap icli' strokeWidth={1} />
        </a>
      </li>
    </ul>
  )
}

export default Box2Option