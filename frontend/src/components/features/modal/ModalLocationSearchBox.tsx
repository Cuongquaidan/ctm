import { LocationT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'
import Modal from '@/components/features/modal/Modal';
import { getAllLocations, getAllLocationsByUrl, getSelectedLocation, setSelectedLocation } from '@/lib/api/location';
import LocationSearchBoxItem from '@/components/features/modal/ModalLocationSearchBoxItem';
interface ModalLocationSearchBoxProps {
  initialData?: LocationT[]
  url?: string
  onClose: () => void;
}
function ModalLocationSearchBox({ initialData, url, onClose }: ModalLocationSearchBoxProps) {
  const [locations, setLocations] = useState<LocationT[]>(initialData || []);
  const [locationSelected, setLocationSelected] = useState<LocationT>();
  const handleFetchLocations = async () => {
    if (url) {
      const resdata = await getAllLocationsByUrl(url, {});
      setLocations(resdata);
    } else {
      const resdata = await getAllLocations();
      setLocations(resdata);
    }
  }
  const handleSelectedLocation = async (locationId: number) => {
    const resdata = await setSelectedLocation(locationId);

  }
  const handleGetSelectedLocation = async () => {
    const resdata = await getSelectedLocation();
    setLocationSelected(resdata);
  }
  useEffect(() => {
    handleFetchLocations();
    handleGetSelectedLocation();
  }, [url])
  return (
    <div className='location-modal'>
      <Modal onClose={onClose} title="Choose your Delivery Location" description='Enter your address and we will specify the offer for your area.' id="modalLocationSearchBox" classNameMainModal="modal-md" classNameRoot='location-modal'>
        <>
          <div className="modal-body">
            <div className="location-list">
              <div className="search-input">
                <input type="search" className="form-control" placeholder="Search Your Area" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              <div className="disabled-box">
                <h6>{locationSelected?.name || 'Select a Location'}</h6>
              </div>

              <ul className="location-select custom-height">
                {locations.map((item) => (
                  <LocationSearchBoxItem key={item.id} item={item} handleSelectedLocation={handleSelectedLocation} />
                ))}
              </ul>
            </div>
          </div>

        </>
      </Modal>
    </div>
  )
}

export default ModalLocationSearchBox