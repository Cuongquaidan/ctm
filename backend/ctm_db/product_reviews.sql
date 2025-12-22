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
-- Cấu trúc bảng cho bảng `product_reviews`
--

CREATE TABLE `product_reviews` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `order_store_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `order_item_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_price_id` int(11) NOT NULL,
  `fullname` varchar(250) DEFAULT NULL,
  `avatar` varchar(250) DEFAULT NULL,
  `point` float NOT NULL DEFAULT 0,
  `des` text DEFAULT NULL,
  `images` text DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_reviews`
--

INSERT INTO `product_reviews` (`id`, `store_id`, `customer_id`, `order_store_id`, `order_id`, `order_item_id`, `product_id`, `product_price_id`, `fullname`, `avatar`, `point`, `des`, `images`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 35, 59, 90, 91, 97, 1100, 716, 'Nguyễn Phi Long', '', 5, 'test', '[\"\\/reviews\\/images\\/59\\/bTofG4BzYzVu2In9PxYN2Wrs7jvgkc4e.jpg\"]', 0, '2025-05-09 16:43:27', '2025-05-09 16:45:37', NULL, 2),
(2, 35, 59, 89, 90, 96, 1100, 716, 'Nguyễn Phi Long', '', 1, 'hgà', '[\"\\/reviews\\/images\\/59\\/j2wZTjtLTSRKOZ7tsiaA11xruPjbdSQZ.jpg\"]', 1, '2025-05-09 16:47:52', '2025-05-09 16:47:52', NULL, NULL),
(3, 35, 59, 88, 89, 95, 1100, 716, 'Nguyễn Phi Long', '', 4, 'juuu', NULL, 1, '2025-05-09 16:48:49', '2025-05-09 16:48:49', NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `order_store_id` (`order_store_id`),
  ADD KEY `order_item_id` (`order_item_id`),
  ADD KEY `product_price_id` (`product_price_id`),
  ADD KEY `store_id` (`store_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `product_reviews`
--
ALTER TABLE `product_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
