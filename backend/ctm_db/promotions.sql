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
-- Cấu trúc bảng cho bảng `promotions`
--

CREATE TABLE `promotions` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `name` varchar(256) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL,
  `date_type` tinyint(4) DEFAULT 0,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `day_of_week` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `nofi_type` tinyint(1) DEFAULT 2,
  `flash_type` varchar(10) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `promotions`
--

INSERT INTO `promotions` (`id`, `store_id`, `alias`, `name`, `description`, `image`, `date_type`, `start_date`, `end_date`, `start_time`, `end_time`, `day_of_week`, `status`, `nofi_type`, `flash_type`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_deleted`) VALUES
(1, 2, 'giamgiactm', 'Flash Sale 12:00 PM', 'Flash Sale 12:00 PM', NULL, 5, NULL, NULL, '12:00:00', '17:59:59', NULL, 1, 0, '12:00', '2024-09-19 13:37:19', '2024-10-18 08:28:52', 0, 1, 1),
(2, 2, 'flash-sale-03-00-pm', 'Flash Sale 06:00 AM', 'Flash Sale 06:00 AM', NULL, 5, NULL, NULL, '06:00:00', '11:59:59', NULL, 1, 0, '06:00', '2024-10-17 11:20:26', '2024-10-18 08:28:25', 1, 1, 1),
(3, 2, 'flash-sale-09-00-pm', 'Flash Sale 00:00 AM', 'Flash Sale 00:00 AM', NULL, 5, NULL, NULL, '00:00:00', '05:59:59', NULL, 1, 0, '00:00', '2024-10-17 11:21:54', '2024-10-18 08:28:01', 1, 1, 1),
(4, 2, 'flash-sale-06-00-pm', 'Flash Sale 06:00 PM', 'Flash Sale 06:00 PM', NULL, 1, '2025-04-23 09:06:21', '2025-04-25 09:06:21', '18:00:00', '23:59:59', NULL, 1, 0, NULL, '2024-10-18 08:29:12', '2025-04-24 09:06:32', 1, 2, 0),
(5, 35, '123', '123234', '123', NULL, 5, NULL, NULL, '06:00:00', '11:59:59', NULL, 1, 1, '06:00', '2025-04-24 09:09:38', '2025-04-24 09:09:56', 52, 52, 0),
(6, 19, 'ma-giam-gia-2-9-2025', 'Mã giảm giá 2/9/2025', 'Giảm giá ngày quốc khánh', NULL, 5, NULL, NULL, '00:00:00', '05:59:59', NULL, 1, 1, '00:00', '2025-05-23 10:21:10', '2025-05-23 10:21:10', 40, 40, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `store_id` (`store_id`),
  ADD KEY `alias` (`alias`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `promotions`
--
ALTER TABLE `promotions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
