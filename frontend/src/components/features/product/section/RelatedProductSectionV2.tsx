"use client"
import { getRelatedProducts } from '@/lib/api/product';
import React, { useEffect, useState } from 'react'
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import { ProductT } from '@/types/common.types';
import VerticalProductHover from '@/components/features/product/item/VerticalProductHover';

function RelatedProductSectionV2({ params }: { params: { locale: string, slug: string } }) {
  const { locale, slug } = params;
  const [relatedProducts, setRelatedProducts] = useState<ProductT[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getRelatedProducts(slug);
      setRelatedProducts(data);
    };
    fetchData();
  }, [slug]);

  return (
    <div className="my-5">
      <CustomSectionV2<ProductT>
        items={relatedProducts}
        slidesStep={1}
        title='Sản Phẩm Liên Quan'
        description='Khám Phá Những Sản Phẩm Tương Tự Được Chọn Lọc Dành Riêng Cho Bạn'
        hasPagination={true}
        renderItem={(item, index) => (
          <VerticalProductHover product={item} index={index} />
        )}

      ></CustomSectionV2>

    </div>
  )
}

export default RelatedProductSectionV2
