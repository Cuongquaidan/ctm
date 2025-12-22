-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 125.253.125.27
-- Thời gian đã tạo: Th10 04, 2025 lúc 10:36 AM
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
-- Cấu trúc bảng cho bảng `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `des` varchar(250) DEFAULT NULL,
  `image` mediumtext DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `ordering` tinyint(1) DEFAULT 0,
  `is_deleted` tinyint(1) DEFAULT 0,
  `is_order` tinyint(1) NOT NULL DEFAULT 1,
  `pay_in` tinyint(1) DEFAULT 0,
  `is_store` tinyint(1) NOT NULL DEFAULT 1,
  `is_transport` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `name`, `des`, `image`, `status`, `ordering`, `is_deleted`, `is_order`, `pay_in`, `is_store`, `is_transport`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Thanh toán tiền mặt trực tiếp tại cửa hàng', 'Thanh toán tiền mặt trực tiếp tại cửa hàng', '/img/icon-payment-method-cod.svg', 0, 1, 0, 0, 0, 0, 0, '2022-02-11 08:17:27', '2022-02-11 08:17:27', 1, 1),
(2, 'Thanh toán tiền mặt khi nhận hàng', 'Thanh toán tiền mặt khi nhận hàng', '/img/icon-payment-method-cod.svg', 1, 2, 0, 1, 0, 0, 0, '2022-02-11 08:17:27', '2022-02-11 08:17:27', 1, 1),
(3, 'Thanh toán bằng ví MoMo', 'Thanh toán bằng ví MoMo', '/img/icon-payment-method-momo.svg', 0, 3, 0, 1, 0, 0, 0, '2022-02-11 08:17:27', '2022-02-11 08:17:27', 1, 1),
(4, 'Thanh toán bằng ví ZaloPay', 'Thanh toán bằng ví ZaloPay', '/img/icon-payment-method-zalo-pay.svg', 0, 4, 0, 1, 0, 0, 0, '2022-02-11 08:17:27', '2022-02-11 08:17:27', 1, 1),
(5, 'Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet Banking)', 'Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet Banking)', '/img/icon-payment-method-atm.svg', 0, 5, 0, 1, 0, 0, 0, '2022-02-11 08:17:27', '2022-02-11 08:17:27', 1, 1),
(6, 'Thanh toán bằng thẻ quốc tế Visa, Master, JCB', 'Thanh toán bằng thẻ quốc tế Visa, Master, JCB', '/img/icon-payment-method-credit.svg', 0, 6, 0, 1, 0, 0, 0, '2022-02-11 08:17:27', '2022-02-11 08:17:27', 1, 1),
(7, 'Chuyển khoản qua tài khoản định danh (VA) hoặc Quét mã VietQR', 'Chuyển khoản qua tài khoản định danh (VA) hoặc Quét mã VietQR', '/img/icon-payment-method-credit.svg', 1, 7, 0, 1, 1, 0, 0, '2022-02-11 08:17:27', '2022-02-11 08:17:27', 1, 1),
(8, 'Ví thanh toán', 'Ví thanh toán', '/img/icon-payment-method-atm.svg', 0, 8, 0, 0, 0, 0, 0, '2022-02-11 08:17:27', '2022-02-11 08:17:27', 1, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `name` (`name`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
