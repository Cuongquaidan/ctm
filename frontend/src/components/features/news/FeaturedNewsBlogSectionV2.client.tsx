"use client"
import React from 'react'
import BlogItem from '@/components/features/news/NewsBlogItem'
import 'swiper/css';
import { PostItemT } from '@/types/common.types';
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
interface FeaturedBlogSectionV2ClientProps {
  initialData: PostItemT[];
}

function FeaturedBlogSectionV2Client({ initialData }: FeaturedBlogSectionV2ClientProps) {




  return (
    <>
      <CustomSectionV2<PostItemT>
        title="Blog Nổi bật"
        items={initialData}
        breakpoints={{
          768: { slidesPerView: 3, spaceBetween: 15 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
        wrapperStyle={{
          border: "none"
        }}
        renderItem={(item, index) => (
          <BlogItem item={item} key={index}></BlogItem>
        )}
      ></CustomSectionV2>
    </>
  )
}

export default FeaturedBlogSectionV2Client
