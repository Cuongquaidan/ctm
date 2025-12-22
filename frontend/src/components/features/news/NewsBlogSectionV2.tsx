"use client"
import React, { useEffect, useState } from 'react'
import BlogItem from '@/components/features/news/NewsBlogItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PostItemT } from '@/types/common.types';
import { getAllNews } from '@/lib/api/new';
import { motion } from "framer-motion";
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
interface BlogSectionV2Props {
  initialData?: PostItemT[];
  url?: string;
}

function BlogSectionV2({ initialData, url }: BlogSectionV2Props) {
  const [data, setData] = useState<PostItemT[]>(initialData || []);

  const handleFetchData = async () => {
    if (url) {
      const resdata = await getAllNews();
      setData(resdata.data || []);
    }
    else {
      const resdata = await getAllNews();
      setData(resdata.data);
    }
  }

  useEffect(() => {
    handleFetchData();

  }, [url]);



  return (
    <section className="blog-section mb-4">
      <div className='container-fluid-lg'><CustomSectionV2<PostItemT>
        title="Blog Nổi bật"
        items={data}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 15 },
          1280: { slidesPerView: 3, spaceBetween: 20 },
        }}
        wrapperStyle={{
          border: "none"
        }}
        renderItem={(item, index) => (
          <BlogItem item={item} key={index}></BlogItem>
        )}
      ></CustomSectionV2></div>
    </section>
  )
}

export default BlogSectionV2
