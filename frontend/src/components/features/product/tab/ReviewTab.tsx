"use client"
import { fetchAllReviews, fetchReviewsByProduct } from '@/lib/api/review';
import { getStoreById, getStoreBySlug } from '@/lib/api/store';
import { ReviewT, StoreT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'
import ReviewBox from '@/components/features/review/ReviewBox';
import { motion } from "framer-motion";
import { PaginatedDataT } from '@/types/api.type';
import { useSearchParams } from 'next/navigation';

interface ReviewTabProductProps {
  productId: number;
}

function ReviewTab({ productId }: ReviewTabProductProps) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const pageLen = Number(searchParams.get('pageLen')) || 10;

  const [dataReviews, setDataReviews] = useState<PaginatedDataT<ReviewT>>();
  const [store, setStore] = useState<StoreT>();
  const [groupedReviews, setGroupedReviews] = useState<{ [key: number]: number }>({});
  const [loading, setLoading] = useState(false);

  // Ham group theo rating tra ve count va rating
  const handleGroupedReviews = (reviews: ReviewT[]) => {
    return reviews.reduce((acc, review) => {
      const rating = review.point;
      if (!acc[rating]) {
        acc[rating] = 0;
      }
      acc[rating] += 1;
      return acc;
    }, {} as { [key: number]: number })
  }

  const handleFetchStore = async (storeId: number) => {
    // Fetch store from API
    const res = await getStoreById(storeId);
    setStore(res);
  }

  const handleFetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetchAllReviews({
        productIdSh: productId,
        page,
        pageLen,
      });
      setDataReviews(res);

      if (res.data?.[0]?.store_id) {
        handleFetchStore(res.data[0].store_id);
      }
      const group = handleGroupedReviews(res.data || []);
      setGroupedReviews(group);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleFetchReviews();
  }, [page, pageLen])

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0 }}
      className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab ">
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : store && dataReviews ? (
        <ReviewBox store={store} reviews={dataReviews} groupedReviews={groupedReviews}></ReviewBox>
      ) : (
        <div className="text-center py-5">
          <p>Chưa có đánh giá nào</p>
        </div>
      )}
    </motion.div>
  )
}

export default ReviewTab