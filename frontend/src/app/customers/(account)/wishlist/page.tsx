"use client"
import VerticalProductWishList from '@/components/features/product/section/VerticalProductWishList';
import SectionHeader from '@/components/ui/SectionHeader';
import { fetchProductsInWishList } from '@/lib/api/wishlist';
import { ProductT } from '@/types/common.types';
import React, { useEffect, useState } from 'react'

function page() {
  const [data, setData] = useState<ProductT[]>([]);
  const handleFetchProductsOfWishList = async () => {
    // Fetch products from wishlist API
    const res = await fetchProductsInWishList();
    setData(res);
  }
  useEffect(() => {
    handleFetchProductsOfWishList();
  }, [])
  return (
    <>
      <SectionHeader title='Sản phẩm yêu thích'></SectionHeader>
      <div className="row g-sm-3 g-2">
        {data?.map((product, index) => (
          <div className="col-6 col-md-4 col-lg-3" key={product.id}>
            <VerticalProductWishList product={product} index={index} refresh={handleFetchProductsOfWishList} />
          </div>
        ))}
      </div>
    </>

  )
}

export default page