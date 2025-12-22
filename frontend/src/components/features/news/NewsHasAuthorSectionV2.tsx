"use client"
import React, { useEffect, useState } from 'react'
import NewsBlogItem from '@/components/features/news/NewsItemHasAuthor'
import SectionHeaderV2 from '@/components/ui/SectionHeaderV2';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PostItemT } from '@/types/common.types';
import { getAllNews } from '@/lib/api/new';
import { motion } from "framer-motion";
interface NewsSectionV2Props {
  initialData?: PostItemT[];
  url?: string;
}

function NewsSectionV2({ initialData, url }: NewsSectionV2Props) {
  const [data, setData] = useState<PostItemT[]>(initialData || []);

  useEffect(() => {
    let mounted = true;

    async function load() {
      if (initialData && initialData.length) {
        setData(initialData);
        return;
      }

      try {
        const res = url ? await getAllNews({ pageSize: 3 }) : await getAllNews({ pageSize: 3 });
        if (mounted) setData(res.data || []);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('NewsSectionV2 load error', e);
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
          <SectionHeaderV2 title='Tin tức nổi bật' hasIcon={false}></SectionHeaderV2>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            hashNavigation={true}

          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsBlogItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSectionV2

