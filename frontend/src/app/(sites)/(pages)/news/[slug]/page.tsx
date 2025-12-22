'use client'

import BlogItemHorizontal from '@/components/features/news/NewItemHorizontal';
import HorizontalProductNoAction from '@/components/features/product/item/HorizontalProductNoAction';
import BreadcrumbBackToHome from '@/components/features/breadcrumb/BreadcrumbBackToHome'
import { formatVietnameseDateTime } from '@/lib/helper';
import ImageError from '@/components/ui/ImageError';
import React, { useEffect, useState } from 'react'
import { getFeaturedNews, getNewsByAlias } from '@/lib/api/new';
import { getFeaturedProductsPaginated } from '@/lib/api/product';
import { PostItemT, ProductT } from '@/types/common.types';
import { IMAGES_BASE_URL } from '@/lib/constants/constants';

function Page({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string>('')
  const [post, setPost] = useState<PostItemT | null>(null)
  const [allPosts, setAllPosts] = useState<PostItemT[]>([])
  const [featuredProducts, setFeaturedProducts] = useState<ProductT[]>([])
  const [isPostsOpen, setIsPostsOpen] = useState(true)
  const [isProductsOpen, setIsProductsOpen] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params
      setSlug(resolvedParams.slug)
      const postData = await getNewsByAlias(resolvedParams.slug)
      const allPostsData = (await getFeaturedNews()).data
      const featuredProductsData = (await getFeaturedProductsPaginated()).data
      setPost(postData)
      setAllPosts(allPostsData)
      setFeaturedProducts(featuredProductsData)
    }
    fetchData()
  }, [params])

  if (!post) return null

  return (
    <>
      <BreadcrumbBackToHome current='' title={post.name}></BreadcrumbBackToHome >

      <section className="blog-section section-b-space product-section-2">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 col-lg-5 d-lg-block d-none">
              <div className="left-sidebar-box wow fadeIn">
                <div className="accordion left-accordion-box mt-0" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        className={`accordion-button ${!isPostsOpen ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => setIsPostsOpen(!isPostsOpen)}
                        aria-expanded={isPostsOpen}
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Bài viết nổi bật
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className={`accordion-collapse collapse ${isPostsOpen ? 'show' : ''}`}
                      aria-labelledby="panelsStayOpen-headingOne"
                      style={{
                        visibility: 'visible'
                      }}
                    >
                      <div className="accordion-body pt-0">
                        <div className="recent-post-box">
                          {allPosts.slice(0, 5).map((item, index) => (
                            <BlogItemHorizontal key={index} item={item}></BlogItemHorizontal>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                      <button
                        className={`accordion-button ${!isProductsOpen ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        aria-expanded={isProductsOpen}
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Sản phẩm nổi bật
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className={`accordion-collapse collapse ${isProductsOpen ? 'show' : ''}`}
                      aria-labelledby="panelsStayOpen-headingFour"
                      style={{
                        visibility: 'visible'
                      }}
                    >
                      <div className="accordion-body">
                        <ul className=" border-0 p-0">
                          {
                            featuredProducts.slice(0, 5).map((product, index) => (
                              <li key={index}>
                                <HorizontalProductNoAction product={product}></HorizontalProductNoAction>
                              </li>

                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-7 ratio_50">
              <div className="blog-detail-image rounded-3 mb-4 wow fadeIn">
                <ImageError width={1200} height={600} src={post.image !== null ? IMAGES_BASE_URL + "/" + post.image : '/images/logo.png'} data-src={post.image !== null ? IMAGES_BASE_URL + "/" + post.image : '/images/logo.png'} className="bg-img lazyload"
                  style={{
                    aspectRatio: 2 / 1
                  }}
                  alt={post.meta_title} />
                <div className="blog-image-contain">
                  <ul className="contain-list">
                    <li><a className="text-body" href="https://ca-ctm.systems.com.vn/tin-tuc/dac-san-vung-mien">Đặc sản vùng miền</a></li>
                    <li><a className="text-body" href="https://ca-ctm.systems.com.vn/tin-tuc/che-do-an-uong">Chế độ ăn uống</a></li>
                  </ul>
                  <h2>{post.name}</h2>
                  <ul className="contain-comment-list">
                    <li>
                      <div className="user-list">
                        <i className="fa-regular fa-user"></i>
                        <span>{post?.author || "Chua cap nhat"}</span>
                      </div>
                    </li>
                    <li>
                      <div className="user-list">
                        <i className="fa-regular fa-calendar"></i>
                        <span>{formatVietnameseDateTime(post.publish_at)}</span>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="blog-detail-contain">
                {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }}></div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page