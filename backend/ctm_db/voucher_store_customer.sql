-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 125.253.125.27
-- Thời gian đã tạo: Th10 31, 2025 lúc 01:48 AM
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
-- Cấu trúc bảng cho bảng `voucher_store_customer`
--

CREATE TABLE `voucher_store_customer` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `voucher_id` int(11) NOT NULL,
  `voucher_value` double(20,2) NOT NULL,
  `voucher_info` text NOT NULL,
  `order_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `voucher_store_customer`
--

INSERT INTO `voucher_store_customer` (`id`, `customer_id`, `voucher_id`, `voucher_value`, `voucher_info`, `order_id`, `created_at`) VALUES
(1, 5, 2, 10000.00, '{\"id\":2,\"store_id\":2,\"name\":\"Gi\\u1ea3m 10,000\\u0111 cho \\u0111\\u01a1n t\\u1eeb 100,000\\u0111 \\u00e1p d\\u1ee5ng t\\u1eeb 19\\/09\\/2024 13:36:34 \\u0111\\u1ebfn 19\\/03\\/2025 13:36:34\",\"description\":\"GIAMGIACTM\",\"image\":null,\"code\":\"GIAMGIACTM\",\"tier_id\":0,\"quantity\":0,\"quantity_used\":1,\"customer_number\":0,\"voucher_type\":1,\"discount_type\":\"F\",\"discount\":\"10000\",\"min_cost\":100000,\"cost_limit\":0,\"date_type\":1,\"start_date\":\"2024-09-19 13:36:34\",\"end_date\":\"2025-03-19 13:36:34\",\"start_time\":\"00:00:00\",\"end_time\":\"00:00:00\",\"day_of_week\":\"[]\",\"status\":1,\"discount_value\":10000}', 42, '2025-01-24 15:48:18'),
(2, 5, 2, 10000.00, '{\"id\":2,\"store_id\":2,\"name\":\"Gi\\u1ea3m 10,000\\u0111 cho \\u0111\\u01a1n t\\u1eeb 100,000\\u0111 \\u00e1p d\\u1ee5ng t\\u1eeb 19\\/09\\/2024 13:36:34 \\u0111\\u1ebfn 19\\/03\\/2025 13:36:34\",\"description\":\"GIAMGIACTM\",\"image\":null,\"code\":\"GIAMGIACTM\",\"tier_id\":0,\"quantity\":0,\"quantity_used\":2,\"customer_number\":0,\"voucher_type\":1,\"discount_type\":\"F\",\"discount\":\"10000\",\"min_cost\":100000,\"cost_limit\":0,\"date_type\":1,\"start_date\":\"2024-09-19 13:36:34\",\"end_date\":\"2025-03-19 13:36:34\",\"start_time\":\"00:00:00\",\"end_time\":\"00:00:00\",\"day_of_week\":\"[]\",\"status\":1,\"discount_value\":10000}', 44, '2025-02-03 09:47:30'),
(3, 59, 7, 50000.00, '{\"id\":7,\"store_id\":35,\"name\":\"Gi\\u1ea3m 50% cho \\u0111\\u01a1n t\\u1eeb 10,000\\u0111  t\\u1ed1i \\u0111a 100,000,000\\u0111 \\u00e1p d\\u1ee5ng t\\u1eeb 13\\/05\\/2025 16:21:00 \\u0111\\u1ebfn 14\\/05\\/2027 16:21:00\",\"description\":\"test\",\"image\":null,\"code\":\"test\",\"tier_id\":0,\"quantity\":0,\"quantity_used\":0,\"customer_number\":0,\"voucher_type\":1,\"discount_type\":\"P\",\"discount\":\"50\",\"min_cost\":10000,\"cost_limit\":100000000,\"date_type\":1,\"start_date\":\"2025-05-13 16:21:00\",\"end_date\":\"2027-05-14 16:21:00\",\"start_time\":\"00:00:00\",\"end_time\":\"00:00:00\",\"day_of_week\":\"[]\",\"status\":1,\"discount_value\":50000}', 105, '2025-05-13 16:22:44'),
(4, 59, 7, 50000.00, '{\"id\":7,\"store_id\":35,\"name\":\"Gi\\u1ea3m 50% cho \\u0111\\u01a1n t\\u1eeb 10,000\\u0111  t\\u1ed1i \\u0111a 100,000,000\\u0111 \\u00e1p d\\u1ee5ng t\\u1eeb 13\\/05\\/2025 16:21:00 \\u0111\\u1ebfn 14\\/05\\/2027 16:21:00\",\"description\":\"test\",\"image\":null,\"code\":\"test\",\"tier_id\":0,\"quantity\":0,\"quantity_used\":1,\"customer_number\":0,\"voucher_type\":1,\"discount_type\":\"P\",\"discount\":\"50\",\"min_cost\":10000,\"cost_limit\":100000000,\"date_type\":1,\"start_date\":\"2025-05-13 16:21:00\",\"end_date\":\"2027-05-14 16:21:00\",\"start_time\":\"00:00:00\",\"end_time\":\"00:00:00\",\"day_of_week\":\"[]\",\"status\":1,\"discount_value\":50000}', 106, '2025-05-13 16:23:37'),
(5, 59, 8, 25000.00, '{\"id\":8,\"store_id\":39,\"name\":\"Gi\\u1ea3m 50% cho \\u0111\\u01a1n t\\u1eeb 10,000\\u0111  t\\u1ed1i \\u0111a 1,000,000,000\\u0111 \\u00e1p d\\u1ee5ng t\\u1eeb 13\\/05\\/2025 16:26:15 \\u0111\\u1ebfn 25\\/03\\/2026 16:26:15\",\"description\":\"testing\",\"image\":null,\"code\":\"testing\",\"tier_id\":0,\"quantity\":0,\"quantity_used\":0,\"customer_number\":0,\"voucher_type\":1,\"discount_type\":\"P\",\"discount\":\"50\",\"min_cost\":10000,\"cost_limit\":1000000000,\"date_type\":1,\"start_date\":\"2025-05-13 16:26:15\",\"end_date\":\"2026-03-25 16:26:15\",\"start_time\":\"00:00:00\",\"end_time\":\"00:00:00\",\"day_of_week\":\"[]\",\"status\":1,\"discount_value\":25000}', 107, '2025-05-13 16:27:16'),
(6, 59, 7, 50000.00, '{\"id\":7,\"store_id\":35,\"name\":\"Gi\\u1ea3m 50% cho \\u0111\\u01a1n t\\u1eeb 10,000\\u0111  t\\u1ed1i \\u0111a 100,000,000\\u0111 \\u00e1p d\\u1ee5ng t\\u1eeb 13\\/05\\/2025 16:21:00 \\u0111\\u1ebfn 14\\/05\\/2027 16:21:00\",\"description\":\"test\",\"image\":null,\"code\":\"test\",\"tier_id\":0,\"quantity\":0,\"quantity_used\":2,\"customer_number\":0,\"voucher_type\":1,\"discount_type\":\"P\",\"discount\":\"50\",\"min_cost\":10000,\"cost_limit\":100000000,\"date_type\":1,\"start_date\":\"2025-05-13 16:21:00\",\"end_date\":\"2027-05-14 16:21:00\",\"start_time\":\"00:00:00\",\"end_time\":\"00:00:00\",\"day_of_week\":\"[]\",\"status\":1,\"discount_value\":50000}', 107, '2025-05-13 16:27:16'),
(7, 59, 7, 50000.00, '{\"id\":7,\"store_id\":35,\"name\":\"Gi\\u1ea3m 50% cho \\u0111\\u01a1n t\\u1eeb 10,000\\u0111  t\\u1ed1i \\u0111a 100,000,000\\u0111 \\u00e1p d\\u1ee5ng t\\u1eeb 13\\/05\\/2025 16:21:00 \\u0111\\u1ebfn 14\\/05\\/2027 16:21:00\",\"description\":\"test\",\"image\":null,\"code\":\"test\",\"tier_id\":0,\"quantity\":0,\"quantity_used\":3,\"customer_number\":0,\"voucher_type\":1,\"discount_type\":\"P\",\"discount\":\"50\",\"min_cost\":10000,\"cost_limit\":100000000,\"date_type\":1,\"start_date\":\"2025-05-13 16:21:00\",\"end_date\":\"2027-05-14 16:21:00\",\"start_time\":\"00:00:00\",\"end_time\":\"00:00:00\",\"day_of_week\":\"[]\",\"status\":1,\"discount_value\":50000}', 108, '2025-05-14 15:12:31');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `voucher_store_customer`
--
ALTER TABLE `voucher_store_customer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `voucher_id` (`voucher_id`),
  ADD KEY `order_id` (`order_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `voucher_store_customer`
--
ALTER TABLE `voucher_store_customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
