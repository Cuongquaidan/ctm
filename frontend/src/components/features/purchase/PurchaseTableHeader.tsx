import React from 'react'
interface PurchaseTableHeaderProps {
  storeName: string;
  storeSlug: string;
  count: number;
  storeId: string;
}

function PurchaseTableHeader({
  storeName,
  storeSlug,
  count,
  storeId,
}: PurchaseTableHeaderProps) {
  return (
    <div className='px-3 pt-3 pb-0 top-selling-box px-xxl-4 pt-xxl-4'>
      <div className='w-auto m-0 top-selling-title'>
        <a className='text-black h5' href={storeSlug}>
          <h3>
            <i className='fa-solid fa-store me-2'></i>
            {storeName}
            <span className="text-lowercase">({count} Sản phẩm)</span>
          </h3>
        </a>
      </div>
    </div>
  )
}

export default PurchaseTableHeader