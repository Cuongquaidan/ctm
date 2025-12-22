"use client"
import React, { useEffect, useState } from 'react'
import NavTopCategoryItem from '@/components/features/header/NavTopCategoryItem'
import { NavTopCategoryListData } from '@/assets/data/NavTopData'
import { CategoryT } from '@/types/common.types';
import { apiFetchSites } from '@/lib/api/api';
import { findDescendantsRecursive } from '@/lib/helper';

interface CateT {
  item: CategoryT;
  children: CateT[];
}

function NavTopCategoryDropdown() {
  const [categoryData, setCategoryData] = useState<CateT[]>();
  const handleFetchData = async () => {
    const resdata = await apiFetchSites("/categories/getList?isPaginated=false")
    const filteredData = resdata.filter((item: CategoryT) => item.parent_id === 0);
    const transformedData = filteredData.map((item: CategoryT) => findDescendantsRecursive(item.id, resdata));

    setCategoryData(transformedData);
  }
  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <div className="category-dropdown hidden lg:block">
      <div className="category-title">
        <h5>Danh mục</h5>
        <div className="btn p-0 close-button text-content">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <ul className="category-list">
        {categoryData?.map((item, index) => (
          <NavTopCategoryItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default NavTopCategoryDropdown