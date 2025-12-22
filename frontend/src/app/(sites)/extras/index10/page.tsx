
import { getAllProducts } from '@/lib/api/product'
import ImageError from '@/components/ui/ImageError'
import "swiper/css";
import { BookT, CategoryTV0 } from '@/types/common.types'
import ContactMail from '@/components/ui/ContactMail';
import SliderCategory from '@/components/features/category/SliderCategory';
import SimpleVerticalProductHoverSectionV2 from '@/components/features/product/section/SimpleVerticalProductHoverSectionV2';
import HorizontalNItemsSectionV2 from '@/components/features/product/section/HorizontalNItemsSectionV2';
import BookCategory from '@/components/features/category/BookCategory';
import VerticalBookProductHoverSectionV2 from '@/components/features/product/section/VerticalBookProductHoverSectionV2';
import HorizontalItemNoActionSection from '@/components/features/product/section/HorizontalItemNoActionSection';
import { data } from '@/assets/data/Home';
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
const categories: CategoryTV0[] = [
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

async function page() {
  let allProducts = [];

  try {
    allProducts = await getAllProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>

      <section className="home-section-2 home-section-bg pt-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="slider-animate">
                <div>
                  <div className="home-contain rounded-0 p-0"
                    style={{
                      backgroundImage: "url(/assets/eme2023/images/fashion/home-banner/1.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      display: "block",
                      height: "100%"
                    }}
                  >

                    <ImageError src="/assets/eme2023/images/fashion/banner/1.jpg" className='bg-img lazyload d-none' layout="fill" alt="Banner Image" />
                    <div className="home-detail home-big-space p-center-left home-overlay position-relative">
                      <div className="container-fluid-lg">
                        <div>
                          <h6 className="ls-expanded text-uppercase text-danger">Weekend Special offer
                          </h6>
                          <h1 className="heding-2">Premium Quality</h1>
                          <h5 className="text-content">Fresh & Top Quality Dry Fruits are available here!
                          </h5>
                          <button
                            className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto">Shop
                            Now <i className="fa-solid fa-arrow-right icon"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookCategory></BookCategory>
      <section className="product-section ">
        <div className="container-fluid-lg">
          <VerticalBookProductHoverSectionV2
            initialData={bookData} title='Top Selling Items'
            n={2}
            hasIcon={false}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20
              }
            }}
            wrapperStyle={{
              border: "none"
            }}
          ></VerticalBookProductHoverSectionV2>
        </div>
      </section>
      <section className="offer-section sale-banner"


      >
        <div className="container-fluid-lg ">
          <div className="row ">
            <div className="col-12 "
              style={{
                position: "relative",
                height: "200px"
              }}
            >
              <ImageError
                src="/assets/eme2023/images/book/banner/2.jpg" alt="Banner Image" layout="fill" className=" w-100" />
            </div>
          </div>
        </div>
      </section>
      <section className="top-selling-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-9 col-lg-8 d-flex">
              <div className="col-xxl-4  col-xl-6 col-lg-12 col-md-4 col-sm-6">
                <HorizontalItemNoActionSection
                  initialData={data}
                  n={4}
                  wrapperStyle={{
                    border: "none"
                  }}
                  hasIcon={false}
                  hasUnderline={true}
                  title='Trending'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 0
                    }
                  }}
                ></HorizontalItemNoActionSection>
              </div>
              <div className="col-xxl-4 col-xl-6  d-xl-block d-block d-lg-none col-md-4 col-sm-6">
                <HorizontalItemNoActionSection
                  initialData={data}
                  n={4}
                  wrapperStyle={{
                    border: "none"
                  }}
                  hasIcon={false}
                  hasUnderline={true}
                  title='Recently Added'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 0
                    }
                  }}
                ></HorizontalItemNoActionSection>
              </div>
              <div className="col-xxl-4 d-xxl-block  d-lg-none d-block col-md-4 col-sm-6">
                <HorizontalItemNoActionSection
                  initialData={data}
                  n={4}
                  hasIcon={false}
                  hasUnderline={true}
                  title='Top rated'
                  wrapperStyle={{
                    border: "none"
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 0
                    }
                  }}
                ></HorizontalItemNoActionSection>
              </div>

            </div>
            <div className="col-xxl-3 col-lg-4 d-lg-block d-none">
              <div className="ratio_156"
                style={{
                  height: "100%",
                }}
              >
                <div className="banner-contain-2 hover-effect"
                  style={{
                    backgroundImage: "url(/assets/eme2023/images/fashion/banner/3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    height: "100%"
                  }}
                >
                  <ImageError src="/assets/eme2023/images/fashion/banner/3.jpg" className="bg-img d-none lazyload" alt="Banner Image" layout="fill"></ImageError>
                  <div className="banner-detail-2 p-bottom-center text-center home-p-medium">
                    <div>
                      <h2 className="text-qwitcher">Passion Meet</h2>
                      <h3>PERFECTION</h3>
                      <button className="btn btn-md">Shop
                        Now <i className="fa-solid fa-arrow-right icon"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
      <section className="product-section ">
        <div className="container-fluid-lg">
          <VerticalBookProductHoverSectionV2
            initialData={bookData} title='Top Selling Items'
            n={1}
            hasIcon={false}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20
              }
            }}
            wrapperStyle={{
              border: "none"
            }}
          ></VerticalBookProductHoverSectionV2>
        </div>
      </section>
      <section className="section-t-space mb-5">
        <div className="container-fluid-lg">

          <ContactMail></ContactMail>
        </div>
      </section>



    </>
  )
}

export default page