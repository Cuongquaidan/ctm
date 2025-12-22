"use client"
import { apiFetchSites } from "@/lib/api/api";
import { IMAGES_BASE_URL } from "@/lib/constants/constants";
import { CategoryT } from "@/types/common.types";
import ImageError from '@/components/ui/ImageError';
import { useEffect, useState } from "react";
import NavTopCategoryItemSubList from "./NavTopCategoryItemSubList";

interface CateT {
  item: CategoryT;
  children: CateT[];
}

const NavTopCategoryItem = ({ item }: { item: CateT }) => {
  const category = item?.item || item;
  const children = item?.children || [];

  return (
    <li className="onhover-category-list">
      <a href={"/" + category.alias} className="category-name flex items-center gap-2">
        <ImageError src={category.image !== null ? IMAGES_BASE_URL + "/" + category.image : '/images/logo.png'} width={40} height={40} alt={category.name || 'honeynet'} />
        <h6>{category.name}</h6>
        {children?.length > 0 && <i className="fa-solid fa-angle-right ml-auto" />}
      </a>

      {children && children.length > 0 && (
        <div className="onhover-category-box grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 p-2">
          {children.map((childItem, index) => (
            <NavTopCategoryItemSubList
              key={index}
              item={childItem}
            ></NavTopCategoryItemSubList>
          ))}
        </div>
      )}
    </li>
  );
};

export default NavTopCategoryItem;