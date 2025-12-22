-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 125.253.125.27
-- Thời gian đã tạo: Th10 04, 2025 lúc 10:30 AM
-- Phiên bản máy phục vụ: 10.10.2-MariaDB
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
-- Cấu trúc bảng cho bảng `advertisements`
--

CREATE TABLE `advertisements` (
  `id` int(11) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  `button_link` varchar(250) DEFAULT NULL,
  `button_name` varchar(100) DEFAULT NULL,
  `sale_name` varchar(250) DEFAULT NULL,
  `sale_value` varchar(250) DEFAULT NULL,
  `scode` mediumtext DEFAULT NULL,
  `view_count` int(11) DEFAULT 0,
  `click_count` int(11) DEFAULT 0,
  `status` int(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `advertisements`
--

INSERT INTO `advertisements` (`id`, `name`, `description`, `image`, `button_link`, `button_name`, `sale_name`, `sale_value`, `scode`, `view_count`, `click_count`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Thịt tươi ngon', '', '1/images/banner/9.jpg', '#', 'Xem thêm', 'Offer', '50%', '', 0, 0, 1, '2023-05-19 08:53:12', '2024-01-30 14:12:22', 1, 2),
(2, 'Nấm tươi ngon', '', '1/images/banner/10.jpg', '#', 'Xem thêm', 'Offer', '50%', '', 0, 0, 1, '2023-05-19 08:53:27', '2024-08-23 14:40:47', 1, 1),
(3, 'Hải sản Tươi sống', '', '1/images/banner/8.jpg', '#', 'Xem thêm', '', '', '', 0, 0, 1, '2023-05-19 09:01:32', '2024-08-23 14:41:10', 1, 1),
(4, 'Organic FRESH VEGETABLES', '', '1/images/banner/11.jpg', '#', 'Xem thêm', 'Super Offer to', '50%', '', 0, 0, 1, '2023-05-19 09:02:49', '2024-08-23 14:41:21', 1, 1),
(5, 'Giảm ngay 50,000 cho đơn từ 500,000', '', '1/images/banner/15.jpg', '#', 'Xem thêm', 'Mã giảm giá : GROCERY1920', '', '', 0, 0, 1, '2023-05-19 10:55:25', '2024-08-23 14:41:32', 1, 1),
(6, 'Hoa củ quả', 'SUMMER', '1/images/banner/14.jpg', '#', 'Xem thêm', 'Giảm giá lên tới', '5% OFF', '', 0, 0, 1, '2023-05-19 10:58:36', '2024-08-23 14:41:44', 1, 1),
(7, 'Sale sập sàn', '', '1/images/banner/12.jpg', '#', 'Xem thêm', 'Tham gia ngay', '', '', 0, 0, 1, '2023-05-19 13:33:31', '2024-08-23 14:41:56', 1, 1),
(8, 'Giá hot', 'Đồ uống', '1/images/banner/13.jpg', '#', 'Xem thêm', '', '20% Off', '', 0, 0, 1, '2023-05-19 13:34:02', '2025-02-25 09:57:59', 1, 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `advertisements`
--
ALTER TABLE `advertisements`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
