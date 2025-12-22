-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 125.253.125.27
-- Thời gian đã tạo: Th10 16, 2025 lúc 03:59 AM
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
-- Cấu trúc bảng cho bảng `customer_tiers`
--

CREATE TABLE `customer_tiers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `excerpt` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  `color` varchar(30) DEFAULT NULL,
  `point_ratio` float(20,2) DEFAULT NULL,
  `sale_ratio` float(10,2) DEFAULT 0.00,
  `gift_number` tinyint(2) DEFAULT 0,
  `spending_of_year` int(11) DEFAULT NULL,
  `keeping_of_year` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer_tiers`
--

INSERT INTO `customer_tiers` (`id`, `name`, `excerpt`, `content`, `image`, `color`, `point_ratio`, `sale_ratio`, `gift_number`, `spending_of_year`, `keeping_of_year`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_deleted`) VALUES
(1, 'Thành viên', NULL, NULL, NULL, NULL, 1.00, 0.00, 0, 0, 0, 1, '2024-04-08 10:08:49', '2024-04-08 10:08:52', 1, 1, 0),
(2, 'Bạc', NULL, NULL, NULL, NULL, 1.00, 3.00, 1, 2000000, 1500000, 1, '2024-04-08 10:08:49', '2024-04-08 10:08:52', 1, 1, 0),
(3, 'Vàng', '', '', NULL, NULL, 1.00, 6.00, 2, 4000000, 3500000, 1, '2024-04-08 10:08:49', '2024-04-09 09:28:11', 1, 1, 0),
(4, 'Kim cương', NULL, NULL, NULL, NULL, 1.00, 12.00, 3, 8000000, 6000000, 1, '2024-04-08 10:08:49', '2024-04-08 10:08:52', 1, 1, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer_tiers`
--
ALTER TABLE `customer_tiers`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customer_tiers`
--
ALTER TABLE `customer_tiers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
