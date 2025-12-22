import LordIcon from '@/components/ui/icons/LordIcon';
import { fetchAddresses, fetchAddressesByUrl } from '@/lib/api/address';
import { AddressT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'
import SelectableAddressBox from '@/components/features/purchase/SelectableAddressBox';
import CheckoutItem from '@/components/features/purchase/CheckoutItem';
interface CartBoxAddressProps {
  initialData?: AddressT[];
  url?: string;
}

function SelectableAddressBoxGroup({ initialData, url }: CartBoxAddressProps) {
  const [addresses, setAddresses] = useState<AddressT[]>(initialData || []);
  const handleFetchAddresses = async () => {
    try {
      if (url) {
        const resdata = await fetchAddressesByUrl(url);
        setAddresses(resdata);
      } else {
        const resdata = await fetchAddresses();
        setAddresses(resdata);
      }
    } catch (error) {
      // Handle error silently or show error message to user
    }
  }

  useEffect(() => {
    handleFetchAddresses();
  }, [url]);
  return (
    <>
      <CheckoutItem title='Delivery Address' icon={<LordIcon icon={require("@/assets/lordicon/ggihhudh.json")} primary='#0baf9a' secondary='#0baf9a' tertiary='#0baf9a' size={40} />} >
        <div className="row g-4">
          {
            addresses?.map((item) => (<div className="col-xxl-6 col-lg-12 col-md-6" key={item.id}><SelectableAddressBox item={item} /></div>))
          }
        </div>
      </CheckoutItem>
    </>
  )
}

export default SelectableAddressBoxGroup