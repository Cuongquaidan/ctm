"use client"
import CustomSection from '@/components/ui/CustomSection'
import React from 'react'
import ImageError from '@/components/ui/ImageError';
const categoriesData = [
  { id: 1, name: 'Cake', imageSrc: '/assets/eme2023/svg/2/1.svg', href: 'shop-left-sidebar.html' },
  { id: 2, name: 'Sandwich', imageSrc: '/assets/eme2023/svg/2/2.svg', href: 'shop-left-sidebar.html' },
  { id: 3, name: 'Cookies', imageSrc: '/assets/eme2023/svg/2/3.svg', href: 'shop-left-sidebar.html' },
  { id: 4, name: 'Pie', imageSrc: '/assets/eme2023/svg/2/4.svg', href: 'shop-left-sidebar.html' },
  { id: 5, name: 'Bread', imageSrc: '/assets/eme2023/svg/2/5.svg', href: 'shop-left-sidebar.html' },
  { id: 6, name: 'Biscuits', imageSrc: '/assets/eme2023/svg/2/6.svg', href: 'shop-left-sidebar.html' },
  { id: 7, name: 'Bagel', imageSrc: '/assets/eme2023/svg/2/7.svg', href: 'shop-left-sidebar.html' },
  { id: 8, name: 'Croissant', imageSrc: '/assets/eme2023/svg/2/8.svg', href: 'shop-left-sidebar.html' },
  { id: 9, name: 'Cupcake', imageSrc: '/assets/eme2023/svg/2/9.svg', href: 'shop-left-sidebar.html' },
];
function SliderCategory() {
  return (
    <>
      <CustomSection
        items={categoriesData}
        hasIcon={false}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 5, spaceBetween: 15 },
          1024: { slidesPerView: 7, spaceBetween: 20 },
        }}
        wrapperStyle={{
          border: "none"
        }}
        renderItem={(item, index) => (
          <a href={item.href} className="category-box category-box-2 category-dark"
            key={index}>
            <div>
              <ImageError width={300} height={300} src={item.imageSrc} className="lazyload" alt={item.name}
                style={{
                  width: "calc(38px + 7 * (100vw - 320px) / 1600)",
                  height: "calc(38px + 7 * (100vw - 320px) / 1600)",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
              <h5 style={{
                color: "#222",
                marginTop: "12px",
                fontWeight: 500,
                overflow: "hidden",
              }}>{item.name}</h5>
            </div>
          </a>
        )}
      />
    </>
  )
}

export default SliderCategory