import { setDefaultAddress } from '@/lib/api/address';
import { AddressT } from '@/types/common.types'
import React from 'react'
interface SelectableAddressBoxProps {
  item: AddressT
}

function SelectableAddressBox({ item }: SelectableAddressBoxProps) {
  const isDefault = item.status === 1;

  const handleSelectDefault = async () => {
    try {
      await setDefaultAddress(item.id + "");
    } catch (error) {
      console.error('Failed to set default address:', error);
    }
  };
  return (
    <div className="delivery-address-box">
      <div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="jack" checked={isDefault}
            onChange={() => handleSelectDefault()}
            id={item.id.toString()} />
        </div>

        <div className="label">
          <label>{item.address}</label>
        </div>

        <ul className="delivery-address-detail">
          <li>
            <h4 className="fw-500">{item.name}</h4>
          </li>

          <li>
            <p className="text-content"><span
              className="text-title">Address
              : </span>{item.fulladdress}</p>
          </li>

          <li>
            <h6 className="text-content mb-0"><span
              className="text-title">Phone
              :</span> {item.phone}</h6>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SelectableAddressBox