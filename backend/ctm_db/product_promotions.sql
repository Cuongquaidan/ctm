-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 125.253.125.27
-- Thời gian đã tạo: Th10 31, 2025 lúc 01:47 AM
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
-- Cấu trúc bảng cho bảng `product_promotions`
--

CREATE TABLE `product_promotions` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `promotion_id` int(11) DEFAULT NULL,
  `product_price_id` int(11) DEFAULT -1,
  `flash_type` varchar(10) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `quantity` int(11) DEFAULT -1,
  `remaining_quantity` int(11) DEFAULT -1,
  `used_quantity` int(11) DEFAULT 0,
  `customer_quantity` int(11) DEFAULT -1,
  `discount_type` varchar(1) NOT NULL,
  `discount` double NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='milktea';

--
-- Đang đổ dữ liệu cho bảng `product_promotions`
--

INSERT INTO `product_promotions` (`id`, `store_id`, `product_id`, `promotion_id`, `product_price_id`, `flash_type`, `start_date`, `end_date`, `quantity`, `remaining_quantity`, `used_quantity`, `customer_quantity`, `discount_type`, `discount`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_deleted`) VALUES
(1, 2, 825, 1, -1, '12:00', NULL, NULL, -1, -1, 1, -1, 'P', 10, 1, '2024-10-16 15:54:27', '2024-10-16 15:54:27', 1, 1, 1),
(2, 2, 823, 1, -1, '12:00', NULL, NULL, -1, -1, 4, -1, 'P', 10, 1, '2024-10-16 15:54:27', '2024-10-16 15:54:27', 1, 1, 1),
(3, 2, 816, 1, -1, '12:00', NULL, NULL, -1, -1, 2, -1, 'P', 15, 1, '2024-10-17 11:19:49', '2024-10-17 11:19:49', 1, 1, 1),
(4, 2, 838, 1, -1, '12:00', NULL, NULL, -1, -1, 9, -1, 'P', 15, 1, '2024-10-17 11:19:49', '2024-10-17 11:19:49', 1, 1, 1),
(5, 2, 834, 1, -1, '12:00', NULL, NULL, -1, -1, 2, -1, 'P', 15, 1, '2024-10-17 11:19:49', '2024-10-17 11:19:49', 1, 1, 1),
(6, 2, 870, 1, -1, '12:00', NULL, NULL, -1, -1, 3, -1, 'P', 15, 1, '2024-10-17 11:19:49', '2024-10-17 11:19:49', 1, 1, 1),
(7, 2, 824, 2, -1, '06:00', NULL, NULL, -1, -1, 3, -1, 'P', 30, 1, '2024-10-17 11:20:52', '2024-10-17 11:20:52', 1, 1, 1),
(8, 2, 815, 2, -1, '06:00', NULL, NULL, -1, -1, 0, -1, 'P', 30, 1, '2024-10-17 11:20:52', '2024-10-17 11:20:52', 1, 1, 1),
(9, 2, 838, 2, -1, '06:00', NULL, NULL, -1, -1, 5, -1, 'P', 30, 1, '2024-10-17 11:20:52', '2024-10-17 11:20:52', 1, 1, 1),
(10, 2, 833, 2, -1, '06:00', NULL, NULL, -1, -1, 0, -1, 'P', 30, 1, '2024-10-17 11:20:52', '2024-10-17 11:20:52', 1, 1, 1),
(11, 2, 822, 3, -1, '00:00', NULL, NULL, -1, -1, 0, -1, 'P', 25, 1, '2024-10-17 11:22:17', '2024-10-17 11:22:17', 1, 1, 1),
(12, 2, 819, 3, -1, '00:00', NULL, NULL, -1, -1, 0, -1, 'P', 25, 1, '2024-10-17 11:22:17', '2024-10-17 11:22:17', 1, 1, 1),
(13, 2, 833, 3, -1, '00:00', NULL, NULL, -1, -1, 0, -1, 'P', 25, 1, '2024-10-17 11:22:17', '2024-10-17 11:22:17', 1, 1, 1),
(14, 2, 834, 3, -1, '00:00', NULL, NULL, -1, -1, 0, -1, 'P', 25, 1, '2024-10-17 11:22:17', '2024-10-17 11:22:17', 1, 1, 1),
(15, 2, 828, 4, -1, NULL, '2025-04-23 09:06:21', '2025-04-25 09:06:21', -1, -1, 0, -1, 'P', 0, 1, '2024-10-18 08:29:38', '2024-10-18 08:29:38', 1, 1, 0),
(16, 2, 837, 4, -1, NULL, '2025-04-23 09:06:21', '2025-04-25 09:06:21', -1, -1, 0, -1, 'P', 0, 1, '2024-10-18 08:29:38', '2024-10-18 08:29:38', 1, 1, 0),
(17, 2, 813, 4, -1, NULL, '2025-04-23 09:06:21', '2025-04-25 09:06:21', -1, -1, 0, -1, 'P', 0, 1, '2024-10-18 08:29:38', '2024-10-18 08:29:38', 1, 1, 0),
(18, 2, 829, 4, -1, NULL, '2025-04-23 09:06:21', '2025-04-25 09:06:21', -1, -1, 0, -1, 'P', 0, 1, '2024-10-18 08:29:38', '2024-10-18 08:29:38', 1, 1, 0),
(19, 2, 818, 4, -1, NULL, '2025-04-23 09:06:21', '2025-04-25 09:06:21', -1, -1, 0, -1, 'P', 0, 1, '2024-10-18 08:29:38', '2024-10-18 08:29:38', 1, 1, 0),
(20, 2, 819, 4, -1, NULL, '2025-04-23 09:06:21', '2025-04-25 09:06:21', -1, -1, 0, -1, 'P', 0, 1, '2024-10-18 08:29:38', '2024-10-18 08:29:38', 1, 1, 0),
(21, 35, 1100, 5, -1, '06:00', NULL, NULL, -1, -1, 11, -1, 'P', 10, 1, '2025-04-24 09:09:44', '2025-04-24 09:09:44', 52, 52, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `product_promotions`
--
ALTER TABLE `product_promotions`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `product_id` (`product_id`),
  ADD KEY `promotion_id` (`promotion_id`),
  ADD KEY `flash_type` (`flash_type`),
  ADD KEY `store_id` (`store_id`),
  ADD KEY `product_price_id` (`product_price_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `product_promotions`
--
ALTER TABLE `product_promotions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
