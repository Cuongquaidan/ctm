import { getAllCategoriesV2 } from '@/lib/api/category';
import { CategoryTV0 } from '@/types/common.types';
import React from 'react'
import SearchByCategoryHoverV2Client from '@/components/features/category/SearchByCategoryHoverV2.client';

interface SearchByCategoryHoverV2Props {
  initialData?: CategoryTV0[];
}
export const categoriesOrganic: CategoryTV0[] = [
  {
    name: "Oils, Refined & Ghee",
    image: "/assets/eme2023/images/veg-3/category/1.png", // Sửa: imageUrl -> image
    link: "shop-left-sidebar.html", // Sửa: linkUrl -> link
    slug: "oils-refined-ghee",
    children: [] // Thêm: children theo type
  },
  {
    name: "Rice, Flour & Grains",
    image: "/assets/eme2023/images/veg-3/category/2.png",
    link: "shop-left-sidebar.html",
    slug: "rice-flour-grains",
    children: []
  },
  {
    name: "Food Cupboard",
    image: "/assets/eme2023/images/veg-3/category/3.png",
    link: "shop-left-sidebar.html",
    slug: "food-cupboard",
    children: []
  },
  {
    name: "Dals & Pulses",
    image: "/assets/eme2023/images/veg-3/category/4.png",
    link: "shop-left-sidebar.html",
    slug: "dals-pulses",
    children: []
  },
  {
    name: "Drinks & Beverages",
    image: "/assets/eme2023/images/veg-3/category/5.png",
    link: "shop-left-sidebar.html",
    slug: "drinks-beverages",
    children: []
  },
  {
    name: "Fresh Fruits & Vegetables",
    image: "/assets/eme2023/images/veg-3/category/6.png",
    link: "shop-left-sidebar.html",
    slug: "fresh-fruits-vegetables",
    children: []
  },
  {
    name: "Ready to eat Meals",
    image: "/assets/eme2023/images/veg-3/category/7.png",
    link: "shop-left-sidebar.html",
    slug: "ready-to-eat-meals",
    children: []
  },
  {
    name: "Instant Mixes",
    image: "/assets/eme2023/images/veg-3/category/8.png",
    link: "shop-left-sidebar.html",
    slug: "instant-mixes",
    children: []
  },
  // HTML của bạn có 1 item bị lặp lại ở cuối
  {
    name: "Rice, Flour & Grains",
    image: "/assets/eme2023/images/veg-3/category/2.png",
    link: "shop-left-sidebar.html",
    slug: "rice-flour-grains-repeat", // Thêm slug khác
    children: []
  }
];



async function SearchByCategoryHoverV2({ initialData = categoriesOrganic }: SearchByCategoryHoverV2Props) {
  let data = initialData || await getAllCategoriesV2();
  return (
    <section className="category-section-2">
      <div className="row">
        <div className="col-12">
          <div className="category-slider arrow-slider">
            <SearchByCategoryHoverV2Client initialData={data}></SearchByCategoryHoverV2Client>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchByCategoryHoverV2