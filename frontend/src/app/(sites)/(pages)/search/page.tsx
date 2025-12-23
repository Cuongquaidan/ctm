
import VerticalProduct from '@/components/features/product/item/VerticalProduct';
import SortBox from '@/components/ui/button/SortBox'
import Pagination from '@/components/ui/Pagination';
import { getAllProducts } from '@/lib/api/product';
import React from 'react'

export const dynamic = 'force-dynamic';

async function page({ searchParams }: { searchParams: { s?: string } }) {
  const search = await searchParams;
  const s = search.s || '';
  const resultSearch = await getAllProducts({
    s
  });

  return (
    <>
      <section className="search-section pt-3">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-6 col-xl-8 mx-auto">
              <div className="title d-block text-center">
                <h2>Tìm kiếm Sản phẩm</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="/assets/eme2023/svg/leaf.svg#leaf"></use>
                  </svg>
                </span>
              </div>
              <form className="search-box d-block d-xl-none" action="https://ca-ctm.systems.com.vn/tim-kiem" method="get">
                <div className="input-group">
                  <input name="s" type="text" placeholder="Nhập tên sản phẩm..." />
                  <button className="btn theme-bg-color text-white m-0" type="submit">Tìm kiếm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="section-b-space shop-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-custome-12">
              <SortBox></SortBox>
            </div>
          </div>
          <div className='row'>
            {resultSearch.map((product, index) => (
              <div className='col-xxl-2 col-lg-3 col-md-4 mb-3' key={product.id} >
                <VerticalProduct product={product} index={index} className='product-box-4'></VerticalProduct>
              </div>
            ))}
          </div>
          <Pagination totalPages={5}></Pagination>
        </div>
      </section>
    </>
  )
}

export default page