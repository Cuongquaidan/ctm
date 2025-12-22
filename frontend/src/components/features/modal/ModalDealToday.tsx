import { getActiveProductOffers, getActiveProductOffersByUrl } from '@/lib/api/product';
import { ProductT } from '@/types/common.types';
import React, { useEffect } from 'react'
import Modal from '@/components/features/modal/Modal';
import ModalDealTodayItem from '@/components/features/modal/ModalDealTodayItem';


interface ModalDealTodayProps {
  initialData?: ProductT[]
  url?: string
  onClose: () => void;
}
function ModalDealToday({ initialData, url, onClose }: ModalDealTodayProps) {
  const [data, setData] = React.useState<ProductT[]>(initialData || []);
  const handleFetchDealTodayProducts = async () => {
    if (initialData && initialData.length) {
      setData(initialData)
    } else {
      if (url) {
        const resdata = await getActiveProductOffersByUrl(url)
        setData(resdata)
      } else {
        const resdata = await getActiveProductOffers();
        setData(resdata);
      }
    }
  }
  useEffect(() => {
    handleFetchDealTodayProducts();
  }, [url, initialData])
  return (
    <div className='deal-modal'>
      <Modal onClose={onClose} title="Deal Today" description='Recommended deals for you.' id="modalDealToday" classNameMainModal="modal-md" classNameRoot='deal-modal'>
        <>
          <div className="modal-body">
            <div className="deal-offer-box">
              <ul className="deal-offer-list">
                {
                  data.map((item, index) => (
                    <ModalDealTodayItem key={item.id} index={index} item={item}></ModalDealTodayItem>
                  ))
                }
              </ul>
            </div>
          </div>
        </>
      </Modal>
    </div>
  )
}

export default ModalDealToday