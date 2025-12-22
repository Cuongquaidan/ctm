'use client'
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import SellerItem from '@/components/features/store/SellerItem'
import Pagination from '@/components/ui/Pagination'
import { getAllStores } from '@/lib/api/store'
import { StoreT } from '@/types/common.types'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function StorePage() {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const pageLen = Number(searchParams.get('pageLen')) || 9

  const [stores, setStores] = useState<StoreT[]>([])
  const [pageTotal, setPageTotal] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true)
        const data = await getAllStores({ page, limit: pageLen })
        setStores(data.data)
        setPageTotal(data.pageTotal)
      } catch (error) {
        console.error('Error fetching stores:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStores()
  }, [page, pageLen])

  return (
    <>
      <BreadcrumbBackToHome current='Cửa hàng' title='Cửa hàng' />
      <section className="seller-grid-section mb-5">
        <div className="container-fluid-lg">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {stores.map((item, index) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                    <SellerItem item={item} />
                  </div>
                ))}
              </div>
              <Pagination totalPages={pageTotal} />
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default StorePage