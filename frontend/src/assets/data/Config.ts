export const menuData = [
    {
        title: "Home",
        children: [
            { title: "Kartshop", href: "index.html" },
            { title: "Sweetshop", href: "index-2.html" },
            { title: "Organic", href: "index-3.html" },
            { title: "Supershop", href: "index-4.html" },
            { title: "Classic shop", href: "index-5.html" },
            { title: "Furniture", href: "index-6.html" },
            { title: "Search Oriented", href: "index-7.html" },
            { title: "Category Focus", href: "index-8.html" },
            { title: "Fashion", href: "index-9.html" },
            { title: "Book", href: "index-10.html" },
            { title: "Digital", href: "index-11.html" },
        ],
    },
    {
        title: "Shop",
        children: [
            {
                title: "Shop Category Slider",
                href: "shop-category-slider.html",
            },
            { title: "Shop Category Sidebar", href: "shop-category.html" },
            { title: "Shop Banner", href: "shop-banner.html" },
            { title: "Shop Left Sidebar", href: "shop-left-sidebar.html" },
            { title: "Shop List", href: "shop-list.html" },
            { title: "Shop Right Sidebar", href: "shop-right-sidebar.html" },
            { title: "Shop Top Filter", href: "shop-top-filter.html" },
        ],
    },
    {
        title: "Product",
        isMega: true,
        children: [
            {
                header: "Product Pages",
                items: [
                    {
                        title: "Product Thumbnail",
                        href: "product-left-thumbnail.html",
                    },
                    { title: "Product Images", href: "product-4-image.html" },
                    { title: "Product Slider", href: "product-slider.html" },
                    { title: "Product Sticky", href: "product-sticky.html" },
                    {
                        title: "Product Accordion",
                        href: "product-accordion.html",
                    },
                    { title: "Product Tab", href: "product-circle.html" },
                    { title: "Product Digital", href: "product-digital.html" },
                ],
                subHeader: "Product Features",
                subItems: [
                    {
                        title: "Bundle (Cross Sale)",
                        href: "product-circle.html",
                    },
                    {
                        title: "Hot Stock Progress",
                        href: "product-left-thumbnail.html",
                        isNew: true,
                    },
                    { title: "SOLD OUT", href: "product-sold-out.html" },
                    {
                        title: "Sale Countdown",
                        href: "product-circle.html",
                        isHot: true,
                    },
                ],
            },
            {
                header: "Product Variants Style",
                items: [
                    {
                        title: "Variant Rectangle",
                        href: "product-rectangle.html",
                    },
                    {
                        title: "Variant Circle",
                        href: "product-circle.html",
                        isNew: true,
                    },
                    {
                        title: "Variant Image Swatch",
                        href: "product-color-image.html",
                        isNew: true,
                    },
                    { title: "Variant Color", href: "product-color.html" },
                    {
                        title: "Variant Radio Button",
                        href: "product-radio.html",
                        isHot: true,
                    },
                    {
                        title: "Variant Dropdown",
                        href: "product-dropdown.html",
                    },
                ],
                subHeader: "Product Features",
                subItems: [
                    {
                        title: "Sticky Checkout",
                        href: "product-left-thumbnail.html",
                    },
                    { title: "Dynamic Checkout", href: "product-dynamic.html" },
                    { title: "Secure Checkout", href: "product-sticky.html" },
                    {
                        title: "Active Product view",
                        href: "product-bundle.html",
                    },
                    {
                        title: "Active Last Orders",
                        href: "product-bundle.html",
                    },
                ],
            },
            {
                header: "Product Features",
                items: [
                    { title: "Product Simple", href: "product-image.html" },
                    {
                        title: "Product Classified",
                        href: "product-rectangle.html",
                        isNew: true,
                    },
                    {
                        title: "Size Chart",
                        href: "product-size-chart.html",
                        isNew: true,
                    },
                    {
                        title: "Delivery & Return",
                        href: "product-size-chart.html",
                    },
                    {
                        title: "Product Review",
                        href: "product-size-chart.html",
                    },
                    { title: "Ask an Expert", href: "product-expert.html" },
                ],
                subHeader: "Product Features",
                subItems: [
                    {
                        title: "Product Tags",
                        href: "product-bottom-thumbnail.html",
                    },
                    { title: "Store Information", href: "product-image.html" },
                    {
                        title: "Social Share",
                        href: "product-image.html",
                        isHot: true,
                    },
                    {
                        title: "Related Products",
                        href: "product-left-thumbnail.html",
                        isHot: true,
                    },
                    {
                        title: "Wishlist & Compare",
                        href: "product-right-thumbnail.html",
                    },
                ],
            },
            {
                image: "../assets/images/isMega-menu.png",
                link: "product-circle.html",
            },
        ],
    },
    {
        title: "Mega Menu",
        isMega: true,
        children: [
            {
                header: "Daily Vegetables",
                items: [
                    "Beans & Brinjals",
                    "Broccoli & Cauliflower",
                    "Chilies, Garlic",
                    "Vegetables & Salads",
                    "Gourd, Cucumber",
                    "Herbs & Sprouts",
                    "Lettuce & Leafy",
                ].map((name) => ({
                    title: name,
                    href: "shop-left-sidebar.html",
                })),
            },
            {
                header: "Baby Tender",
                items: [
                    "Beans & Brinjals",
                    "Broccoli & Cauliflower",
                    "Chilies, Garlic",
                    "Vegetables & Salads",
                    "Gourd, Cucumber",
                    "Potatoes & Tomatoes",
                    "Peas & Corn",
                ].map((name) => ({
                    title: name,
                    href: "shop-left-sidebar.html",
                })),
            },
            {
                header: "Exotic Vegetables",
                items: [
                    "Asparagus & Artichokes",
                    "Avocados & Peppers",
                    "Broccoli & Zucchini",
                    "Celery, Fennel & Leeks",
                    "Chilies & Lime",
                ].map((name) => ({
                    title: name,
                    href: "shop-left-sidebar.html",
                })),
            },
        ],
    },
    {
        title: "Blog",
        children: [
            { title: "Blog Detail", href: "blog-detail.html" },
            { title: "Blog Grid", href: "blog-grid.html" },
            { title: "Blog List", href: "blog-list.html" },
        ],
    },
    {
        title: "Pages",
        children: [
            {
                title: "Email Template",
                children: [
                    {
                        title: "Abandonment",
                        href: "../email-templete/abandonment-email.html",
                    },
                    {
                        title: "Offer Template",
                        href: "../email-templete/offer-template.html",
                    },
                    {
                        title: "Order Success",
                        href: "../email-templete/order-success.html",
                    },
                    {
                        title: "Reset Password",
                        href: "../email-templete/reset-password.html",
                    },
                    {
                        title: "Welcome Template",
                        href: "../email-templete/welcome.html",
                    },
                ],
            },
            {
                title: "Invoice Template",
                children: [
                    { title: "Invoice 1", href: "../invoice/invoice-1.html" },
                    { title: "Invoice 2", href: "../invoice/invoice-2.html" },
                    { title: "Invoice 3", href: "../invoice/invoice-3.html" },
                ],
            },
            { title: "404", href: "404.html" },
            { title: "About Us", href: "about-us.html" },
            { title: "Cart", href: "cart.html" },
            { title: "Contact", href: "contact-us.html" },
            { title: "Checkout", href: "checkout.html" },
            { title: "Coming Soon", href: "coming-soon.html" },
            { title: "Compare", href: "compare.html" },
            { title: "Faq", href: "faq.html" },
            { title: "Order Success", href: "order-success.html" },
            { title: "Order Tracking", href: "order-tracking.html" },
            { title: "OTP", href: "otp.html" },
            { title: "Search", href: "search.html" },
            { title: "User Dashboard", href: "user-dashboard.html" },
            { title: "Wishlist", href: "wishlist.html" },
        ],
    },
    {
        title: "Seller",
        children: [
            { title: "Become a Seller", href: "seller-become.html" },
            { title: "Seller Dashboard", href: "seller-dashboard.html" },
            { title: "Seller Detail", href: "seller-detail.html" },
            { title: "Seller Detail 2", href: "seller-detail-2.html" },
            { title: "Seller Grid", href: "seller-grid.html" },
            { title: "Seller Grid 2", href: "seller-grid-2.html" },
        ],
    },
];
