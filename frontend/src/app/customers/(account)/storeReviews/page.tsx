"use client";
import { stores } from '@/assets/data/Store';
import ReviewPeople from '@/components/features/review/ReviewPeople';
import StoreReview from '@/components/features/review/StoreReview';
import ModalAddReview from '@/components/features/modal/ModalAddReview';
import SectionHeader from '@/components/ui/SectionHeader';
import { fetchReviewsByUser } from '@/lib/api/review';
import { ReviewT, StoreT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'

function page() {
  const [isReviewed, setIsReviewed] = useState<boolean>(false);
  const [dataReviews, setDataReviews] = useState<ReviewT[]>([]);
  const [dataStores, setDataStores] = useState<StoreT[]>([]);
  const [storeSelected, setStoreSelected] = useState<StoreT>();
  const [isAddingReview, setIsAddingReview] = useState<boolean>(false);
  const handleFetchReviews = async () => {
    // Fetch reviews from API
    const res = await fetchReviewsByUser();
    setDataReviews(res);
    return;
  }
  const handleFetchProducts = async () => {
    // Fetch products from wishlist API
    setDataStores(stores);
  }
  useEffect(() => {
    handleFetchReviews();
    handleFetchProducts();
  }, [])
  return (
    <>
      {isAddingReview && <ModalAddReview store={storeSelected} onClose={() => {
        setIsAddingReview(false)
      }}></ModalAddReview>}
      <SectionHeader title='Đánh giá cửa hàng'></SectionHeader>
      {isReviewed && (<div className="product-section-box m-0">
        <div className="custom-tab pt-0">
          <div className="review-box">
            <ReviewPeople reviews={dataReviews}></ReviewPeople>
          </div>
        </div>
      </div>)}
      {
        !isReviewed && (<div className="row g-sm-3 g-2">
          {dataStores.map((store) => (
            <StoreReview key={store.id} store={store} onOpen={() => {
              setStoreSelected(store);
              setIsAddingReview(true);
            }} />
          ))}
        </div>)}
    </>
  )
}

export default page