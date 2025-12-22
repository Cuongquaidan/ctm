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
-- Cấu trúc bảng cho bảng `customer_pay_in`
--

CREATE TABLE `customer_pay_in` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `itype` tinyint(1) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `price` double(20,2) NOT NULL DEFAULT 0.00,
  `name` varchar(255) NOT NULL,
  `des` varchar(255) DEFAULT NULL,
  `payment_method_id` tinyint(1) NOT NULL DEFAULT 7,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer_pay_in`
--

INSERT INTO `customer_pay_in` (`id`, `customer_id`, `itype`, `order_id`, `price`, `name`, `des`, `payment_method_id`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 5, 1, NULL, 100000000.00, 'Nạp tiền', '100000000', 1, 2, '2024-11-28 09:53:19', '2024-11-28 09:53:38', 5, 30),
(2, 10, 1, NULL, 600000.00, 'Nạp tiền', 'mua sam ctm', 7, 1, '2024-12-02 22:27:15', '2024-12-02 22:27:15', 10, 10),
(3, 49, 1, NULL, 50000.00, 'Nạp tiền', 'Nap tien tk', 1, 1, '2025-02-07 09:18:00', '2025-02-07 09:18:00', 49, 49),
(4, 49, 1, NULL, 30000.00, 'Nạp tiền', 'Nap tien', 1, 1, '2025-02-07 09:22:16', '2025-02-07 09:22:16', 49, 49);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer_pay_in`
--
ALTER TABLE `customer_pay_in`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `customer_id` (`customer_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customer_pay_in`
--
ALTER TABLE `customer_pay_in`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
