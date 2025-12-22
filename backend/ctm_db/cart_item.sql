-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 125.253.125.27
-- Thời gian đã tạo: Th10 04, 2025 lúc 10:33 AM
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
-- Cấu trúc bảng cho bảng `cart_item`
--

CREATE TABLE `cart_item` (
  `id` int(11) UNSIGNED NOT NULL,
  `customer_id` int(11) UNSIGNED DEFAULT 0,
  `product_id` int(11) NOT NULL,
  `product_price_id` int(11) NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `product_seller_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `is_order` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cart_item`
--

INSERT INTO `cart_item` (`id`, `customer_id`, `product_id`, `product_price_id`, `seller_id`, `product_seller_id`, `quantity`, `is_order`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 2, 838, 450, NULL, NULL, 3, 1, '2024-11-13 09:51:02', '2024-11-13 09:51:03', 2, 2),
(8, 2, 833, 445, NULL, NULL, 2, 1, '2024-11-28 09:22:01', '2024-11-28 09:22:01', 2, 2),
(9, 2, 871, 480, NULL, NULL, 3, 1, '2024-11-28 09:22:20', '2024-12-11 16:51:06', 2, 2),
(11, 5, 873, 490, NULL, NULL, 1, 0, '2024-11-28 09:28:43', '2024-11-28 09:28:43', 5, 5),
(12, 5, 856, 468, NULL, NULL, 1, 0, '2024-11-28 09:29:06', '2024-11-28 09:29:06', 5, 5),
(14, 5, 858, 470, NULL, NULL, 1, 0, '2024-11-28 09:53:55', '2024-11-28 09:53:55', 5, 5),
(31, 22, 838, 450, NULL, NULL, 1, 1, '2024-12-09 08:47:39', '2024-12-09 08:47:39', 22, 22),
(34, 25, 838, 450, NULL, NULL, 1, 1, '2024-12-15 09:58:52', '2024-12-15 09:58:52', 25, 25),
(35, 24, 838, 450, NULL, NULL, 1, 1, '2024-12-19 10:03:58', '2024-12-19 10:03:58', 24, 24),
(36, 42, 838, 450, NULL, NULL, 1, 1, '2024-12-19 10:09:19', '2024-12-19 10:09:19', 42, 42),
(37, 34, 838, 450, NULL, NULL, 1, 1, '2024-12-30 09:55:45', '2024-12-30 09:55:45', 34, 34),
(61, 43, 833, 445, NULL, NULL, 3, 1, '2025-02-06 09:14:31', '2025-02-06 09:14:33', 43, 43),
(72, 5, 880, 496, NULL, NULL, 1, 1, '2025-02-17 09:22:23', '2025-02-17 09:22:23', 5, 5),
(80, 49, 813, 425, NULL, NULL, 1, 1, '2025-03-16 22:53:07', '2025-03-16 22:53:28', 49, 49),
(85, 49, 1101, 717, NULL, NULL, 1, 1, '2025-04-16 11:00:53', '2025-04-16 11:01:20', 49, 49),
(94, 44, 838, 450, NULL, NULL, 2, 1, '2025-05-05 10:35:02', '2025-05-05 10:35:03', 44, 44),
(95, 44, 833, 445, NULL, NULL, 2, 1, '2025-05-05 10:35:02', '2025-05-05 10:35:04', 44, 44),
(104, 15, 1200, 816, NULL, NULL, 3, 0, '2025-05-09 11:58:52', '2025-05-25 21:40:59', 15, 15),
(133, 53, 1206, 822, NULL, NULL, 2, 1, '2025-05-23 11:21:53', '2025-05-23 11:22:04', 53, 53),
(135, 53, 833, 445, NULL, NULL, 1, 0, '2025-05-23 11:38:23', '2025-05-23 11:38:23', 53, 53),
(136, 15, 1101, 717, NULL, NULL, 2, 0, '2025-05-25 21:40:55', '2025-05-25 21:41:24', 15, 15),
(140, 15, 1202, 818, NULL, NULL, 2, 0, '2025-06-01 21:48:46', '2025-06-01 21:48:47', 15, 15),
(143, 62, 1200, 816, NULL, NULL, 1, 0, '2025-06-04 15:52:43', '2025-06-04 15:52:43', 62, 62),
(147, 15, 835, 447, NULL, NULL, 3, 0, '2025-06-05 16:39:40', '2025-06-05 16:39:41', 15, 15),
(148, 15, 1213, 829, NULL, NULL, 1, 0, '2025-06-05 17:03:05', '2025-06-05 17:03:05', 15, 15),
(149, 15, 1214, 830, NULL, NULL, 2, 0, '2025-06-05 17:04:10', '2025-06-05 17:04:11', 15, 15),
(150, 15, 1216, 832, NULL, NULL, 1, 0, '2025-06-05 17:12:45', '2025-06-05 17:12:45', 15, 15),
(154, 15, 78, 63, NULL, NULL, 1, 0, '2025-06-11 10:11:56', '2025-06-11 10:11:56', 15, 15),
(180, 59, 838, 450, NULL, NULL, 12, 1, '2025-10-23 13:32:44', '2025-10-23 13:32:47', 59, 59),
(181, 59, 1216, 832, NULL, NULL, 18, 1, '2025-10-23 13:32:49', '2025-10-23 13:32:53', 59, 59),
(182, 59, 1213, 829, NULL, NULL, 28, 1, '2025-10-23 13:32:54', '2025-10-24 15:47:29', 59, 59),
(183, 59, 1219, 835, NULL, NULL, 12, 1, '2025-10-23 13:33:06', '2025-10-23 14:59:06', 59, 59),
(184, 59, 1217, 833, NULL, NULL, 40, 1, '2025-10-23 13:33:12', '2025-10-24 15:47:17', 59, 59),
(185, 59, 1215, 831, NULL, NULL, 3, 1, '2025-10-24 09:05:19', '2025-10-24 09:05:22', 59, 59),
(186, 59, 1100, 716, NULL, NULL, 1, 1, '2025-10-27 13:00:28', '2025-10-27 13:00:28', 59, 59);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `product_price_id` (`product_price_id`),
  ADD KEY `seller_id` (`seller_id`),
  ADD KEY `product_seller_id` (`product_seller_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
