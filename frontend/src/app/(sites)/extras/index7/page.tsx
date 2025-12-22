
import { getAllProducts } from '@/lib/api/product'
import ImageError from '@/components/ui/ImageError'
import "swiper/css";
import { data } from '@/assets/data/Home'
import CategoryMenu from '@/components/features/category/CategoryMenu'
import { CategoryT, CategoryTV0 } from '@/types/common.types'
import VerticalProductHoverSectionV3 from '@/components/features/product/section/VerticalProductHoverSectionV3';

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
      <section className="home-search-full pt-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="slider-animate">
                <div>
                  <div className="home-contain rounded-0 p-0 w-100"
                    style={{
                      aspectRatio: "1080/1080"
                    }}
                  >
                    <ImageError src="/assets/eme2023/images/vegetable/bg-img.jpg"
                      className="img-fluid bg-img    lazyload bg-top h-100 w-100" alt="honeynet" width={1920} height={1080} />
                    <div className="home-detail p-center text-center home-overlay ">
                      <div>
                        <div className="content">
                          <h1>Get your grocery in 25 minutes</h1>
                          <h3>Better ingredients, better food, and beverages, at low prices</h3>
                          <div className="search-box">
                            <input type="search" className="form-control"
                              placeholder="I'm searching for..." />
                            <i data-feather="search"></i>
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
      </section>
      <section className="section-b-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 col-lg-4 d-none d-lg-block">
              <CategoryMenu initialData={categories} title="Danh mục sản phẩm" ></CategoryMenu>

            </div>
            <div className="col-xxl-9 col-lg-8">
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
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 5,
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
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 5,
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