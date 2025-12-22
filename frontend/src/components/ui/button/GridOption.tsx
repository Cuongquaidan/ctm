import ImageError from '@/components/ui/ImageError'
import React from 'react'

interface GridOptionProps {
  showGrid: number;
  setShowGrid: (value: number) => void;
}

function GridOption({ showGrid, setShowGrid }: GridOptionProps) {
  return (
    <div className='grid-option d-none d-md-block '>
      <ul>
        <li className={
          `three-grid d-flex items-center justify-center  ${showGrid === 3 ? 'active' : ''}`
        }>
          <button type='button' onClick={() => setShowGrid(3)}>
            <a href="#">
              <ImageError
                width={16}
                height={24}
                src='/assets/eme2023/svg/grid-3.svg'
                className=''
                alt='grid-3'
              />
            </a>
          </button>
        </li>
        <li className={`grid-btn four-grid d-xxl-flex items-center justify-center d-none ${showGrid === 4 ? 'active' : ''}`}>
          <button type='button' onClick={() => setShowGrid(4)}>
            <a href="#">
              <ImageError
                width={22}
                height={24}
                src='/assets/eme2023/svg/grid-4.svg'
                className='d-lg-inline-block d-none'
                alt='grid-4'
              />
            </a>
          </button>
        </li>
        <li className={`grid-btn five-grid d-xxl-flex items-center justify-center d-none ${showGrid === 5 ? 'active' : ''}`}>
          <button type='button' onClick={() => setShowGrid(5)}>
            <a href="#">
              <ImageError
                width={28}
                height={24}
                src='/assets/eme2023/svg/grid-5.svg'
                className='d-lg-inline-block d-none'
                alt='grid-5'
              />

            </a>
          </button>
        </li>
        {/* <li className={`list-btn d-xxl-flex items-center justify-center d-none ${showGrid === 0 ? 'active' : ''}`}>
          <button type='button' onClick={() => setShowGrid(0)}>
            <a href="#">
              <ImageError
                width={20}
                height={20}
                src='/assets/eme2023/svg/list.svg'
                className=' lazyload d-lg-inline-block d-none'
                alt='grid-4'
              />
            </a>
          </button>
        </li> */}

      </ul>
    </div>
  )
}

export default GridOption