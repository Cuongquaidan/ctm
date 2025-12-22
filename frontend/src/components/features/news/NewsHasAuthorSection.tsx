"use client"
import React, { useEffect, useState } from 'react'
import NewsItem from '@/components/features/news/NewsItemHasAuthor'
import SectionHeader from '@/components/ui/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PostItemT } from '@/types/common.types';
import { getAllNews } from '@/lib/api/new';
import { motion } from "framer-motion";
interface NewsSectionProps {
  initialData?: PostItemT[];
  url?: string;
}

function NewsSection({ initialData, url }: NewsSectionProps) {
  const [data, setData] = useState<PostItemT[]>(initialData || []);

  useEffect(() => {
    let mounted = true;

    async function load() {
      if (initialData && initialData.length) {
        setData(initialData);
        return;
      }

      try {
        // const res = url ? await getAllNewsByUrl(url, { pageSize: 3 }) : await getAllNews({ pageSize: 3 });
        const res = await getAllNews({ pageSize: 3 });
        if (mounted) setData(res.data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('NewsSection load error', e);
        if (mounted) setData([]);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [initialData, url]);

  const items = data ?? [];

  return (

    <section className="blog-section mb-4">
      <div className='container-fluid-lg'>
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0 }}
        >
          <SectionHeader title='Tin tức nổi bật'></SectionHeader>
          <Swiper spaceBetween={20} slidesPerView={3}>
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection
