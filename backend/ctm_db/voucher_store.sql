-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 125.253.125.27
-- Thời gian đã tạo: Th10 31, 2025 lúc 01:48 AM
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
-- Cấu trúc bảng cho bảng `voucher_store`
--

CREATE TABLE `voucher_store` (
  `id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL,
  `code` varchar(20) NOT NULL,
  `tier_id` tinyint(1) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `quantity_used` int(11) DEFAULT 0,
  `customer_number` int(11) DEFAULT NULL,
  `voucher_type` int(11) NOT NULL,
  `discount_type` varchar(1) NOT NULL DEFAULT 'F',
  `discount` decimal(15,0) NOT NULL,
  `min_cost` float DEFAULT 0,
  `cost_limit` float DEFAULT 0,
  `date_type` tinyint(1) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `day_of_week` varchar(250) DEFAULT NULL,
  `reason_cancel` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `used` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `voucher_store`
--

INSERT INTO `voucher_store` (`id`, `store_id`, `name`, `description`, `image`, `code`, `tier_id`, `quantity`, `quantity_used`, `customer_number`, `voucher_type`, `discount_type`, `discount`, `min_cost`, `cost_limit`, `date_type`, `start_date`, `end_date`, `start_time`, `end_time`, `day_of_week`, `reason_cancel`, `status`, `used`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_deleted`) VALUES
(1, 2, 'Giảm 20,000đ cho đơn từ 100,000đ áp dụng từ 18/09/2024 09:34:02 đến 18/09/2025 09:34:02', 'Giảm giá', NULL, 'GIAMGIA10', 0, 1, 2, 0, 1, 'F', 20000, 100000, 0, 1, '2024-09-18 09:34:02', '2025-09-18 09:34:02', '00:00:00', '00:00:00', '[]', NULL, 1, 1, '2024-09-18 09:34:49', '2025-01-24 15:46:25', 1, 28, 0),
(2, 2, 'Giảm 10,000đ cho đơn từ 100,000đ áp dụng từ 19/09/2024 13:36:34 đến 19/03/2025 13:36:34', 'GIAMGIACTM', NULL, 'GIAMGIACTM', 0, 0, 3, 0, 1, 'F', 10000, 100000, 0, 1, '2024-09-19 13:36:34', '2025-03-19 13:36:34', '00:00:00', '00:00:00', '[]', NULL, 1, 1, '2024-09-19 13:37:08', '2025-01-24 14:38:06', 26, 28, 0),
(3, 2, 'Giảm 3% hạng thành viên Bạc cho đơn từ 200,000đ tối đa 10,000đ áp dụng từ 17/03/2025 20:06:25 đến 26/03/2025 23:00:00', 'Giảm giá nhân dịp thành lập đoàn', NULL, '1qnq1r', 2, 0, 0, 0, 2, 'P', 3, 200000, 10000, 1, '2025-03-17 20:06:25', '2025-03-26 23:00:00', '00:00:00', '00:00:00', '[]', NULL, 1, 0, '2025-03-16 20:09:16', '2025-03-27 16:36:34', 2, 2, 0),
(4, 33, 'Giảm 10,000đ cho đơn từ 12,312,300đ áp dụng từ 27/03/2025 16:41:10 đến 31/03/2025 16:41:10', 'testestet', NULL, '123123', 0, 0, 0, 0, 1, 'F', 10000, 12312300, 0, 1, '2025-03-27 16:41:10', '2025-03-31 16:41:10', '00:00:00', '00:00:00', '[]', 'test', 1, 0, '2025-03-27 16:41:36', '2025-03-27 16:41:57', 50, 2, 0),
(5, 19, 'Giảm 1,000,000đ giới thiệu thành viên mới cho đơn từ 0đ áp dụng từ 05/05/2025 00:00:50 đến 06/05/2025 00:00:50', 'Giam gia ngay 0-05-2025', NULL, '50%', 0, 10, 0, 10, 6, 'F', 1000000, 0, 0, 1, '2025-05-05 00:00:50', '2025-05-06 00:00:50', '00:00:00', '00:00:00', '[]', NULL, 1, 0, '2025-04-08 13:46:24', '2025-04-08 13:54:51', 40, 2, 0),
(6, 19, 'Giảm 10% cho đơn từ 0đ  tối đa 10,000,000đ áp dụng từ 09/04/2025 00:00:56 đến 09/04/2025 23:00:56', 'Mã giảm ngày sinh nhat', NULL, '10', 0, 0, 0, 0, 1, 'P', 10, 0, 10000000, 1, '2025-04-09 00:00:56', '2025-04-09 23:00:56', '00:00:00', '00:00:00', '[]', 'Không đồng ý', 1, 0, '2025-04-09 11:30:58', '2025-05-21 14:32:20', 40, 2, 0),
(7, 35, 'Giảm 50% cho đơn từ 10,000đ  tối đa 100,000,000đ áp dụng từ 13/05/2025 16:21:00 đến 14/05/2027 16:21:00', 'test', NULL, 'test', 0, 0, 4, 0, 1, 'P', 50, 10000, 100000000, 1, '2025-05-13 16:21:00', '2027-05-14 16:21:00', '00:00:00', '00:00:00', '[]', NULL, 1, 1, '2025-05-13 16:21:39', '2025-05-13 16:22:02', 52, 2, 0),
(8, 39, 'Giảm 50% cho đơn từ 10,000đ  tối đa 1,000,000,000đ áp dụng từ 13/05/2025 16:26:15 đến 25/03/2026 16:26:15', 'testing', NULL, 'testing', 0, 0, 1, 0, 1, 'P', 50, 10000, 1000000000, 1, '2025-05-13 16:26:15', '2026-03-25 16:26:15', '00:00:00', '00:00:00', '[]', NULL, 1, 1, '2025-05-13 16:26:36', '2025-05-13 16:26:43', 56, 2, 0),
(9, 40, 'Giảm 50% cho đơn từ 500,000 ₫  tối đa 1,000,000 ₫ áp dụng từ 29/05/2025 15:34:27 đến 31/05/2025 15:34:27', 'mã giảm giá 50% khi mua đơn hàng trên 500.000 VNĐ', NULL, 'ABC6', 0, 2, 0, 10, 1, 'P', 50, 500000, 1000000, 1, '2025-05-29 15:34:27', '2025-05-31 15:34:27', '00:00:00', '00:00:00', '[]', NULL, 3, 0, '2025-05-28 15:35:36', '2025-05-28 15:35:36', 57, 57, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `voucher_store`
--
ALTER TABLE `voucher_store`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `voucher_store`
--
ALTER TABLE `voucher_store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
