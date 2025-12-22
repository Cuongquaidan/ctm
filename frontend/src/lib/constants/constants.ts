export const priceRanges = [
    { label: "Dưới 100.000đ", value: "-100000" },
    {
        label: '100.000đ <i class="fa fa-long-arrow-right mx-1" style="font-size: 13px;"></i> 200.000đ',
        value: "100000-200000",
    },
    {
        label: '200.000đ <i class="fa fa-long-arrow-right mx-1" style="font-size: 13px;"></i> 300.000đ',
        value: "200000-300000",
    },
    {
        label: '300.000đ <i class="fa fa-long-arrow-right mx-1" style="font-size: 13px;"></i> 500.000đ',
        value: "300000-500000",
    },
    {
        label: '500.000đ <i class="fa fa-long-arrow-right mx-1" style="font-size: 13px;"></i> 1.000.000đ',
        value: "500000-1000000",
    },
    {
        label: '1.000.000đ <i class="fa fa-long-arrow-right mx-1" style="font-size: 13px;"></i> 2.000.000đ',
        value: "1000000-2000000",
    },
    { label: "Trên 2.000.000đ", value: "2000000-" },
];

export const ratings = [
    {
        label: 'Đánh giá trên 5 <i class="fa-solid fa-star text-warning"></i>',
        value: 5,
    },
    {
        label: 'Đánh giá trên 4 <i class="fa-solid fa-star text-warning"></i>',
        value: 4,
    },
    {
        label: 'Đánh giá trên 3 <i class="fa-solid fa-star text-warning"></i>',
        value: 3,
    },
    {
        label: 'Đánh giá trên 2 <i class="fa-solid fa-star text-warning"></i>',
        value: 2,
    },
    {
        label: 'Đánh giá trên 1 <i class="fa-solid fa-star text-warning"></i>',
        value: 1,
    },
];

export const IMAGES_BASE_URL = process.env.NEXT_PUBLIC_IMAGES_BASE_URL || "";

export const FLASH_SALE_TYPES = ["00:00", "06:00", "12:00", "18:00"];
export const CURRENT = new Date();
export const CURRENT_HOUR = CURRENT.getHours();
