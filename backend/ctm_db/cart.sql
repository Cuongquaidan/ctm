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
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT 0,
  `voucher_id` int(11) DEFAULT NULL,
  `voucher_store_id` text DEFAULT NULL,
  `payment_method_id` int(2) DEFAULT 1,
  `item_total` double(20,2) DEFAULT 0.00,
  `item_store_total` text DEFAULT NULL,
  `ahamove_service_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `customer_id`, `voucher_id`, `voucher_store_id`, `payment_method_id`, `item_total`, `item_store_total`, `ahamove_service_id`) VALUES
(1, 2, 0, NULL, 2, 395750.00, '{\"2\":395750}', NULL),
(2, 5, 0, NULL, 8, 1000.00, '{\"2\":1000,\"3\":0,\"15\":0}', NULL),
(3, 10, 0, NULL, 7, 0.00, '[]', NULL),
(4, 15, 0, '0', 7, 0.00, '{\"2\":50000}', '[]'),
(5, 22, 0, NULL, 2, 48300.00, '{\"2\":48300}', NULL),
(6, 18, 0, NULL, 1, 0.00, '[]', NULL),
(7, 17, 0, NULL, 1, 0.00, '[]', NULL),
(8, 24, 0, NULL, 7, 48300.00, '{\"2\":48300}', NULL),
(9, 28, 0, NULL, 1, 0.00, '[]', NULL),
(10, 25, 0, NULL, 1, 48300.00, '{\"2\":48300}', NULL),
(11, 42, 0, NULL, 3, 48300.00, '{\"2\":48300}', NULL),
(12, 34, 0, NULL, 8, 48300.00, '{\"2\":48300}', NULL),
(13, 44, 0, NULL, 7, 314000.00, '{\"2\":314000}', NULL),
(14, 46, 0, '0', 7, 0.00, '{\"2\":1000}', NULL),
(15, 47, 0, '0', 2, 0.00, '{\"2\":1000}', NULL),
(16, 49, 0, NULL, 2, 15035000.00, '{\"2\":15035000}', NULL),
(17, 43, 13, NULL, 8, 784800.00, '{\"2\":784800}', NULL),
(18, 51, 0, NULL, 2, 0.00, '[]', NULL),
(19, 16, 0, '0', 2, 0.00, '{\"2\":202500}', NULL),
(20, 52, 0, NULL, 1, 0.00, '[]', NULL),
(21, 53, 0, NULL, 2, 20000.00, '{\"19\":20000}', '{\"19\":\"HAN-BIKE-HUB10\"}'),
(22, 54, 0, '0', 2, 0.00, '{\"2\":48300}', NULL),
(23, 32, 0, '0', 2, 0.00, '{\"2\":35000}', NULL),
(24, 59, 0, NULL, 2, 14718000.00, '{\"35\":90000,\"42\":9600000,\"2\":828000,\"41\":4200000}', '{\"41\":\"SGN-ECO\",\"42\":\"SGN-BIKE\"}'),
(25, 48, 0, NULL, 7, 0.00, '[]', NULL),
(26, 62, 0, NULL, 7, 0.00, '[]', '[]'),
(27, 64, 0, NULL, 1, 0.00, '[]', '[]');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `voucher_id` (`voucher_id`),
  ADD KEY `payment_method_id` (`payment_method_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
