
import { getAllProducts } from '@/lib/api/product'
import ImageError from '@/components/ui/ImageError'
import "swiper/css";
import { data } from '@/assets/data/Home'
import CategoryMenu from '@/components/features/category/CategoryMenu'
import { CategoryT, CategoryTV0 } from '@/types/common.types'
import VerticalProductHoverSectionV3 from '@/components/features/product/section/VerticalProductHoverSectionV3';
import Logo from '@/components/features/header/Logo';

const categories: CategoryTV0[] = [
  {
    name: "Vegetables & Fruit",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/vegetable.svg",
    slug: "vegetables-and-fruit",
    children: [],
  },
  {
    name: "Beverages",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/cup.svg",
    slug: "beverages",
    children: [],
  },
  {
    name: "Meats & Seafood",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/meats.svg",
    slug: "meats-and-seafood",
    children: [],
  },
  {
    name: "Breakfast",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/breakfast.svg",
    slug: "breakfast",
    children: [],
  },
  {
    name: "Frozen Foods",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/frozen.svg",
    slug: "frozen-foods",
    children: [],
  },
  {
    name: "Milk & Dairies",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/milk.svg",
    slug: "milk-and-dairies",
    children: [],
  },
  {
    name: "Pet Food",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/pet.svg",
    slug: "pet-food",
    children: [],
  },
  {
    name: "Biscuits & Snacks",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/biscuit.svg",
    slug: "biscuits-and-snacks",
    children: [],
  },
  {
    name: "Grocery & Staples",
    link: "shop-left-sidebar.html",
    image: "/assets/eme2023/svg/1/grocery.svg",
    slug: "grocery-and-staples",
    children: [],
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
      <section className="product-section pt-0">
        <div className="container-fluid p-0">
          <div className="custom-row">
            <div className="sidebar-col">
              <div className="category-menu-sidebar">
                <div className='px-10 py-2'>
                  <Logo></Logo>

                </div>
                <CategoryMenu initialData={categories} ></CategoryMenu>
              </div>
            </div>
            <div className="content-col">
              <div className="section-b-space">
                <div className="row g-md-4 g-3 "

                >
                  <div className="col-xxl-8 col-xl-12 col-md-7">
                    <div className="banner-contain hover-effect"
                      style={{
                        backgroundImage: "url(/assets/eme2023/images/grocery/banner/11.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                        minHeight: "285px",
                      }}
                    >
                      <ImageError width={1024} height={294} src="/assets/eme2023/images/grocery/banner/11.jpg" alt="Banner 11" className='bg-img lazyload d-none' />
                      <div className="banner-details p-center-left p-sm-5 p-4">
                        <div>
                          <h2 className="text-kaushan fw-normal orange-color">Get Ready To</h2>
                          <h3 className="mt-2 mb-3 text-white">TAKE ON THE DAY!</h3>
                          <p className="text-content banner-text text-white opacity-75 d-md-block d-none">
                            In publishing and graphic design, Lorem ipsum is a placeholder text
                            commonly used to demonstrate.</p>
                          <button
                            className="btn btn-animation btn-sm mend-auto">Shop Now <i
                              className="fa-solid fa-arrow-right icon"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-4 col-xl-12 col-md-5">
                    <div className="banner-contain hover-effect h-100"
                      style={{
                        backgroundImage: "url(/assets/eme2023/images/grocery/banner/12.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                        minHeight: "285px",
                      }}
                    >
                      <ImageError width={502} height={294} src="/assets/eme2023/images/grocery/banner/12.jpg" className="bg-img  lazyload d-none"
                        alt="honey net" />
                      <div className="banner-details p-center-left p-4 h-100">
                        <div>
                          <h2 className="text-kaushan fw-normal orange-color">Organic</h2>
                          <h3 className="mt-2 mb-3">Fresh</h3>
                          <p className="text-content banner-text w-100">Super Offer to 50%
                            Off</p>
                          <button
                            className="btn btn-animation btn-sm mend-auto">Shop Now <i
                              className="fa-solid fa-arrow-right icon"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <VerticalProductHoverSectionV3 initialData={data} n={2}
                hasIcon={false}
                title='Food Cupboard'
                description='A virtual assistant collects the products from your list'
                wrapperStyle={{
                  border: "none",
                  padding: "5px"
                }}
                classOfItem='rounded border'
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                }}
              ></VerticalProductHoverSectionV3>
              <VerticalProductHoverSectionV3 initialData={data} n={2}
                hasIcon={false}
                title='Food Cupboard'
                description='A virtual assistant collects the products from your list'
                wrapperStyle={{
                  border: "none",
                  padding: "5px"
                }}
                classOfItem='rounded border'
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                }}
              ></VerticalProductHoverSectionV3>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default page