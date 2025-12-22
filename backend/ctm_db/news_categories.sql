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
-- Cấu trúc bảng cho bảng `news_categories`
--

CREATE TABLE `news_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `alias` varchar(250) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `meta_title` varchar(250) DEFAULT NULL,
  `meta_keywords` varchar(250) DEFAULT NULL,
  `meta_description` varchar(250) DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  `layout` varchar(30) DEFAULT NULL,
  `status` int(1) DEFAULT 0,
  `is_deleted` int(1) UNSIGNED NOT NULL DEFAULT 0,
  `parent_id` int(11) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `news_categories`
--

INSERT INTO `news_categories` (`id`, `alias`, `name`, `description`, `meta_title`, `meta_keywords`, `meta_description`, `image`, `layout`, `status`, `is_deleted`, `parent_id`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(2, 'meo-bo-tui', 'Mẹo bỏ túi', 'Mẹo bỏ túi', 'Mẹo bỏ túi', 'Mẹo bỏ túi', 'Mẹo bỏ túi', '', NULL, 1, 0, 0, '2023-11-30 06:29:32', '2023-11-30 06:29:32', 2, 2),
(3, 'mon-ngon-hom-nay', 'Món ngon hôm nay', 'Món ngon hôm nay', 'Món ngon hôm nay', 'Món ngon hôm nay', 'Món ngon hôm nay', '', NULL, 1, 0, 0, '2023-11-30 06:29:45', '2023-11-30 06:29:45', 2, 2),
(4, 'dac-san-vung-mien', 'Đặc sản vùng miền', 'Đặc sản vùng miền', 'Đặc sản vùng miền', 'Đặc sản vùng miền', 'Đặc sản vùng miền', '', NULL, 1, 0, 0, '2023-11-30 06:30:20', '2023-11-30 06:30:20', 2, 2),
(5, 'che-do-an-uong', 'Chế độ ăn uống', 'Chế độ ăn uống', 'Chế độ ăn uống', 'Chế độ ăn uống', 'Chế độ ăn uống', '', NULL, 1, 0, 0, '2023-11-30 06:30:35', '2023-11-30 06:30:35', 2, 2),
(8, 'chinh-sach-1740364833', 'Chính sách', '', 'Chính sách', 'Chính sách', 'Chính sách', NULL, 'default', 1, 0, 0, '2025-02-24 02:40:33', '2025-02-24 02:40:33', 2, 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `news_categories`
--
ALTER TABLE `news_categories`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `alias` (`alias`),
  ADD KEY `name` (`name`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `news_categories`
--
ALTER TABLE `news_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
