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
-- Cấu trúc bảng cho bảng `customer_payined`
--

CREATE TABLE `customer_payined` (
  `id` int(11) NOT NULL,
  `customer_pay_in_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `payment_method_id` int(2) NOT NULL,
  `payment_info` text NOT NULL,
  `amount` double(20,2) DEFAULT 0.00,
  `stop` tinyint(1) NOT NULL DEFAULT 0,
  `status` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer_payined`
--

INSERT INTO `customer_payined` (`id`, `customer_pay_in_id`, `customer_id`, `payment_method_id`, `payment_info`, `amount`, `stop`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 10, 7, '{\"code\":\"0\",\"desc\":\"SUCCESS\",\"data\":{\"id\":28862018,\"transDate\":\"241202222715\",\"transId\":\"6bad241daae8d285a536b8ae2bfb25185f4aca1bdf319638a56abc5f2b314c06\",\"amount\":\"600000\",\"billNumber\":\"CPI_2_222715\",\"currency\":\"704\",\"merchantName\":\"Nap tien cho Nguoi tieu dung\",\"mId\":\"M00206295\",\"terminalId\":\"R3072939\",\"secureHash\":\"eedf8b9fbb07b6cb4f60de1974c3cf49317c5920a56ed37587a551e1d06cd1dc\",\"status\":\"0\",\"createAt\":\"Dec 2, 2024 10:27:16 PM\",\"statusDescription\":\"PENDING\"}}', 600000.00, 0, 2, '2024-12-02 22:27:17', '2024-12-02 22:27:17');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer_payined`
--
ALTER TABLE `customer_payined`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `customer_pay_in_id` (`customer_pay_in_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customer_payined`
--
ALTER TABLE `customer_payined`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
