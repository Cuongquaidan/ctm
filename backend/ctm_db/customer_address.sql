-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 125.253.125.27
-- Thời gian đã tạo: Th10 16, 2025 lúc 04:00 AM
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
-- Cấu trúc bảng cho bảng `customer_address`
--

CREATE TABLE `customer_address` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `customer_id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `country_id` varchar(10) DEFAULT '240',
  `province_id` varchar(10) DEFAULT NULL,
  `district_id` varchar(10) DEFAULT NULL,
  `ward_id` varchar(10) DEFAULT NULL,
  `fulladdress` text DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0,
  `status` tinyint(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer_address`
--

INSERT INTO `customer_address` (`id`, `name`, `phone`, `customer_id`, `address`, `country_id`, `province_id`, `district_id`, `ward_id`, `fulladdress`, `is_deleted`, `status`, `created_at`, `updated_at`) VALUES
(1, '123', '0984356274', 5, '123', '240', '3811', '319', '11320', '123, Xã Trung Lập Thượng, Huyện Củ Chi, Hồ Chí Minh, Việt Nam', 0, 1, '2024-11-15 02:08:21', '2024-11-15 02:08:21'),
(2, 'Nguyen Duy', '0369369429', 2, '108 Hai Bà Trưng', '240', '3811', '302', '11555', '108 Hai Bà Trưng, Phường Tân Định, Quận 1, Hồ Chí Minh, Việt Nam', 0, 1, '2024-11-28 06:49:21', '2024-11-28 06:49:21'),
(3, 'Trình Hữu Công Minh', '0903282380', 15, 'Tòa nhà Ocean Park số 1 Đào Duy Anh', '240', '01', '006', '00232', 'Tòa nhà Ocean Park số 1 Đào Duy Anh, Phường Phương Mai, Quận Đống Đa, Thành phố Hà Nội, Vietnam', 0, 1, '2024-12-29 07:45:25', '2025-05-22 06:37:37'),
(4, 'Nguyen Duy', '0988291649', 44, '10 Đinh Tiên Hoàng', '240', '79', '760', '26740', '10 Đinh Tiên Hoàng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Vietnam', 0, 1, '2025-01-17 07:42:41', '2025-01-17 07:42:41'),
(5, 'Trần Xuân Phú', '0987654321', 46, '110 Phạm Văn Đồng', '240', '79', '765', '26935', '110 Phạm Văn Đồng, Phường 14, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam', 0, 1, '2025-01-23 03:04:12', '2025-01-23 03:05:16'),
(6, 'Hoàng Hải', '0773718771', 47, '10-12 Đinh Tiên Hoàng', '240', '79', '760', '26740', '10-12 Đinh Tiên Hoàng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Vietnam', 0, 1, '2025-01-23 04:17:31', '2025-01-23 04:17:31'),
(7, 'Đinh Hằng', '0983312426', 49, 'số 3 ngách 279/57 Hoàng Mai, P. Hoàng Văn Thụ, Q. Hoàng Mai', '240', '01', '008', '00322', 'số 3 ngách 279/57 Hoàng Mai, P. Hoàng Văn Thụ, Q. Hoàng Mai, Phường Hoàng Văn Thụ, Quận Hoàng Mai, Thành phố Hà Nội, Vietnam', 0, 1, '2025-01-23 13:43:11', '2025-01-23 13:43:11'),
(8, 'pham thi hai', '0906184360', 43, '', '240', '01', '271', '09703', 'Xã Ba Vì, Huyện Ba Vì, Thành phố Hà Nội, Vietnam', 0, 1, '2025-02-06 02:15:11', '2025-02-06 02:15:11'),
(9, 'Doãn Mạnh Hiền', '0963693431', 51, 'Ngõ 92 phố mai động', '240', '01', '008', '00310', 'Ngõ 92 phố mai động, Phường Mai Động, Quận Hoàng Mai, Thành phố Hà Nội, Vietnam', 0, 1, '2025-02-11 08:48:57', '2025-02-11 08:48:57'),
(10, 'Trần Thị Tho', '0917876822', 16, '17T3', '240', '01', '005', '00175', '17T3, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Vietnam', 0, 1, '2025-02-11 09:06:13', '2025-02-11 09:06:13'),
(11, 'Nguyen Văn A', '0903268186', 53, 'P111-a7', '240', '01', '006', '00235', 'P111-a7, Phường Ngã Tư Sở, Quận Đống Đa, Thành phố Hà Nội, Vietnam', 0, 1, '2025-02-12 07:52:50', '2025-02-12 07:52:50'),
(12, 'test', '0984622480', 54, '123', '240', '79', '760', '26740', '123, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Vietnam', 0, 1, '2025-02-25 02:55:48', '2025-02-25 02:55:48'),
(13, 'Trương Thị Hồng', '0916860521', 32, 'Tòa nhà Hoàng Hải', '240', '01', '008', '00310', 'Tòa nhà Hoàng Hải, Phường Mai Động, Quận Hoàng Mai, Thành phố Hà Nội, Vietnam', 0, 1, '2025-02-27 07:54:26', '2025-02-27 07:54:26'),
(14, 'Nguyễn Phi Long', '0912983912', 59, '10-12 Đinh tiên hoàng', '240', '79', '760', '26740', '10-12 Đinh tiên hoàng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Vietnam', 0, 1, '2025-04-08 09:44:44', '2025-05-08 01:07:08'),
(15, 'Hải Phạm', '0906184364', 48, '19a 91 cầu diễn', '240', '01', '271', '09697', '19a 91 cầu diễn, Xã Ba Trại, Huyện Ba Vì, Thành phố Hà Nội, Vietnam', 0, 1, '2025-04-18 13:03:53', '2025-04-18 13:03:53'),
(16, 'Long', '0921832173', 59, 'P111-a7', '240', '01', '018', '00568', 'P111-a7, Xã Dương Quang, Huyện Gia Lâm, Thành phố Hà Nội, Vietnam', 0, 1, '2025-05-23 04:30:02', '2025-05-27 01:55:58'),
(17, 'Công Minh', '0903282380', 15, 'số 3 ngách 279/57 Hoàng Mai', '240', '01', '008', '00322', 'số 3 ngách 279/57 Hoàng Mai, Phường Hoàng Văn Thụ, Quận Hoàng Mai, Thành phố Hà Nội, Vietnam', 0, 1, '2025-05-23 04:35:45', '2025-06-01 14:50:02'),
(18, 'pham thi hai', '0906184360', 62, '72 Trần Đăng Ninh', '240', '01', '009', '00364', '72 Trần Đăng Ninh, Phường Khương Đình, Quận Thanh Xuân, Thành phố Hà Nội, Vietnam', 0, 1, '2025-05-28 08:46:09', '2025-05-28 09:01:27'),
(19, 'Long', '0912738213', 59, '4 Lê Quý Đôn', '240', '77', '748', '26566', '4 Lê Quý Đôn, Phường Kim Dinh, Thành phố Bà Rịa, Tỉnh Bà Rịa - Vũng Tàu, Vietnam', 0, 1, '2025-06-09 03:02:45', '2025-06-09 03:22:49');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer_address`
--
ALTER TABLE `customer_address`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `customer_id` (`customer_id`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customer_address`
--
ALTER TABLE `customer_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
