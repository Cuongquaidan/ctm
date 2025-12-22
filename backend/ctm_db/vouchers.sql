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
-- Cấu trúc bảng cho bảng `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int(11) NOT NULL,
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
  `status` tinyint(1) DEFAULT NULL,
  `used` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `vouchers`
--

INSERT INTO `vouchers` (`id`, `name`, `description`, `image`, `code`, `tier_id`, `quantity`, `quantity_used`, `customer_number`, `voucher_type`, `discount_type`, `discount`, `min_cost`, `cost_limit`, `date_type`, `start_date`, `end_date`, `start_time`, `end_time`, `day_of_week`, `status`, `used`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_deleted`) VALUES
(1, 'Giảm 50,000đ hạng thành viên Thành viên xác minh cho đơn từ 500,000đ áp dụng 30 ngày kể từ ngày sinh nhật', 'Voucher 50k cho đơn hàng từ 500k', '1/images/banner/b2.png', 'SINHNHAT1', 2, 0, 0, 1, 2, 'F', 50000, 500000, 0, 4, '2024-03-29 09:13:50', '2024-04-27 09:13:50', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-29 09:14:29', '2024-05-13 10:51:39', 2, 2, 0),
(2, 'Giảm 50,000đ hạng thành viên Vàng cho đơn từ 400,000đ áp dụng 30 ngày kể từ ngày sinh nhật', 'Voucher 50k cho đơn hàng từ 400k', '1/images/banner/Ver_vn_c%C3%B3_logo.png', 'SINHNHAT2', 3, 0, 0, 1, 2, 'F', 50000, 400000, 0, 4, '2024-03-29 09:13:50', '2024-04-27 09:13:50', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-29 09:14:29', '2024-05-13 10:50:01', 2, 2, 0),
(3, 'Giảm 50,000đ hạng thành viên Kim cương cho đơn từ 300,000đ áp dụng 30 ngày kể từ ngày sinh nhật', 'Voucher 100k cho đơn hàng từ 500k', '1/images/banner/b4.png', 'SINHNHAT3', 4, 0, 0, 1, 2, 'F', 50000, 300000, 0, 4, '2024-03-29 09:13:50', '2024-04-27 09:13:50', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-29 09:14:29', '2024-05-13 10:49:55', 2, 2, 0),
(4, 'Giảm 20,000đ giới thiệu thành viên mới cho đơn từ 0đ áp dụng từ 29/03/2024 00:00:00 đến 27/04/2030 23:59:59', 'Mã giảm giá 20K tặng cho người quen được áp dụng khi khách hàng tải app và mua đơn hàng đầu tiên online', NULL, 'NEWMEMBER', 1, 0, 0, 0, 6, 'F', 20000, 0, 0, 1, '2024-03-29 00:00:00', '2030-04-27 23:59:59', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-29 09:14:29', '2024-05-07 14:16:10', 2, 1, 0),
(11, 'Miễn phí vận chuyển cho đơn từ 100,000đ tối đa 200,000,000đ áp dụng từ 29/03/2024 09:13:50 đến 28/03/2025 09:13:50', 'freeship', NULL, 'freeship3', 1, 0, 9, 0, 1, 'S', 10000, 100000, 200000000, 1, '2024-03-29 09:13:50', '2025-03-28 09:13:50', '00:00:00', '00:00:00', '[]', 1, 1, '2024-03-29 09:14:29', '2024-05-27 11:03:27', 2, 2, 0),
(12, 'Miễn phí vận chuyển cho đơn từ 10,000đ tối đa 10,000,000,000đ áp dụng từ 29/03/2024 09:14:41 đến 31/05/2024 09:14:41', 'freeship4', NULL, 'freeship4', 1, 0, 3, 0, 1, 'S', 15000, 10000, 10000000000, 1, '2024-03-29 09:14:41', '2024-05-31 09:14:41', '00:00:00', '00:00:00', '[]', 1, 1, '2024-03-29 09:15:06', '2024-05-27 11:05:12', 2, 2, 0),
(13, 'Giảm 50% cho đơn từ 10,000đ tối đa 1,000,000đ áp dụng từ 01/03/2024 15:25:28 đến 25/07/2025 15:25:28', 'Giảm giá 50% lần đầu', '1/images/banner/b4.png', 'giamgia50', 1, 0, 17, 0, 1, 'P', 50, 10000, 1000000, 1, '2024-03-01 15:25:28', '2025-07-25 15:25:28', '00:00:00', '00:00:00', '[]', 1, 1, '2024-03-01 15:26:03', '2024-05-27 10:57:06', 2, 2, 0),
(14, 'Giảm 10,000đ cho đơn từ 150,000đ áp dụng từ 04/03/2024 15:18:16 đến 26/10/2024 15:18:16', 'Giảm giá 10.000 Đồng cho Đơn hàng từ 150.000 Đồng', '1/images/banner/b4.png', 'giamgia10', 1, 0, 0, 0, 1, 'F', 10000, 150000, 0, 1, '2024-03-04 15:18:16', '2024-10-26 15:18:16', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-04 15:19:45', '2024-05-27 10:57:00', 2, 2, 0),
(15, 'Miễn phí vận chuyển cho đơn từ 200,000đ tối đa 0đ áp dụng từ 06/03/2024 09:28:36 đến 20/02/2026 09:28:36', 'freeship1', NULL, 'freeship1', 1, 0, 0, 0, 1, 'S', 15000, 200000, 0, 1, '2024-03-06 09:28:36', '2026-02-20 09:28:36', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-06 09:29:06', '2024-05-27 10:55:50', 2, 2, 0),
(16, 'Miễn phí vận chuyển cho đơn từ 100,000đ tối đa 0đ áp dụng từ 06/03/2024 09:29:08 đến 01/06/2024 09:29:08', 'freeship2', NULL, 'freeship2', 1, 0, 0, 0, 1, 'S', 20000, 100000, 0, 1, '2024-03-06 09:29:08', '2024-06-01 09:29:08', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-06 09:29:29', '2024-05-27 10:55:43', 2, 2, 0),
(17, 'Giảm 100,000đ cho đơn từ 100,000,000đ áp dụng từ 06/03/2024 09:42:18 đến 31/08/2024 09:42:18', 'Ưu đãi sốc', '1/images/banner/giam10.png', 'giamgiatoanphan', 1, 0, 0, 0, 1, 'F', 100000, 100000000, 0, 1, '2024-03-06 09:42:18', '2024-08-31 09:42:18', '00:00:00', '00:00:00', '[4]', 1, 0, '2024-03-06 09:43:05', '2024-05-27 10:56:55', 2, 2, 0),
(18, 'Giảm 10% cho đơn từ 10,000đ tối đa 0đ áp dụng từ 06/03/2024 09:52:27 đến 05/10/2024 09:52:27', 'Thành viên mới', '1/images/banner/giam10.png', 'giam10', 1, 0, 4, 0, 1, 'P', 10, 10000, 0, 1, '2024-03-06 09:52:27', '2024-10-05 09:52:27', '00:00:00', '00:00:00', '[]', 1, 1, '2024-03-06 09:52:58', '2024-06-18 10:46:44', 2, 1, 0),
(19, 'Giảm 10% cho đơn từ 1,000,000đ tối đa 1,000,000,000đ áp dụng từ 06/03/2024 10:08:23 đến 18/12/2025 10:08:23', 'Thành viên mới 1', '1/images/banner/giam10.png', 'newmember', 1, 0, 0, 0, 1, 'P', 10, 1000000, 1000000000, 1, '2024-03-06 10:08:23', '2025-12-18 10:08:23', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-06 10:08:47', '2024-03-29 10:25:06', 2, 2, 0),
(20, 'Giảm 10% cho đơn từ 10,000đ tối đa 1,500,000đ áp dụng từ 06/03/2024 10:08:48 đến 24/08/2024 10:08:48', 'Thành viên vàng', '1/images/banner/giam10.png', 'giamgiathanhvien', 1, 0, 0, 0, 1, 'P', 10, 10000, 1500000, 1, '2024-03-06 10:08:48', '2024-08-24 10:08:48', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-06 10:09:16', '2024-05-27 10:56:45', 2, 2, 0),
(21, 'Miễn phí vận chuyển cho đơn từ 30,000đ tối đa 0đ áp dụng từ 13/03/2024 08:25:24 đến 31/08/2024 08:25:24', 'Giảm giá giao hàng nhanh', '1/images/banner/fastdelivier.jpg', 'giaonhanh', 1, 0, 0, 0, 1, 'S', 30000, 30000, 0, 1, '2024-03-13 08:25:24', '2024-08-31 08:25:24', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-13 08:26:06', '2024-05-27 10:56:41', 2, 2, 0),
(22, 'Giảm 50% cho đơn từ 10,000đ tối đa 1,500,000đ áp dụng từ 13/03/2024 08:29:11 đến 31/05/2024 08:29:11', 'giảm giá 50% cho lần mua đầu tiên', '1/images/banner/b2.png', 'giamgia50', 1, 0, 0, 0, 1, 'P', 50, 10000, 1500000, 1, '2024-03-13 08:29:11', '2024-05-31 08:29:11', '00:00:00', '00:00:00', '[]', 1, 0, '2024-03-13 08:29:44', '2024-05-27 10:56:36', 2, 2, 0),
(23, 'Giảm 20,000đ cho đơn từ 0đ áp dụng từ 15/04/2024 14:03:29 đến 16/09/2024 14:03:29', 'mã giảm 20k cho giới thiệu thành viên mới', '1/images/banner/fastdelivier.jpg', 'MEMBERNEW', 0, 0, 1, 0, 1, 'F', 20000, 0, 0, 1, '2024-04-15 14:03:29', '2024-09-16 14:03:29', '00:00:00', '00:00:00', '[]', 1, 1, '2024-04-15 14:04:08', '2024-04-16 11:16:14', 2, 2, 0),
(24, 'Giảm 10% hạng thành viên Thành viên cho đơn từ 500,000đ tối đa 200,000đ áp dụng từ 10/05/2024 16:10:19 đến 30/09/2024 16:10:19', 'TEST', NULL, 'TEST1', 1, 10, 0, 10, 2, 'P', 10, 500000, 200000, 1, '2024-05-10 16:10:19', '2024-09-30 16:10:19', '00:00:00', '00:00:00', '[]', 1, 0, '2024-05-10 16:11:19', '2024-09-11 11:45:35', 3, 30, 0),
(25, 'Giảm 10% cho đơn từ 400,000đ tối đa 200,000đ áp dụng từ 10/05/2024 16:37:08 đến 31/05/2024 16:37:08', 'TEST2', '1/images/banner/b5.png', 'TEST2', 0, 0, 3, 0, 1, 'P', 10, 400000, 200000, 1, '2024-05-10 16:37:08', '2024-05-31 16:37:08', '00:00:00', '00:00:00', '[]', 1, 1, '2024-05-10 16:38:21', '2024-05-27 10:56:20', 3, 2, 0),
(26, 'Miễn phí vận chuyển cho đơn từ 150,000đ tối đa 39,000đ áp dụng từ 11/05/2024 23:25:15 đến 31/05/2024 23:25:15', 'Giảm 39k phí ship cho đơn hàng có giá trị 150k', NULL, 'TEST FREE SHIP', 0, 0, 1, 0, 1, 'S', 39000, 150000, 39000, 1, '2024-05-11 23:25:15', '2024-05-31 23:25:15', '00:00:00', '00:00:00', '[]', 1, 1, '2024-05-11 23:27:25', '2024-05-27 10:56:16', 3, 2, 0),
(27, 'Giảm 1,000đ cho đơn từ 10,000đ áp dụng từ 01/01/2025 11:12:36 đến 31/01/2025 11:12:36', 'Mã giảm giá Tết Ất Tỵ 2025', '2/images/voucher/ran-hoa-hau.jpg', 'TET2025', 0, 0, 1, 0, 1, 'F', 1000, 10000, 0, 1, '2025-01-01 11:12:36', '2025-01-31 11:12:36', '00:00:00', '00:00:00', '[]', 1, 1, '2025-01-23 11:15:25', '2025-01-23 11:15:25', 2, 2, 0),
(28, 'Giảm 75% cho đơn từ 10,000đ  tối đa 10,010,100,010,101đ áp dụng từ 13/05/2025 16:27:24 đến 15/07/2026 16:27:24', 'testestest', NULL, 'testestest', 0, 0, 1, 0, 1, 'P', 75, 10000, 10010100000000, 1, '2025-05-13 16:27:24', '2026-07-15 16:27:24', '00:00:00', '00:00:00', '[]', 1, 1, '2025-05-13 16:27:43', '2025-05-13 16:27:43', 2, 2, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
