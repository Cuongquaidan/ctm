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
-- Cấu trúc bảng cho bảng `customer_forget`
--

CREATE TABLE `customer_forget` (
  `id` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `reference_code` varchar(10) NOT NULL,
  `referral_code` varchar(15) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer_forget`
--

INSERT INTO `customer_forget` (`id`, `email`, `phone`, `reference_code`, `referral_code`, `created_at`, `updated_at`) VALUES
(1, NULL, '0947664660', '927909', NULL, '2024-12-04 11:06:53', '2024-12-04 11:06:53'),
(2, NULL, '0384138396', '248963', NULL, '2024-12-08 19:04:07', '2024-12-08 19:07:26'),
(3, NULL, '0385170958', '622673', NULL, '2024-12-10 18:42:02', '2024-12-14 20:42:00'),
(5, NULL, '0944383939', '863729', NULL, '2024-12-15 09:07:00', '2024-12-15 09:07:00'),
(7, NULL, '0963773133', '209603', NULL, '2024-12-16 11:16:22', '2025-01-24 08:09:21'),
(9, NULL, '0335849892', '596299', NULL, '2025-01-09 09:47:25', '2025-02-07 09:54:02'),
(10, NULL, '0369369429', '925778', NULL, '2025-01-22 15:58:49', '2025-01-22 16:26:58'),
(11, NULL, '0988291649', '302346', NULL, '2025-01-22 16:28:34', '2025-01-22 16:32:23'),
(14, NULL, '0773718771', '171085', NULL, '2025-02-07 09:35:50', '2025-02-07 09:35:50');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer_forget`
--
ALTER TABLE `customer_forget`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `phone` (`phone`) USING BTREE,
  ADD KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customer_forget`
--
ALTER TABLE `customer_forget`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
