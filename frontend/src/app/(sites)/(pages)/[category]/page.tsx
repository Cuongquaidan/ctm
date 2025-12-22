'use client'
import CategoryFilterItem from '@/components/features/product/filter/CategoryFilterItem'
import FilterBox from '@/components/features/product/filter/FilterBox'
import ListItem from '@/components/features/product/item/ListItem'
import VerticalProduct from '@/components/features/product/item/VerticalProduct'
import GridOption from '@/components/ui/button/GridOption'
import SortBox from '@/components/ui/button/SortBox'
import PriceRangeFilter from '@/components/ui/PriceRangeFilter'
import Pagination from '@/components/ui/Pagination'
import { getAllCategoriesNoPaginated, getCategoryByAlias } from '@/lib/api/category'
import { getAllProducts, getProductByAlias, getProductsByCategoryAlias, getProductsPaginated } from '@/lib/api/product'
import { PaginatedDataT } from '@/types/api.type'
import { CategoryT, ProductT } from '@/types/common.types'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

function CategoryPage() {
  const searchParams = useSearchParams()
  const params = useParams()
  const [products, setProducts] = useState<ProductT[]>([])
  const [pageTotal, setPageTotal] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [showGrid, setShowGrid] = useState<number>(4)
  const [categories, setCategories] = useState<CategoryT[]>([])
  const [cate, setCate] = useState<CategoryT | null>(null)

  // Lấy giá trị từ URL
  // const page = parseInt(searchParams.get('page') || '1')
  // const pageLen = parseInt(searchParams.get('pageLen') || '12')
  const sort = searchParams.get('sort') || 'most_popular'
  const fcatid = searchParams.getAll('fcatid')
  const fprice = searchParams.getAll('fprice')
  const frating = searchParams.getAll('frating')

  // Convert arrays to strings for dependency comparison
  const fcatidStr = fcatid.join(',')
  const fpriceStr = fprice.join(',')
  const fratingStr = frating.join(',')


  const handleFetchCategories = async () => {
    try {
      const resdata = await getAllCategoriesNoPaginated()
      const category = await getCategoryByAlias(params.category + "")
      setCategories(resdata)
      setCate(category)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const handleFetchProducts = async () => {
    try {
      setLoading(true)
      // console.log("fetchingggg ", page);


      const res = await getProductsByCategoryAlias(params.category + "", {
        // page: page,
        // pageLen: pageLen,
        sort: sort,
        ...(fcatid && { fcatid }),
        ...(fprice && { fprice }),
        ...(frating && { frating }),
      })

      if (res) {

        setProducts(res)
      }
    } catch (error) {
      console.error("Error fetching products:", error)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetchCategories()
  }, [params.category])

  useEffect(() => {
    if (cate?.id) {
      handleFetchProducts()
    }
  }, [sort, fcatidStr, fpriceStr, fratingStr, cate?.id])

  const bodyRef = useRef<HTMLDivElement>(null)
  const [isShow, setIsShow] = useState<boolean>(false)

  const handleClick = () => {
    if (bodyRef.current) {
      const scrollHeight = bodyRef.current.scrollHeight

      if (!isShow) {
        bodyRef.current.style.maxHeight = `${scrollHeight}px`
      } else {
        bodyRef.current.style.maxHeight = '0px'
      }
    }
    setIsShow(!isShow)
  }
  return (
    <section className="section-b-space shop-section">
      <div className="container-fluid-lg">
        <div className='row'>
          <div className='col-custome-3'>
            <FilterBox ></FilterBox>

          </div>
          <div className='col-custome-9'>
            <div className="show-button">
              <div className="top-filter-menu">
                <SortBox
                  handleClick={handleClick}
                />
                <GridOption
                  showGrid={showGrid}
                  setShowGrid={setShowGrid}
                ></GridOption>

              </div>
              {/* <div className='top-filter-menu-2'>
                <div className="sidebar-filter-menu" onClick={handleClick}>
                  <a ><i className="fa-solid fa-filter"></i> Filter Menu</a>
                </div>
                <div className="ms-auto d-flex  gap-2">
                  <div className='-mb-2'>
                    <SortBox></SortBox>
                  </div>
                  <GridOption
                    showGrid={showGrid}
                    setShowGrid={setShowGrid}
                  ></GridOption>
                </div>

              </div> */}
            </div>
            <div ref={bodyRef} style={{ maxHeight: 0, overflow: "hidden", padding: "0px", transition: "max-height 0.35s ease" }}>
              <div className='top-filter-category  show' >
                <div className="row g-sm-4 g-3">
                  <div className="col-xl-3 col-md-6">
                    <div className="category-title">
                      <h3>Pack Size</h3>
                    </div>
                    <ul className="category-list custom-padding custom-height">
                      {categories.map((category, index) => (
                        <CategoryFilterItem key={category.alias + index} category={category} />
                      ))}
                    </ul>

                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="category-title">
                      <h3>Pack Size</h3>
                    </div>
                    <PriceRangeFilter
                      min={0}
                      max={1000000}
                      step={10000}
                      defaultValue={[0, 1000000]}
                      onChange={(values) => {
                        console.log('Selected price range:', values);
                      }}
                    />
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="category-title">
                      <h3>Pack Size</h3>
                    </div>
                    <ul className="category-list custom-padding custom-height">
                      {categories.map((category, index) => (
                        <CategoryFilterItem key={category.alias + index} category={category} />
                      ))}
                    </ul>

                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="category-title">
                      <h3>Pack Size</h3>
                    </div>
                    <ul className="category-list custom-padding custom-height">
                      {categories.map((category, index) => (
                        <CategoryFilterItem key={category.alias + index} category={category} />
                      ))}
                    </ul>

                  </div>
                </div>
              </div>
            </div>


            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                <div className={`row g-sm-4 g-3 row-cols-xxl-${showGrid} row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section ${showGrid === 0 && 'list-style'}`}>
                  {products.map((product, index) => {
                    if (showGrid === 0) {
                      return (
                        <div key={product.id + index}>
                          <ListItem product={product} />
                        </div>
                      )
                    } else {
                      return (
                        <div key={product.id}>
                          <VerticalProduct
                            product={product}
                            index={index}
                            className='product-box-3 border-0 h-100 d-flex flex-column'
                            classNameImg='ar-2-1'
                          />
                        </div>
                      )
                    }
                  })}
                </div>

                {products.length === 0 && (
                  <div className="text-center py-5">
                    <p className="text-muted">Không có sản phẩm nào</p>
                  </div>
                )}

                {/* {pageTotal > 1 && (
                  <Pagination totalPages={pageTotal} />
                )} */}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryPage