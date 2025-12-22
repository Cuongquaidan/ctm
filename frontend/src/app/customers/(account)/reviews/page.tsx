"use client";
import { data } from '@/assets/data/Home';
import ProductReview from '@/components/features/review/ProductReview';
import ReviewPeople from '@/components/features/review/ReviewPeople';
import ModalAddReview from '@/components/features/modal/ModalAddReview';
import SectionHeader from '@/components/ui/SectionHeader';
import { fetchReviewsByUser } from '@/lib/api/review';
import { ProductT, ReviewT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'

function page() {
  const [isReviewed, setIsReviewed] = useState<boolean>(false);
  const [dataReviews, setDataReviews] = useState<ReviewT[]>([]);
  const [dataProducts, setDataProducts] = useState<ProductT[]>([]);
  const [productSelected, setProductSelected] = useState<ProductT>();
  const [isAddingReview, setIsAddingReview] = useState<boolean>(false);
  const handleFetchReviews = async () => {
    // Fetch reviews from API
    const res = await fetchReviewsByUser();
    setDataReviews(res);
    return;
  }
  const handleFetchProducts = async () => {
    // Fetch products from wishlist API
    setDataProducts(data);
  }
  useEffect(() => {
    handleFetchReviews();
    handleFetchProducts();
  }, [])
  return (
    <>
      {isAddingReview && <ModalAddReview product={productSelected} onClose={() => {
        setIsAddingReview(false)
      }}></ModalAddReview>}
      <SectionHeader title='Đánh giá sản phẩm'></SectionHeader>
      {isReviewed && (<div className="product-section-box m-0">
        <div className="custom-tab pt-0">
          <div className="review-box">
            <ReviewPeople reviews={dataReviews}></ReviewPeople>
          </div>
        </div>
      </div>)}
      {
        !isReviewed && (<div className="row g-sm-3 g-2">
          {dataProducts.map((product) => (
            <ProductReview key={product.id} product={product} onOpen={() => {
              setProductSelected(product);
              setIsAddingReview(true);
            }} />
          ))}
        </div>)}
    </>
  )
}

export default page