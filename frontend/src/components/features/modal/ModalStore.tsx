"use client"
import React, { useEffect } from 'react'
import ModalStoreItem from '@/components/features/modal/ModalStoreItem'
import Modal from '@/components/features/modal/Modal'
import { StoreT } from '@/types/common.types'
import { getAllStores, getAllStoresByUrl } from '@/lib/api/store'
import { apiFetchSites } from '@/lib/api/api'

interface ModalStoreProps {
  initialData?: StoreT[];
  uri?: string;
  onClose: () => void;
}

function ModalStore({ initialData, uri, onClose }: ModalStoreProps) {
  const [data, setData] = React.useState<StoreT[]>(initialData || []);

  const handleFetchData = async () => {
    if (initialData && initialData.length > 0) {
      setData(initialData);
      return;
    }

    if (uri) {
      const resdata = await apiFetchSites(uri);

      setData(resdata.data);
      return;
    }
  }

  useEffect(() => {
    handleFetchData();
  }, [uri, initialData]);

  return (
    <Modal onClose={onClose} title="" classNameMainModal="modal-xl container" id="modalStore">
      <div className="modal-body" style={{
        overflowY: "auto",
        flexGrow: 1,
      }}>
        <div className="title title-flex-2">
          <h2>Cửa hàng</h2>
          <ul className="nav nav-tabs tab-style-color-2 tab-style-color">
            <li className="nav-item">
              <button className="nav-link btn active" onClick={() => location.href = '/store'} type="button">Xem tất cả</button>
            </li>
          </ul>
        </div>
        <div className="row blog-section">
          {data?.map((item, index) => (
            <ModalStoreItem key={item.id || index} item={item} />
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default ModalStore