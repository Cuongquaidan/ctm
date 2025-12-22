
import { getAllProducts } from '@/lib/api/product'
import ImageError from '@/components/ui/ImageError'
import "swiper/css";
import { BookT, CategoryT } from '@/types/common.types'
import FloatCategory from '@/components/features/category/FloatCategory';
import VerticalDigitalSectionV3 from '@/components/features/product/section/VerticalDigitalSectionV3';
import SearchByCategoryV2 from '@/components/features/category/SearchByCategoryV2';
import BlogSectionV2 from '@/components/features/news/NewsBlogSectionV2';
const bookData: BookT[] = [
  {
    id: "1",
    image: '/assets/eme2023/images/book/product/31.jpg',
    category: 'Biography',
    name: 'The Secret Life of Trees: A Memoir of the Forest',
    author: 'Peter Wohlleben',
    price: 55.00,
    isBestSeller: true,

  },
  {
    id: "2",
    image: '/assets/eme2023/images/book/product/32.jpg',
    category: 'Fiction',
    name: 'The Midnight Library: A Novel',
    author: 'Matt Haig',
    price: 42.50,

  },
  {
    id: "3",
    image: '/assets/eme2023/images/book/product/33.jpg',
    category: 'Self-Help',
    name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    price: 35.99,

  },
  {
    id: "4",
    image: '/assets/eme2023/images/book/product/34.jpg',
    category: 'Thriller',
    name: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    price: 48.00,

  },
  {
    id: "5",
    image: '/assets/eme2023/images/book/product/35.jpg',
    category: 'Fantasy',
    name: 'A Game of Thrones (A Song of Ice and Fire, Book 1)',
    author: 'George R.R. Martin',
    price: 70.00,

  },
  {
    id: "6",
    image: '/assets/eme2023/images/book/product/36.jpg',
    category: 'Science',
    name: 'A Brief History of Time',
    author: 'Stephen Hawking',
    price: 65.00,
    isBestSeller: true,

  },
  {
    id: "7",
    image: '/assets/eme2023/images/book/product/37.jpg',
    category: 'Cooking',
    name: 'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking',
    author: 'Samin Nosrat',
    price: 80.00,

  },
  {
    id: "8",
    image: '/assets/eme2023/images/book/product/38.jpg',
    category: 'History',
    name: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    price: 58.50,

  },
  {
    id: "9",
    image: '/assets/eme2023/images/book/product/39.jpg',
    category: 'Poetry',
    name: 'Milk and Honey',
    author: 'Rupi Kaur',
    price: 25.00,
    isBestSeller: true,

  },
  {
    id: "10",
    image: '/assets/eme2023/images/book/product/40.jpg',
    category: 'Horror',
    name: 'It',
    author: 'Stephen King',
    price: 60.99,

  },
  {
    id: "11",
    image: '/assets/eme2023/images/book/product/41.jpg',
    category: 'Finance',
    name: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    price: 75.00,

  },
  {
    id: "12",
    image: '/assets/eme2023/images/book/product/42.jpg',
    category: 'Romance',
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 38.25,

  }
];
const categories: {
  name: string;
  link: string;
  image: string;
  slug: string;
}[] = [
    {
      name: "Decorations",
      link: "shop-left-sidebar.html",
      image: "/assets/eme2023/images/furniture/icon/decorations.svg",
      slug: "decorations",
    },
    {
      name: "Bed linen",
      link: "shop-left-sidebar.html",
      image: "/assets/eme2023/images/furniture/icon/pillows.svg",
      slug: "bed-linen",
    },
    {
      name: "Cushions",
      link: "shop-left-sidebar.html",
      image: "/assets/eme2023/images/furniture/icon/cushions.svg",
      slug: "cushions",
    },
    {
      name: "Blankets",
      link: "shop-left-sidebar.html",
      image: "/assets/eme2023/images/furniture/icon/blankets.svg",
      slug: "blankets",
    },
    {
      name: "Giftwraps",
      link: "shop-left-sidebar.html",
      image: "/assets/eme2023/images/furniture/icon/gift.svg",
      slug: "giftwraps",
    },
    {
      name: "Sleepwear",
      link: "shop-left-sidebar.html",
      image: "/assets/eme2023/images/furniture/icon/sleepware.svg",
      slug: "sleepwear",
    },
    {
      name: "Room Fragrance",
      link: "shop-left-sidebar.html",
      image: "/assets/eme2023/images/furniture/icon/room-fragrance.svg",
      slug: "room-fragrance",
    },
    {
      name: "Servingware & Tableware",
      link: "shop-left-sidebar.html",
      image: "/assets/eme2023/images/furniture/icon/cushions.svg",
      slug: "servingware-and-tableware",
    },
    {
      name: "Bath & Shower",
      link: "shop-left-sidebar.html",
      image: "/assets/eme2023/images/furniture/icon/shower.svg",
      slug: "bath-and-shower",
    },
  ];
export type DigitalProductT = {
  id: string;
  imageSrc: string; // Đường dẫn đến ảnh sản phẩm
  title: string;
  author: string;
  category: string; // Thể loại (ví dụ: 'Music', 'Graphics', 'HTML')
  price: number;
  sales: number; // Số lượng bán ra
  rating: number; // Điểm đánh giá (ví dụ: 4.9)
  reviewCount: string; // Số lượng đánh giá hoặc giá trị hiển thị (ví dụ: '(4.9)', '(15)')
  numOfRatings?: number; // Số lượng đánh giá (nếu cần hiển thị riêng)
  isTrending?: boolean; // Tùy chọn: Nếu có tag "Trending"
  productPageLink: string; // Link đến trang chi tiết sản phẩm

};
const digitalProductsData: DigitalProductT[] = [
  {
    id: 'D001',
    imageSrc: '/assets/eme2023/images/digital/theme/1.jpg',
    title: 'Mido - Musical app',
    author: 'Hooli',
    category: 'Music',
    price: 36.00,
    sales: 150,
    rating: 4.9,
    reviewCount: '(4.9)',
    numOfRatings: 150,
    isTrending: true,
    productPageLink: 'product-digital.html',
  },
  {
    id: 'D002',
    imageSrc: '/assets/eme2023/images/digital/theme/2.jpg',
    title: 'Criphin - Contemporary Business Keynote Template',
    author: 'Criphin',
    category: 'Graphics',
    price: 52.00,
    numOfRatings: 168,
    sales: 168,
    rating: 4.8,
    reviewCount: '(4.8)',
    productPageLink: 'product-digital.html',
  },
  {
    id: 'D003',
    imageSrc: '/assets/eme2023/images/digital/theme/3.jpg',
    title: 'Maxico - Kids Happiness',
    author: 'Maxico',
    category: 'HTML',
    numOfRatings: 36,
    price: 54.00,
    sales: 36,
    rating: 4.7,
    reviewCount: '(4.7)',
    productPageLink: 'product-digital.html',
  },
  {
    id: 'D004',
    imageSrc: '/assets/eme2023/images/digital/theme/4.jpg',
    title: 'Real Paint FX - Photoshop Add-On',
    author: 'pictureEdit',
    category: 'Photo Effect',
    price: 68.00,
    numOfRatings: 15,
    sales: 20,
    rating: 4.0, // 4 sao fill, 1 sao trống
    reviewCount: '(15)', // Giá trị có vẻ là số lượng review
    productPageLink: 'product-digital.html',
  },
  {
    id: 'D005',
    imageSrc: '/assets/eme2023/images/digital/theme/5.jpg',
    title: 'Fuzzy - Ecommerce PWA Mobile HTML Template',
    author: 'PixelStrap',
    category: 'PWA',
    price: 19.00,
    sales: 41,
    rating: 4.2, // 4 sao fill, 1 sao trống
    reviewCount: '(4.2)',
    numOfRatings: 41,
    productPageLink: 'product-digital.html',
  },
  {
    id: 'D006',
    imageSrc: '/assets/eme2023/images/digital/theme/6.jpg',
    title: 'Design Factory - Architecture Figma Template',
    author: 'Design Art',
    category: 'Figma',
    price: 35.00,
    sales: 15,
    rating: 3.0, // 3 sao fill, 2 sao trống
    reviewCount: '(10)',
    numOfRatings: 10,
    productPageLink: 'product-digital.html',
  },
  {
    id: 'D007',
    imageSrc: '/assets/eme2023/images/digital/theme/7.jpg',
    title: 'Goapp - Upcoming Video Announcements',
    author: 'PixelStrap',
    category: 'Admin',
    price: 16.00,
    sales: 15,
    rating: 3.7, // 3 sao fill, 2 sao trống (giả định)
    reviewCount: '(3.7)',
    numOfRatings: 25,
    productPageLink: 'product-digital.html',
  },
  {
    id: 'D008',
    imageSrc: '/assets/eme2023/images/digital/theme/8.jpg',
    title: 'Megabot - AI Writer & Copywriting Landing Page HTML Template',
    author: 'PixelStrap',
    category: 'HTML',
    price: 18.00,
    numOfRatings: 35,
    sales: 370,
    rating: 5.0,
    reviewCount: '(35)',
    productPageLink: 'product-digital.html',
  },
];

async function page() {
  let allProducts = [];

  try {
    allProducts = await getAllProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>

      <section className="home-search-full pt-0 overflow-hidden gradient-home">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="slider-animate">
                <div>
                  <div className="home-contain rounded-0 p-0"
                    style={{
                      backgroundImage: "url(/assets/eme2023/images/home-bg.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                    }}
                  >

                    <ImageError src="/assets/eme2023/images/home-bg.jpg" width={1920} height={1080} alt="Home Background" className="img-fluid bg-img blur-up lazyload bg-top d-none" />
                    <div className="home-detail p-center text-center home-overlay position-relative">
                      <div>
                        <div className="content">
                          <h1 style={{
                            color: "white"
                          }}>Modern Themes & Website Templates for any project</h1>
                          <h3
                            style={{
                              color: "rgba(255,255,255,.6)",
                              lineHeight: 1.4,
                            }}
                          >Discover thousands of digital products & downloads</h3>
                          <div className="search-box input-group">
                            <input type="search" className="form-control"
                              placeholder="I'm searching for..." />
                            <div className="input-group-text" style={{
                              backgroundColor: "white"
                            }}>
                              <select className="form-select "
                                style={{
                                  borderRadius: 0,
                                  height: "100%",
                                  border: "unset",
                                  fontWeight: 500,
                                  fontSize: "15px",
                                }}
                              >
                                <option >Select Category</option>
                                <option value="1">Themes & Templates</option>
                                <option value="2">Scripts & Code</option>
                                <option value="3">Graphics & Design</option>
                                <option value="4">Ebooks & Documents</option>
                                <option value="5">Music & Audio</option>
                                <option value="6">Videos & Clips</option>
                                <option value="7">Premium & Business</option>
                                <option value="8">Web Template</option>
                                <option value="9">Illustrations</option>
                                <option value="10">Mobile app</option>
                                <option value="11">Web app</option>
                                <option value="12">3D illustration</option>
                                <option value="13">Icon</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <FloatCategory></FloatCategory>
      <section className="product-section mt-2">
        <div className="container-fluid-lg">
          <VerticalDigitalSectionV3 initialData={digitalProductsData}
            title="Top items"
            n={2}
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
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}

          ></VerticalDigitalSectionV3>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <SearchByCategoryV2
                initialData={categories}
                title='Browse by category'
                hasIcon={false}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 10
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 10
                  },
                  1280: {
                    slidesPerView: 8,
                    spaceBetween: 10
                  }
                }}

              ></SearchByCategoryV2>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-sec section-b-space"
        style={{
          backgroundImage: "url(https://admin.pixelstrap.com/cuba/assets/images/landing/home-bg.jpg)",
          padding: "calc(44px + 56 * (100vw - 320px) / 1600) 0",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-fluid-lg">
          <div className="row g-3">
            <div className="col-xxl-3 col-lg-4">
              <div className="feature-title"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  marginBottom: 0,
                }}
              >
                <div>
                  <h2 style={{
                    color: "#fff"
                  }}>Featured templates</h2>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, .8)",
                      fontSize: "calc(14px + 3 * (100vw - 320px) / 1600)",
                      marginBottom: 0,
                      marginTop: "12px",
                      lineHeight: 1.5,
                    }}
                  >Every week, our staff personally hand-pick some of the best new website themes from our
                    collection.</p>
                  <button
                    className="btn theme-bg-color text-light mt-sm-4 mt-3">View all <i
                      data-feather="arrow-right"></i></button>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-lg-8">
              <VerticalDigitalSectionV3 initialData={digitalProductsData}
                n={1}

                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  }
                }}

              ></VerticalDigitalSectionV3>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section mt-2">
        <div className="container-fluid-lg">
          <VerticalDigitalSectionV3 initialData={digitalProductsData}
            title="Top items"
            n={2}
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
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
            categories={categories}

          ></VerticalDigitalSectionV3>
        </div>
      </section>
      <BlogSectionV2></BlogSectionV2>

    </>
  )
}

export default page