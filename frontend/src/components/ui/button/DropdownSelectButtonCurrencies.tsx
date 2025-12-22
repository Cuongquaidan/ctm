'use client'
import ImageError from '@/components/ui/ImageError'
import React, { useEffect, useState } from 'react'
import DropdownSelectButtonItem from '@/components/ui/button/DropdownSelectButtonItem'
import { DropdownSelectButtonItemT } from '@/types/common.types'
import { getAllCurrencies, getAllCurrenciesByUrl } from '@/lib/api/config'
import { getSelectedCurrency, setSelectedCurrency } from '@/lib/api/profile'

interface DropdownSelectButtonProps {
  id: string
  currentValue?: string
  items?: DropdownSelectButtonItemT[]
  url?: string
  className?: string
  dropdownClassName?: string
}

function DropdownSelectButton({
  id,
  items,
  url,
  className = '',
  dropdownClassName = 'dropdown-menu-end'
}: DropdownSelectButtonProps) {
  const [data, setData] = useState<DropdownSelectButtonItemT[]>(items || [])
  const [selectedItem, setSelectedItem] = useState<DropdownSelectButtonItemT>()
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleFetchData = async () => {
    if (url) {
      const resdata = await getAllCurrenciesByUrl(url)
      setData(resdata)
    } else {
      //
      const resdata = await getAllCurrencies()
      setData(resdata)
    }
  }
  const handleFetchSelectedItem = async () => {
    const resdata = await getSelectedCurrency()

    setSelectedItem(resdata)
    setIsShow(false);
  }
  const handleSelectItem = async (value: string) => {
    const resdata = await setSelectedCurrency(value)
    if (resdata) {
      handleFetchSelectedItem()
    }
  }
  useEffect(() => {
    handleFetchSelectedItem()
    handleFetchData()
  }, [url])
  return (
    <div className={`dropdown theme-form-select relative ${className}`}>
      <button
        className="btn dropdown-toggle "
        type="button"
        id={id}
        onClick={() => setIsShow(!isShow)}
      >
        {selectedItem && 'image' in selectedItem && selectedItem.image && (
          <ImageError
            src={selectedItem.image}
            className="img-fluid  lazyload p-2 mx-2"
            alt={selectedItem.label}
            width={24}
            height={24}
          />
        )}
        <span>{selectedItem?.label}</span>
      </button>
      <ul className={`dropdown-menu  ${isShow ? 'show' : ''} ${dropdownClassName}`} >
        {data.map((item) => (
          <DropdownSelectButtonItem
            key={item.value}
            {...item}
            onClick={handleSelectItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default DropdownSelectButton