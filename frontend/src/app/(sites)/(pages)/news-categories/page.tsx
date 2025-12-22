import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import NewsBlogSection from '@/components/features/news/NewsBlogSection'
import Pagination from '@/components/ui/Pagination'
import { buildURIWithQueries } from '@/lib/api/api'
import { getAllNewsCategories } from '@/lib/api/newsCategories'
import { NewsCategoryT } from '@/types/common.types'
import React from 'react'

interface NewsCategoriesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function NewsCategoriesPage({ searchParams }: NewsCategoriesPageProps) {
  const params = await searchParams
  const page = Number(params.page) || 1
  const pageLen = Number(params.pageLen) || 10

  const data = await getAllNewsCategories({ page, limit: pageLen })

  return (
    <>
      <BreadcrumbBackToHome current='Chuyên mục tin tức' title='Chuyên mục tin tức' />
      <section className="seller-grid-section mb-5">
        <div className="container-fluid-lg">
          <div className="row g-4">
            {data.data.map((item) => (
              <div key={item.id} className="col-12">
                <NewsBlogSection
                  uri={buildURIWithQueries("/news/getList")}
                  title={item.name}
                  description={item.description}
                  hasPagination={true}
                  wrapperStyle={{
                    border: "none"
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 0 },
                    576: { slidesPerView: 1, spaceBetween: 0 },
                    768: { slidesPerView: 2, spaceBetween: 15 },
                    1280: { slidesPerView: 3, spaceBetween: 20 },
                  }}
                />
              </div>
            ))}
          </div>
          <Pagination totalPages={data.pageTotal} />
        </div>
      </section>
    </>
  )
}

export default NewsCategoriesPage