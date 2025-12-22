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
-- Cấu trúc bảng cho bảng `customer_pay_out`
--

CREATE TABLE `customer_pay_out` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `otype` tinyint(1) NOT NULL,
  `bank_code` int(11) DEFAULT NULL,
  `bank_number` varchar(20) DEFAULT NULL,
  `price` double(20,2) NOT NULL DEFAULT 0.00,
  `name` varchar(100) DEFAULT NULL,
  `des` varchar(255) NOT NULL,
  `info` text DEFAULT NULL,
  `is_save` tinyint(1) DEFAULT 0,
  `cancel_reason` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer_pay_out`
--

INSERT INTO `customer_pay_out` (`id`, `customer_id`, `otype`, `bank_code`, `bank_number`, `price`, `name`, `des`, `info`, `is_save`, `cancel_reason`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 5, 2, NULL, NULL, 2000.00, NULL, 'Thanh toán cho đơn hàng ID: 23', '{\"order_id\":23}', 0, NULL, 2, '2025-01-17 14:42:37', '2025-01-17 14:42:37', 5, 5),
(2, 5, 2, NULL, NULL, 11000.00, NULL, 'Thanh toán cho đơn hàng ID: 41', '{\"order_id\":41}', 0, NULL, 2, '2025-01-24 11:56:20', '2025-01-24 11:56:20', 5, 5),
(3, 5, 2, NULL, NULL, 93200.00, NULL, 'Thanh toán cho đơn hàng ID: 42', '{\"order_id\":42}', 0, NULL, 2, '2025-01-24 15:48:18', '2025-01-24 15:48:18', 5, 5),
(4, 5, 2, NULL, NULL, 51000.00, NULL, 'Thanh toán cho đơn hàng ID: 43', '{\"order_id\":43}', 0, NULL, 2, '2025-02-03 09:26:57', '2025-02-03 09:26:57', 5, 5),
(5, 5, 2, NULL, NULL, 91000.00, NULL, 'Thanh toán cho đơn hàng ID: 44', '{\"order_id\":44}', 0, NULL, 2, '2025-02-03 09:47:30', '2025-02-03 09:47:30', 5, 5);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer_pay_out`
--
ALTER TABLE `customer_pay_out`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `bank_code` (`bank_code`),
  ADD KEY `customer_id` (`customer_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customer_pay_out`
--
ALTER TABLE `customer_pay_out`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
