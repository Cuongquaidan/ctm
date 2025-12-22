import { getAllStoreAds } from '@/lib/api/store';
import { StoreAdT } from '@/types/common.types';
import React from 'react'
import SimpleDealHoverV2Client from './SimpleDealHoverV2.client';

export const storeAdsData: StoreAdT[] = [
  {
    id: 1,
    slug: "hot-deals-new-items", // Thêm slug
    imageUrl: "/assets/eme2023/images/veg-2/pro/1.jpg", // Đã sửa thành /assets/eme2023
    title: "Hot Deals on New Items",
    subtitle: "Daily Essentials Eggs & Dairy",
    rating: 4,
    numberOfRatings: 34, // Đổi tên
    name: "Nestfood"  // Đổi tên
  },
  {
    id: 2,
    slug: "organic-meat-prepared", // Thêm slug
    imageUrl: "/assets/eme2023/images/veg-2/pro/2.jpg",
    title: "Organic Meat Prepared",
    subtitle: "Delivered to Your Home",
    rating: 4,
    numberOfRatings: 34, // Đổi tên
    name: "Nestfood" // Đổi tên
  },
  {
    id: 3,
    slug: "buy-more-save-more", // Thêm slug
    imageUrl: "/assets/eme2023/images/veg-2/pro/3.jpg",
    title: "Buy More & Save More",
    subtitle: "Fresh Vegetables & Fruits",
    rating: 4,
    numberOfRatings: 34, // Đổi tên
    name: "Nestfood" // Đổi tên
  },
  {
    id: 4,
    slug: "fresh-fruits-on-go", // Thêm slug
    imageUrl: "/assets/eme2023/images/veg-2/pro/4.jpg",
    title: "Fresh Fruits on Go",
    subtitle: "Fresh Vegetables & Fruits",
    rating: 4,
    numberOfRatings: 34, // Đổi tên
    name: "Nestfood" // Đổi tên
  }
];
interface SimpleDealHoverV2Props {
  initialData?: StoreAdT[];
}
async function SimpleDealHoverV2({ initialData = storeAdsData }: SimpleDealHoverV2Props) {
  let data = initialData || await getAllStoreAds();
  return (
    <SimpleDealHoverV2Client initialData={data}></SimpleDealHoverV2Client>
  )
}

export default SimpleDealHoverV2