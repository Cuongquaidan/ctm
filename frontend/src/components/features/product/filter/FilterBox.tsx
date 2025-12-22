"use client"
import { CategoryT } from '@/types/common.types'
import React, { useEffect, useState } from 'react'
import CustomDropdown from '@/components/ui/CustomDropdown'
import CategoryFilterItem from '@/components/features/product/filter/CategoryFilterItem'
import { priceRanges, ratings } from '@/lib/constants/constants'
import FilterPriceRangeItem from '@/components/features/product/filter/FilterPriceRangeItem'
import FilterRatingItem from "@/components/features/product/filter/FilterRatingItem";
import { getCategoriesByParentIdNoPaginated, getCategoryByAlias } from '@/lib/api/category'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import FilterSelectedItem from '@/components/features/product/filter/FilterSelectedItem'
import { getLabelByValue } from '@/lib/helper/ui'
import { motion } from "framer-motion";

function FilterBox() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = useParams()

  const [categories, setCategories] = useState<CategoryT[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: string | number | null }[]>([])

  const handleFetchCategories = async () => {
    const cate = await getCategoryByAlias(params.category + "");
    const resdata = await getCategoriesByParentIdNoPaginated(cate ? cate.id : 0);
    setCategories(resdata);
  }
  useEffect(() => {
    handleFetchCategories();
  }, [])
  // Lấy tất cả key-value từ URL khi URL thay đổi
  useEffect(() => {
    const fetchLabels = async () => {
      const selectedWithLabels: any[] = []

      // Xử lý fcatid (multiple)
      const fcatids = searchParams.getAll('fcatid')
      for (const value of fcatids) {
        const label = await getLabelByValue(categories, 'fcatid', value)
        selectedWithLabels.push({ label, key: `fcatid-${value}`, value, filterType: 'fcatid' })
      }

      // Xử lý fprice (multiple)
      const fprices = searchParams.getAll('fprice')
      for (const value of fprices) {
        const label = await getLabelByValue(categories, 'fprice', value)
        selectedWithLabels.push({ label, key: `fprice-${value}`, value, filterType: 'fprice' })
      }

      // Xử lý frating (multiple)
      const fratings = searchParams.getAll('frating')
      for (const value of fratings) {
        const label = await getLabelByValue(categories, 'frating', value)
        selectedWithLabels.push({ label, key: `frating-${value}`, value, filterType: 'frating' })
      }

      setSelected(selectedWithLabels)
    }

    fetchLabels()
  }, [searchParams, categories])
  const handleClearAllFilters = () => {
    setSelected([]);
    router.push(`/${params.category}`, { scroll: false });
  };


  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="left-box wow fadeIn">
      <div className="shop-left-sidebar filterBox">
        <div className="back-button">
          <h3><i className="fa-solid fa-arrow-left"></i> Back</h3>
        </div>
        <div className="filter-category">
          <div className="filter-title pb-0">
            <h2>Bộ lọc</h2>
            {searchParams?.size > 1 && <a className="clearAllFilter cursor-pointer" onClick={handleClearAllFilters}>Xóa tất cả</a>}
          </div>
          <ul>
            {
              selected.map(({ key, label, value, filterType }) => (
                <FilterSelectedItem
                  key={key}
                  value={value + ""}
                  label={label + ""}
                  filterType={filterType as 'fcatid' | 'fprice' | 'frating'}
                />
              ))
            }

          </ul>
        </div>
        <div className='accordion custome-accordion' id='accordionExample'>
          <CustomDropdown title='Danh mục' id='category' >
            <div className="category-list custom-padding custom-height">
              {categories && categories.map((category) => (
                <CategoryFilterItem key={category.id} category={category} />
              ))}
            </div>
          </CustomDropdown>
          <CustomDropdown title='Giá' id='price'>
            <div className='mb-2 d-flex flex-column align-items-start'>
              {priceRanges.map((priceRange) => (
                <FilterPriceRangeItem key={priceRange.value} label={priceRange.label} value={priceRange.value} />
              ))}
            </div>
          </CustomDropdown>
          <CustomDropdown title='Đánh giá' id='rating'>
            <ul className='category-list custom-padding'>
              {ratings.map((rating) => (
                <FilterRatingItem key={rating.value} label={rating.label} value={rating.value} />
              ))}
            </ul>
          </CustomDropdown>
          {/* <CustomDropdown title='Price' id='price'>
            <PriceRangeFilter
              min={0}
              max={1000000}
              step={10000}
              defaultValue={[0, 1000000]}
              onChange={(values) => {
                console.log('Selected price range:', values);
              }}
            />
          </CustomDropdown> */}
        </div>
      </div>
    </motion.div>
  )
}

export default FilterBox