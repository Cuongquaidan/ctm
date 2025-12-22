"use client"
import Link from 'next/link';
import React from 'react'
import "swiper/css";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export type DigitalCategoryT = {
  name: string;
  link: string;
  // Thêm slug để sử dụng làm key nếu cần
  slug: string;
  // Thêm optional id nếu cần quản lý thứ tự/tracking
  id: number;
};

const digitalCategories: DigitalCategoryT[] = [
  { id: 1, name: "Themes & Templates", link: "shop-left-sidebar.html", slug: "themes-templates" },
  { id: 2, name: "Scripts & Code", link: "shop-left-sidebar.html", slug: "scripts-code" },
  { id: 3, name: "Graphics & Design", link: "shop-left-sidebar.html", slug: "graphics-design" },
  { id: 4, name: "Ebooks & Documents", link: "shop-left-sidebar.html", slug: "ebooks-documents" },
  { id: 5, name: "Music & Audio", link: "shop-left-sidebar.html", slug: "music-audio" },
  { id: 6, name: "Videos & Clips", link: "shop-left-sidebar.html", slug: "videos-clips" },
  { id: 7, name: "Premium & Business", link: "shop-left-sidebar.html", slug: "premium-business" },
  { id: 8, name: "Web Template", link: "shop-left-sidebar.html", slug: "web-template" },
  { id: 9, name: "Illustrations", link: "shop-left-sidebar.html", slug: "illustrations" },
  { id: 10, name: "Mobile app", link: "shop-left-sidebar.html", slug: "mobile-app" },
  { id: 11, name: "Web app", link: "shop-left-sidebar.html", slug: "web-app" },
  { id: 12, name: "3D illustration", link: "shop-left-sidebar.html", slug: "3d-illustration" },
  { id: 13, name: "Icon", link: "shop-left-sidebar.html", slug: "icon" },
];
function FloatCategory() {
  const categoryLinkStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "calc(10px + 6 * (100vw - 320px) / 1600) calc(15px + 29 * (100vw - 320px) / 1600)",
    display: "block",
    borderRadius: "8px",
    backgroundColor: "#f8f8f8",
    position: "relative",
    overflow: "hidden",
    transition: "background-color .3s ease-in-out",
  };
  const categorySpanStyle: React.CSSProperties = {
    fontSize: "calc(14px + 2 * (100vw - 320px) / 1600)",
    color: "#222",
    marginBlock: "-2px -4px",
    display: "block",
    WebkitLineClamp: 2,
    overflow: "hidden",
  };
  return (
    <section className="feature-category-panel pt-0"
      style={{
        marginTop: "-50px"
      }}
    >
      <div className="container-fluid-lg">
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <div className="feature-panel-slider no-arrow"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "calc(16px + 4 * (100vw - 320px) / 1600)",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(221, 221, 221, .549)",
                margin: "0 auto",
                width: "100%",
                position: "relative",
                zIndex: 999
              }}
            >
              {/* === MAP QUA MẢNG digitalCategories === */}
              <Swiper
                modules={[Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  },
                  1280: {
                    slidesPerView: 6,
                    spaceBetween: 20
                  }
                }}
                loop={true}
              >
                {digitalCategories.map((item, index) => (
                  <SwiperSlide key={item.id || item.slug}>
                    <Link href={item.link} className="cate-box"
                      style={categoryLinkStyle}
                    >
                      <span style={categorySpanStyle}>{item.name}</span>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloatCategory