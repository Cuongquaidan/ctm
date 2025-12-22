import { PostItemT } from "@/types/common.types";

export const newData: {
    id: number;
    image: string;
    title: string;
    date: Date;
    link: string;
    author: string;
    createdAt: Date;
}[] = [
    {
        id: 1,
        image: "https://ca-ctm.systems.com.vn/styles/default.jpg",
        title: "Loại quả được đánh giá là thực phẩm tốt nhất thế giới, Việt Nam trồng nhiều",
        date: new Date("2025-02-24T09:52:00Z"),
        link: "/loai-qua-duoc-danh-gia-la-thuc-pham-tot-nhat-the-gioi-viet-nam-trong-nhieu",
        author: "Admin",
        createdAt: new Date("2025-02-24T09:52:00Z"),
    },
    {
        id: 2,
        image: "https://ca-ctm.systems.com.vn/styles/default.jpg",
        title: "Quy chế hoạt động",
        date: new Date("2025-02-24T09:51:00Z"),
        link: "/quy-che-hoat-dong",
        author: "Admin",
        createdAt: new Date("2025-02-24T09:52:00Z"),
    },
    {
        id: 3,
        image: "https://ca-ctm.systems.com.vn/styles/default.jpg",
        title: "Cơ chế giải quyết tranh chấp",
        date: new Date("2025-02-24T09:49:00Z"),
        link: "/co-che-giai-quyet-tranh-chap",
        author: "Admin",
        createdAt: new Date("2025-02-24T09:52:00Z"),
    },
    {
        id: 4,
        image: "https://ca-ctm.systems.com.vn/styles/default.jpg",
        title: "Chính sách bảo mật",
        date: new Date("2025-02-24T09:49:00Z"),
        link: "/chinh-sach-bao-mat",
        author: "Admin",
        createdAt: new Date("2025-02-24T09:52:00Z"),
    },
];
