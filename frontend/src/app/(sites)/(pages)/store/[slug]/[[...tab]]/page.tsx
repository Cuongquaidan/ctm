import CircleLogo from '@/components/features/store/CircleLogo'
import SearchStore from '@/components/features/store/SearchStore'
import StoreInfo from '@/components/features/store/StoreInfo'
import StoreMenu from '@/components/features/store/StoreMenu'
import HomeTab from '@/components/features/store/tab/HomeTab'

export const dynamic = 'force-dynamic';
import FlashsaleTab from '@/components/features/store/tab/FlashsaleTab'
import { getStoreBySlug } from '@/lib/api/store'
import React from 'react'
import PromoTab from '@/components/features/store/tab/PromoTab'
import ProductTab from '@/components/features/store/tab/ProductTab'
import ReviewTab from '@/components/features/store/tab/ReviewTab'
import NewsTab from '@/components/features/store/tab/NewsTab'
import { fetchAllReviews, fetchReviewsByStore } from '@/lib/api/review'
import ContactTab from '@/components/features/store/tab/ContactTab'
import { getVoucherStores } from '@/lib/api/voucher'
import { PaginatedDataT } from '@/types/api.type'
import { ReviewT } from '@/types/common.types'

async function page({
  params,
  searchParams
}: {
  params: {
    slug: string
    tab?: string[]
  }
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const { tab, slug } = await params
  const queryParams = await searchParams
  const page = Number(queryParams.page) || 1
  const pageLen = Number(queryParams.pageLen) || 10

  let store = null;
  let reviews = {
    page: 0,
    pageLen: 0,
    pageTotal: 0,
    recordTotal: 0,
    data: []


  } as PaginatedDataT<ReviewT>;
  let vouchers = [];

  try {
    store = await getStoreBySlug(slug);
  } catch (error) {
    console.error('Error fetching store:', error);
    return <div>Không thể tải thông tin cửa hàng</div>;
  }

  const currentTab = tab?.[0] || 'tab-home'

  try {
    reviews = await fetchAllReviews({
      store_idSh: store.id,
      page,
      pageLen,
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    reviews = {
      page: 0,
      pageLen: 0,
      pageTotal: 0,
      recordTotal: 0,
      data: []
    };
  }

  try {
    vouchers = await getVoucherStores({
      storeIdSh: store.id
    });
  } catch (error) {
    console.error('Error fetching vouchers:', error);
    vouchers = [];
  }
  return (
    <>
      <section className="py-0">
        <div className="container-fluid-lg">
          <div className="vendor-detail-box-2 mb-0">
            <div className="row g-4">
              <div className="col-xxl-1 col-md-2">
                <CircleLogo url={store.image || ""} name={store.name} />
              </div>
              <div className="col-xxl-7 col-md-6">
                <StoreInfo store={store} />
              </div>
              <div className="col-xxl-4 col-md-4 d-flex align-items-end justify-content-end">
                <SearchStore />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-b-space shop-section pt-4">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-lg-3">
              <StoreMenu />
            </div>
            <div className="col-lg-9">
              <div className="store-right-sidebar">
                {/* Nội dung theo tab */}
                {currentTab === 'tab-home' && (
                  <HomeTab storeId={store.id}></HomeTab>
                )}
                {currentTab === 'tab-flash' && (
                  <FlashsaleTab storeId={store.id} />
                )}
                {currentTab === 'tab-promo' && (
                  <PromoTab storeId={store.id}></PromoTab>
                )}
                {currentTab === 'tab-product' && (
                  <ProductTab storeId={store.id} />
                )}
                {currentTab === 'tab-news' && (
                  <NewsTab storeId={store.id} ></NewsTab>
                )}
                {currentTab === 'tab-review' && (
                  <ReviewTab reviews={reviews}></ReviewTab>
                )}
                {/* {
                  currentTab === 'tab-contact' && (
                    <ContactTab store={store}></ContactTab>
                  )
                } */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
