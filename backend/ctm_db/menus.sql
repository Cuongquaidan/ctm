-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 28, 2025 lúc 07:25 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ca_ctm`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL DEFAULT 1,
  `name` varchar(100) DEFAULT NULL,
  `icon` varchar(50) DEFAULT NULL,
  `param` varchar(200) DEFAULT NULL,
  `sort_order` int(11) DEFAULT 1,
  `is_mega` int(1) DEFAULT 0,
  `is_icon` tinyint(1) DEFAULT 1,
  `type` tinyint(2) DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `menu_type` int(2) DEFAULT 1,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `menus`
--

INSERT INTO `menus` (`id`, `store_id`, `name`, `icon`, `param`, `sort_order`, `is_mega`, `is_icon`, `type`, `parent_id`, `menu_type`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 1, 'Flash Sale', '0', '/flash-sale', 1, 0, 0, 3, 0, 1, 1, '2023-05-29 14:48:29', '2024-10-18 09:53:21', 1, 1),
(2, 1, 'Bán hàng cùng CTM', '0', '/storeAccount', 2, 0, 0, 3, 0, 1, 0, '2023-05-29 14:49:08', '2025-04-20 15:12:41', 1, 2),
(3, 1, 'Cộng tác viên Bán hàng', '0', '/sellerAdcp', 3, 0, 0, 3, 0, 1, 0, '2023-05-29 14:49:50', '2025-04-20 15:11:13', 1, 2),
(4, 1, 'Khuyến mãi', '0', '/khuyen-mai', 4, 0, 0, 3, 0, 1, 1, '2023-05-29 14:50:36', '2024-10-18 09:55:56', 1, 1),
(5, 1, 'Chính sách', '0', '', 1, 0, 0, 3, 0, 2, 1, '2023-11-28 16:24:14', '2023-11-28 16:24:14', 2, 2),
(6, 1, 'Chính sách bảo mật', '0', '10', 1, 0, 0, 1, 5, 2, 1, '2023-11-28 16:24:25', '2025-04-14 08:08:17', 2, 2),
(7, 1, 'Cơ chế giải quyết tranh chấp', '0', '11', 1, 0, 0, 1, 5, 2, 1, '2023-11-28 16:24:35', '2025-04-20 13:10:59', 2, 2),
(8, 1, 'Quy chế hoạt động', '0', '12', 1, 0, 0, 1, 5, 2, 1, '2023-11-28 16:24:47', '2025-02-24 10:26:48', 2, 2),
(11, 1, 'Hỗ trợ khách hàng', '0', '', 1, 0, 0, 3, 0, 2, 1, '2023-11-28 16:25:51', '2025-04-20 13:14:38', 2, 2),
(12, 1, 'Các câu hỏi thường gặp', '0', '', 1, 0, 0, 3, 0, 2, 0, '2023-11-28 16:25:58', '2025-04-20 13:01:53', 2, 2),
(13, 1, 'Gửi yêu cầu hỗ trợ', '0', '', 1, 0, 0, 3, 17, 2, 1, '2023-11-28 16:26:08', '2025-04-23 06:42:00', 2, 2),
(14, 1, 'Bán hàng cùng CTM', '0', 'https://chothongminh.com.vn/storeAccount/register', 1, 0, 0, 3, 11, 2, 1, '2023-11-28 16:27:40', '2025-05-19 16:30:25', 2, 2),
(15, 1, 'Liên hệ với chúng tôi', '0', '', 1, 0, 0, 3, 11, 2, 0, '2023-11-29 15:53:32', '2025-04-20 15:04:32', 2, 2),
(16, 1, 'Hotline & Chat Online (24/7)', '0', '', 1, 0, 0, 3, 11, 2, 0, '2023-11-29 15:53:42', '2025-04-20 13:15:44', 2, 2),
(17, 1, 'Đóng góp ý kiến', '0', 'https://chothongminh.com.vn/customers/contact', 1, 0, 0, 3, 11, 2, 1, '2023-11-29 15:53:49', '2025-05-19 16:31:10', 2, 2),
(21, 1, 'Cửa hàng', '0', '/cua-hang', 5, 0, 0, 3, 0, 1, 1, '2024-10-18 10:01:06', '2024-10-18 10:01:14', 1, 1),
(22, 1, 'Chính sách vận chuyển', '0', '', 1, 0, 0, 3, 5, 2, 0, '2025-03-16 11:31:17', '2025-04-20 13:02:14', 2, 2),
(23, 1, 'Chính sách dành cho người bán hàng', '0', '', 1, 0, 1, 3, 5, 2, 0, '2025-03-16 11:33:53', '2025-04-20 13:02:32', 2, 2),
(24, 1, 'Chính sách đổi trả', '0', '', 1, 0, 1, 3, 5, 2, 0, '2025-03-16 11:37:00', '2025-04-20 13:00:50', 2, 2),
(25, 1, 'Quy chế hoạt động', '0', '', 1, 0, 0, 3, 0, 2, 0, '2025-03-19 15:36:19', '2025-04-20 13:11:24', 2, 2),
(26, 1, 'Tiếp nhận, đánh giá, phản ánh, kiến nghị của tổ chức xã hội', '0', 'https://chothongminh.com.vn/organContacts/create', 4, 0, 0, 3, 11, 2, 1, '2025-05-19 16:08:10', '2025-05-22 11:16:55', 2, 2),
(27, 1, 'Thông tin Đóng góp ý kiến', '0', 'https://chothongminh.com.vn/customerContact', 3, 0, 0, 3, 11, 2, 1, '2025-05-19 16:09:46', '2025-05-22 11:17:13', 2, 2),
(28, 1, 'Danh sách các đánh giá, kiến nghị của tổ chức xã hội', '0', 'https://chothongminh.com.vn/organContacts', 5, 0, 0, 3, 11, 2, 1, '2025-05-22 11:21:21', '2025-05-22 11:21:21', 2, 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `parent_id` (`parent_id`),
  ADD KEY `menu_type` (`menu_type`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
