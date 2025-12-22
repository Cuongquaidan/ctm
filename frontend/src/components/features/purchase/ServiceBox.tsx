"use client"
import React, { useEffect, useState } from 'react'
import ServiceBoxItem from '@/components/features/purchase/ServiceBoxItem';
import { getServiceShipping } from '@/lib/api/service';
import { ServiceItem } from '@/types/common.types';


function ServiceBox() {
  const [service, setService] = useState<{
    id: string;
    name: string;
    especial: string;
    items: ServiceItem[];
  }>();
  // const service = await getServiceShipping();
  useEffect(() => {
    const handleFetchService = async () => {
      const resdata = await getServiceShipping();
      setService(resdata);
    }
    handleFetchService();
  }, []);
  return (
    <div className='ahaServiceBox position-relative spinner-xs'
      style={{
        minHeight: "50px"
      }}
    >
      <div className='px-3 py-2 d-flex flex-column justify-content-center border-start'>
        <p className='mb-2 fw-600'>{service?.name}</p>
        {service?.items ? (
          service?.items.map((item) => (
            <ServiceBoxItem key={item.id} item={item}></ServiceBoxItem>
          ))
        ) : (
          <div className='mb-0'>
            <span className='fw-600 text-danger'>{service?.especial}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceBox