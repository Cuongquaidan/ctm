'use client'
import ImageError from '@/components/ui/ImageError'
import React, { useEffect, useState } from 'react'
import DropdownSelectButtonItem from '@/components/ui/button/DropdownSelectButtonItem'
import { DropdownSelectButtonItemT } from '@/types/common.types'
import { getAllLangs, getAllLangsByUrl } from '@/lib/api/config'
import { getSelectedLang, setSelectedLang } from '@/lib/api/profile'

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
      const resdata = await getAllLangsByUrl(url)
      setData(resdata)
    } else {
      //
      const resdata = await getAllLangs()
      setData(resdata)
    }
  }
  const handleFetchSelectedItem = async () => {
    const resdata = await getSelectedLang()
    setSelectedItem(resdata)
    setIsShow(false);
  }
  const handleSelectItem = async (value: string) => {
    const resdata = await setSelectedLang(value)
    if (resdata) {
      handleFetchSelectedItem()
    }
  }
  useEffect(() => {
    handleFetchSelectedItem()
    handleFetchData()
  }, [url])
  return (
    <div className={`dropdown  theme-form-select ${className}`}>
      <button
        className="btn dropdown-toggle"
        type="button"
        id={id}
        onClick={() => setIsShow(!isShow)}
      >
        {selectedItem && 'image' in selectedItem && selectedItem.image && (
          <ImageError
            src={selectedItem.image}
            className="img-fluid mx-2 lazyload"
            alt={selectedItem.label}
            width={24}
            height={24}
          />
        )}
        <span>{selectedItem?.label}</span>
      </button>
      <ul className={`dropdown-menu ${isShow ? 'show' : ''} ${dropdownClassName}`} >
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