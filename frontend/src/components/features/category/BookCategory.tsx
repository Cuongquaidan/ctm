"use client"
import React from 'react';
import { BookCategoryItemT } from '@/types/common.types';
import CustomSectionV2 from '@/components/ui/CustomSectionV2';
import ImageError from '@/components/ui/ImageError';
import Link from 'next/link';


const bookCategoriesData: BookCategoryItemT[] = [
  { id: "1", imageSrc: '/assets/eme2023/images/furniture/1.png', altText: 'Fiction Books', linkHref: 'shop-left-sidebar.html' },
  { id: "2", imageSrc: '/assets/eme2023/images/furniture/2.png', altText: 'Science & Technology Books', linkHref: 'shop-left-sidebar.html' },
  { id: "3", imageSrc: '/assets/eme2023/images/furniture/3.png', altText: 'Biography & Memoir Books', linkHref: 'shop-left-sidebar.html' },
  { id: "4", imageSrc: '/assets/eme2023/images/furniture/4.png', altText: 'Self-Help Books', linkHref: 'shop-left-sidebar.html' },
  { id: "5", imageSrc: '/assets/eme2023/images/furniture/5.png', altText: 'History Books', linkHref: 'shop-left-sidebar.html' },
  { id: "6", imageSrc: '/assets/eme2023/images/furniture/6.png', altText: 'Cooking & Food Books', linkHref: 'shop-left-sidebar.html' },
  { id: "7", imageSrc: '/assets/eme2023/images/furniture/7.png', altText: 'Thriller & Mystery Books', linkHref: 'shop-left-sidebar.html' },
  { id: "8", imageSrc: '/assets/eme2023/images/furniture/8.png', altText: 'Children Books', linkHref: 'shop-left-sidebar.html' },
  { id: "9", imageSrc: '/assets/eme2023/images/furniture/9.png', altText: 'Fantasy & Sci-Fi Books', linkHref: 'shop-left-sidebar.html' },
];

function BookCategory() {
  return (
    <section className="book-category"
      style={{
        marginBottom: "9px"
      }}
    >
      <div className="container-fluid-lg">
        <CustomSectionV2<BookCategoryItemT>
          title=''
          hasIcon={false}
          items={bookCategoriesData}
          wrapperStyle={{
            border: "none",
            marginBottom: "-50px"
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
            1280: { slidesPerView: 8, spaceBetween: 30 },
          }}
          renderItem={(item, index) => (
            <div key={item.id}>
              <Link
                href={item.linkHref}
                className="category-box wow fadeInUp"
                style={{
                  aspectRatio: "1 / 1.2",
                  padding: "0px",

                }}
              >
                <ImageError src={item.imageSrc} alt={item.altText} width={100} height={300} className='img-fluid'
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

              </Link>
            </div>
          )}

        ></CustomSectionV2>
        <div className="shelf"
          style={{
            borderBottom: " 30px solid #a5a5a5",
            borderLeft: "20px solid rgba(0, 0, 0, 0)",
            borderRight: "20px solid rgba(0, 0, 0, 0)",
            top: "-11px",
            zIndex: "-1",
            position: "relative",
          }}
        >
          <div
            style={{
              content: "",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#686868",
              height: "20px",
              width: "calc(100% + 40px)",
              bottom: "-50px",
              zIndex: 1
            }}
          ></div>

        </div>
      </div>

    </section>
  );
}

export default BookCategory;