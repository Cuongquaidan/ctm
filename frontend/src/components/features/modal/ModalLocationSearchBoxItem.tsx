import { getSelectedLocation } from '@/lib/api/location'
import { LocationT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'

interface LocationSearchBoxItemProps {
  locationActiveId?: number
  handleSelectedLocation: (id: number) => void
  item: LocationT
}

function LocationSearchBoxItem({ item, handleSelectedLocation }: LocationSearchBoxItemProps) {
  const [locationActiveId, setLocationActiveId] = useState<number>(0);
  const handleGetSelectedLocation = async () => {
    const resdata = await getSelectedLocation();

    setLocationActiveId(resdata.id);
  }
  useEffect(() => {
    handleGetSelectedLocation();
  }, [])
  return (
    <li>
      <a className={`${item.id === locationActiveId ? 'active' : ''}`} onClick={() => handleSelectedLocation(item.id)}>
        <h6>{item.name}</h6>
        <span>Min: ${item.minPrice}</span>
      </a>
    </li>
  )
}

export default LocationSearchBoxItem