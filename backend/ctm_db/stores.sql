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
-- Cấu trúc bảng cho bảng `stores`
--

CREATE TABLE `stores` (
  `id` int(11) NOT NULL,
  `alias` varchar(250) NOT NULL,
  `register_id` int(11) DEFAULT NULL,
  `ctm_discount` double(5,2) DEFAULT 0.00,
  `name` varchar(200) NOT NULL,
  `des` varchar(250) DEFAULT NULL,
  `activity` varchar(250) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `telephone` text DEFAULT NULL,
  `country_id` varchar(10) DEFAULT NULL,
  `province_id` varchar(10) DEFAULT NULL,
  `district_id` varchar(10) DEFAULT NULL,
  `ward_id` varchar(10) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `fulladdress` mediumtext DEFAULT NULL,
  `lat` double(20,10) DEFAULT 0.0000000000,
  `lng` double(20,10) DEFAULT 0.0000000000,
  `image` varchar(250) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `review_total` int(11) DEFAULT 0,
  `review_point_1` int(11) DEFAULT 0,
  `review_point_2` int(11) DEFAULT 0,
  `review_point_3` int(11) DEFAULT 0,
  `review_point_4` int(11) DEFAULT 0,
  `review_point_5` int(11) DEFAULT 0,
  `review_point` float DEFAULT 0,
  `status` smallint(1) DEFAULT NULL,
  `is_deleted` smallint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `stores`
--

INSERT INTO `stores` (`id`, `alias`, `register_id`, `ctm_discount`, `name`, `des`, `activity`, `phone`, `telephone`, `country_id`, `province_id`, `district_id`, `ward_id`, `address`, `fulladdress`, `lat`, `lng`, `image`, `email`, `review_total`, `review_point_1`, `review_point_2`, `review_point_3`, `review_point_4`, `review_point_5`, `review_point`, `status`, `is_deleted`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(2, 'cua-hang-1', NULL, 10.00, 'CTM MALL', 'Giới thiệu về cửa hàng 1', 'Đa lĩnh vực, sản phẩm cốt lõi', '0987654321', '0987654321', '240', '01', '005', '00175', '17T3 Hoàng Đạo Thúy', '17T3 Hoàng Đạo Thúy, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Vietnam', 0.0000000000, 0.0000000000, '1/images/shop/ctm.jpg', 'info@chothongminh.vn', 0, 0, 0, 0, 0, 0, 0, 1, 0, NULL, '2025-05-23 11:47:43', NULL, 2),
(3, 'cua-hang-2', NULL, 0.00, 'Cửa hàng thời trang FS', 'Giới thiệu về cửa hàng 2', 'Thời trang, Quần Áo, Giày dép', '', '', '240', '3810', '0', '0', 'Số 8091 Đại lộ Hùng Vương', 'Số 8091 Đại lộ Hùng Vương, Hà Nội, Vietnam', 10.8026058733, 106.6985986091, '1/images/shop/1.png', '', 0, 0, 0, 0, 0, 0, 0, 1, 0, NULL, '2024-09-10 16:40:46', NULL, 30),
(4, 'cua-hang-3', NULL, 0.00, 'Cửa hàng 3', 'Giới thiệu về cửa hàng 3', 'Cửa hàng 3', '', '', '240', '3811', '309', '11466', '685 Hưng Phú', '685 Hưng Phú, Phường 9, Quận 8, Hồ Chí Minh, Việt Nam', 10.0000000000, 100.0000000000, '1/images/shop/2.png', '', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2023-03-22 11:20:36', '2024-09-11 09:46:58', 1, 30),
(5, 'cua-hang-4-noi-that', NULL, 0.00, 'Cửa hàng 4', NULL, 'Cửa hàng 4', '', '', '240', '3808', '421', '6067', '58/ap3', '58/ap3, Xã Tân Bửu, Huyện Bến Lức, Long An, Việt Nam', 0.0000000000, 0.0000000000, '1/images/shop/4.png', '', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2023-06-22 09:05:51', '2023-11-29 15:28:01', 1, 2),
(6, 'cua-hang-5-my-pham', NULL, 0.00, 'Cửa hàng 5', NULL, 'Cửa hàng 5', '0971582432', '', '240', '3782', '118', '5226', '36-2', '36-2, Xã Thanh Long, Huyện Hà Quảng, Cao Bằng, Việt Nam', 0.0000000000, 0.0000000000, '1/images/shop/5.jpg', '', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2023-06-22 09:07:06', '2023-11-29 15:52:18', 1, 2),
(7, 'cua-hang-6-suc-khoe-va-duoc-pham', NULL, 0.00, 'Cửa hàng 6', NULL, 'Cửa hàng 6', '', '', '240', '4925', '110', '10728', '927', '927, Phường Thới Hòa, Quận Ô Môn, Cần Thơ, Việt Nam', 0.0000000000, 0.0000000000, '1/images/shop/7.jpg', '', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2023-06-22 09:11:20', '2023-11-29 15:24:04', 1, 2),
(8, 'cua-hang-7-sach-van-phong-pham', NULL, 0.00, 'Cửa hàng 7', NULL, 'Cửa hàng 7', '', '', '240', '3810', '245', '0', '56-2A', '56-2A, Huyện Đan Phượng, Hà Nội, Vietnam', 0.0000000000, 0.0000000000, '1/images/shop/8.jpg', '', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2023-06-23 09:52:40', '2023-11-29 15:24:11', 2, 2),
(9, 'cua-hang-8-o-to', NULL, 0.00, 'Cửa hàng 8 (pet)', NULL, 'Cửa hàng 8', '', '', '240', '3821', '175', '9678', '274', '274, Xã Thanh Sơn, Huyện Tân Phú, Đồng Nai, Việt Nam', 0.0000000000, 0.0000000000, '1/images/shop/9.png', '', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2023-06-23 09:55:53', '2023-11-29 15:23:43', 2, 2),
(10, 'cua-hang-9-me-va-be', NULL, 0.00, 'Cửa hàng 9', NULL, 'Cửa hàng 9', '', '', '240', '3815', '19', '8519', '14B', '14B, Xã Xuân Hương, Huyện Lạng Giang, Bắc Giang, Việt Nam', 0.0000000000, 0.0000000000, '1/images/shop/10.jpg', '', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2023-06-23 10:16:51', '2023-11-29 15:23:53', 2, 2),
(14, 'cua-hang-ban-du-thu', 10, 0.00, 'Cửa hàng bán đủ thứ', NULL, '', '0965874123', '0965874123', '240', '3811', '318', '11344', 'Gò Vấp', 'Gò Vấp, Xã Trung Chánh, Huyện Hóc Môn, Hồ Chí Minh, Việt Nam', 0.0000000000, 0.0000000000, NULL, '3123123123123@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2024-10-28 10:14:17', '2024-10-28 10:14:17', 30, 30),
(15, 'ctm-cot-loi', 8, 10.00, 'CTM CỐT LÕI', NULL, 'Liên Kết Tiêu Dùng', '0903282380', '0903282380', '240', '01', '005', '00175', '17T3 ,Hoàng Đạo Thúy,Trung Hòa, Cầu Giấy,Hà Nội', '17T3 ,Hoàng Đạo Thúy,Trung Hòa, Cầu Giấy,Hà Nội, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Vietnam', 0.0000000000, 0.0000000000, NULL, 'chothonginh2024@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2024-10-30 09:33:21', '2025-02-20 07:24:54', 1, 2),
(16, 'cua-hang-test', 18, 15.00, 'Cửa hàng test', NULL, '', '0984356274', '0984356274', '240', '3815', '20', '8493', '123', '123, Xã Phúc Sơn, Huyện Sơn Động, Bắc Giang, Việt Nam', 0.0000000000, 0.0000000000, NULL, '123@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2024-11-22 10:30:12', '2024-11-22 10:30:12', 30, 30),
(17, 'cua-hang-testest', 20, 10.00, 'Cửa hàng testest', NULL, 'test', '0931234567', '0931234567', '240', '79', '760', '26743', '123', '123, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, '123@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2024-11-22 10:32:21', '2025-02-26 10:04:26', 30, 2),
(18, '123', 17, 10.00, '123', NULL, '', '0987654321', '0987654321', '240', '3811', '318', '11343', '12', '12, Xã Xuân Thới Đông, Huyện Hóc Môn, Hồ Chí Minh, Việt Nam', 0.0000000000, 0.0000000000, NULL, '111@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2024-11-25 11:16:16', '2024-11-25 11:16:16', 30, 30),
(19, 'smarthome', 25, 10.00, 'Smarthome', NULL, 'Smarthome', '0903268186', '0903268186', '240', '01', '005', '00167', '11 Duy Tân', '11 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Vietnam', 0.0000000000, 0.0000000000, NULL, 'sejiyiy207@datingel.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2024-12-10 14:26:02', '2025-05-23 11:31:01', 2, 2),
(20, 'cuahangdiennuoc', 26, 10.00, 'cuahangdiennuoc', NULL, '', '0976654369', '0976654369', '240', '34', '336', '12436', '111 A7', '111 A7, Phường Bồ Xuyên, Thành phố Thái Bình, Tỉnh Thái Bình, Vietnam', 0.0000000000, 0.0000000000, NULL, 'info@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2024-12-14 10:19:32', '2024-12-14 10:19:32', 2, 2),
(21, 'cong-ty-tnhh-tradmi', 28, 50.00, 'CÔNG TY TNHH TRADMI', NULL, '', '0848333383', '0848333383', '240', '10', '088', '03001', 'Số 3 Nguyễn Viết Xuân', 'Số 3 Nguyễn Viết Xuân, Phường Sa Pa, Thị xã Sa Pa, Tỉnh Lào Cai, Vietnam', 0.0000000000, 0.0000000000, NULL, 'thuytrantradmi26@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2024-12-15 10:18:14', '2024-12-15 10:18:14', 2, 2),
(22, 'cong-ty-co-phan-tinh-dau-va-huong-lieu-family', 29, 47.00, 'Công Ty Cổ Phần Tinh Dầu Và Hương Liệu Family', NULL, '', '0985815868', '0985815868', '240', '01', '001', '00013', 'Số 66 Phan Đình Phùng', 'Số 66 Phan Đình Phùng, Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội, Vietnam', 0.0000000000, 0.0000000000, NULL, 'thaomocxanhfamily@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2024-12-15 12:47:09', '2024-12-15 12:47:09', 2, 2),
(23, 'rau-sach', 22, 50.00, 'rau sạch', NULL, '', '0966996387', '0966996387', '240', '79', '771', '27184', '440 tây sơn', '440 tây sơn, Phường 01, Quận 10, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, 'mr.nvlam@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-01-07 10:37:35', '2025-01-07 10:37:35', 30, 30),
(24, '123-1737076854', 4, 10.00, 'Shop 123', NULL, 'Thời trang, Quần Áo, Giày dép', '0923456789', '0923456789', '240', '79', '760', '26740', '8 Đinh Tiên Hoàng', '8 Đinh Tiên Hoàng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, '123@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-01-17 08:20:54', '2025-02-25 11:42:45', 1, 1),
(25, 'cong-minh', NULL, 7.00, 'Công Minh', NULL, 'Tạp hóa', '0963773133', '0963773133', '240', '38', '382', '14830', '347 Trần Hưng Đạo', '347 Trần Hưng Đạo, Phường Trung Sơn, Thành phố Sầm Sơn, Tỉnh Thanh Hóa, Vietnam', 0.0000000000, 0.0000000000, '2/images/trai-cay/chuoi-1.jpg', 'minhradio@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-02-20 00:02:11', '2025-06-13 16:47:41', 2, 2),
(26, 'cafe-bui-pho', NULL, 2.00, 'Cafe Bụi phố', NULL, 'Đồ uống', '0916860521', '0916860521', '240', '38', '382', '14842', 'Trần Hưng Đạo', 'Trần Hưng Đạo, Phường Quảng Tiến, Thành phố Sầm Sơn, Tỉnh Thanh Hóa, Vietnam', 0.0000000000, 0.0000000000, '2/images/Do_uong/z6078230016603_ad46b5e785a419b81667761445753318.jpg', 'truongthihong@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2025-02-25 10:19:47', '2025-02-25 10:19:47', 2, 2),
(27, 'coffe-1996', NULL, 2.00, 'Coffe 1996', NULL, 'Đồ uống', '0916860521', '0916860521', '240', '38', '382', '14842', 'Trần Hưng Đạo', 'Trần Hưng Đạo, Phường Quảng Tiến, Thành phố Sầm Sơn, Tỉnh Thanh Hóa, Vietnam', 0.0000000000, 0.0000000000, '2/images/Do_uong/z6116511605137_4834765135b3a4d452ba38c11c8aca7d.jpg', 'truongthihong@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2025-02-25 10:34:52', '2025-02-25 10:34:52', 2, 2),
(28, 'nha-hang-cho-cot-do', NULL, 2.00, 'NHÀ HÀNG CHỢ CỘT ĐỎ', NULL, 'Đồ uống', '0916860521', '0916860521', '240', '38', '382', '14842', 'Trần Hưng Đạo', 'Trần Hưng Đạo, Phường Quảng Tiến, Thành phố Sầm Sơn, Tỉnh Thanh Hóa, Vietnam', 0.0000000000, 0.0000000000, '2/images/Do_uong/z6169335779551_f30554f733d94f58fe4cc434f17f1c23.jpg', 'truongthihong@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2025-02-25 10:37:07', '2025-02-25 10:37:19', 2, 2),
(29, 'pi-coffee', NULL, 2.00, 'PI COFFEE', NULL, 'Đồ', '0916860521', '0916860521', '240', '38', '382', '14842', 'Trần Hưng Đạo', 'Trần Hưng Đạo, Phường Quảng Tiến, Thành phố Sầm Sơn, Tỉnh Thanh Hóa, Vietnam', 0.0000000000, 0.0000000000, '2/images/Do_uong/z6064438640237_8dd3da5dae996cdf3555ca028856ed6e.jpg', 'truongthihong@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2025-02-25 10:39:13', '2025-02-25 10:39:13', 2, 2),
(30, 'cua-hang-tien-loi-tran-ngoc', 34, 5.00, 'Cửa hàng tiện lợi Ngọc Dung', NULL, 'Kinh doanh', '0972145610', '0972145610', '240', '01', '008', '00310', 'Số 6', 'Số 6, Phường Mai Động, Quận Hoàng Mai, Thành phố Hà Nội, Vietnam', 0.0000000000, 0.0000000000, NULL, 'tranngoc@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-02-26 10:02:57', '2025-02-28 10:45:29', 2, 2),
(31, 'cua-hang-test-1741056010', 40, 10.00, 'Cửa hàng test', NULL, '', '0984356274', '0984356274', '240', '79', '761', '26776', '123', '123, Phường Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, '123@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2025-03-04 09:40:10', '2025-03-04 09:40:10', 2, 2),
(32, 'cua-hang-test-1741657637', 42, 10.00, 'Cửa hàng test', NULL, '', '0984356274', '0984356274', '240', '79', '771', '27190', '123', '123, Phường 02, Quận 10, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, 'email@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2025-03-11 08:47:17', '2025-03-11 08:47:17', 2, 2),
(33, 'cua-hang-test-1743067214', 43, 1.00, 'Cửa hàng test', NULL, '', '0984356274', '0984356274', '240', '79', '771', '27193', '123', '123, Phường 04, Quận 10, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, '3123123@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2025-03-27 16:20:14', '2025-03-27 16:20:14', 2, 2),
(34, 'ch-dien-tu', 46, 10.00, 'CH Dien tu', NULL, '', '0979013165', '0979013165', '240', '01', '006', '00235', 'P112- A7', 'P112- A7, Phường Ngã Tư Sở, Quận Đống Đa, Thành phố Hà Nội, Vietnam', 0.0000000000, 0.0000000000, NULL, 'anbfnn@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2025-04-08 13:35:30', '2025-04-08 13:35:30', 2, 2),
(35, 'test-123', 44, 10.00, 'test 123', NULL, '123', '0984356274', '0984356274', '240', '79', '765', '26935', '29-31 đinh bộ lĩnh', '29-31 đinh bộ lĩnh, Phường 14, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, 'email@gmail.com', 8, 1, 2, 1, 2, 2, 3.25, 1, 0, '2025-04-08 16:31:37', '2025-05-08 08:06:45', 2, 2),
(36, 'cua-hang-cua-pink', 47, 5.00, 'Cua hang cua Pink', NULL, '', '0976654369', '0976654369', '240', '01', '008', '00331', '17 ngõ 41', '17 ngõ 41, Phường Thịnh Liệt, Quận Hoàng Mai, Thành phố Hà Nội, Vietnam', 0.0000000000, 0.0000000000, NULL, 'thepink@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 1, '2025-04-14 14:54:30', '2025-04-14 14:54:30', 2, 2),
(37, 'hai', 48, 10.00, 'Hải', NULL, '', '0906184364', '0906184364', '240', '01', '271', '09703', '19a 91 cầu diễn', '19a 91 cầu diễn, Xã Ba Vì, Huyện Ba Vì, Thành phố Hà Nội, Vietnam', 0.0000000000, 0.0000000000, NULL, 'phamthihaihihi@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-04-18 19:38:37', '2025-04-18 19:38:37', 2, 2),
(38, 'hai-1744982861', 49, 2.00, 'Hải', NULL, '', '0931750255', '0931750255', '240', '79', '770', '27148', 'Thôn Cao Đồng', 'Thôn Cao Đồng, Phường 04, Quận 3, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, 'dwangg32@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-04-18 20:27:41', '2025-04-18 20:27:41', 2, 2),
(39, 'sieu-test', 36, 10.00, 'siêu test', NULL, '', '0787478304', '0787478304', '240', '79', '765', '26935', '30-32 đinh bộ lĩnh', '30-32 đinh bộ lĩnh, Phường 14, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, 'pth.a10.22.philong@gmail.com', 2, 0, 0, 0, 1, 1, 4.5, 1, 0, '2025-05-13 12:45:02', '2025-05-13 12:45:02', 2, 2),
(40, 'mymy', 50, 10.00, 'MYMY', NULL, '', '0902267255', '0902267255', '240', '79', '771', '27190', '42/2 Nguyễn Văn Trỗi', '42/2 Nguyễn Văn Trỗi, Phường 02, Quận 10, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, 'ngothaonguyenhihi@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-05-28 15:28:50', '2025-05-28 15:28:50', 2, 2),
(41, 'cua-hang-ca-tom', NULL, 10.00, 'Cửa hàng cá tôm', NULL, 'Hải sản', '0987654321', '0987654321', '240', '79', '760', '26740', '10-12 Đinh tiên hoàng', '10-12 Đinh tiên hoàng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, 'test1@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-06-04 08:47:13', '2025-06-04 08:47:13', 2, 2),
(42, 'cua-hang-hai-san-tuoi-song', NULL, 10.00, 'Cửa hàng Hải sản tươi sống', NULL, 'Hải sản', '0909090909', '0909090909', '240', '79', '769', '26851', '144 Nam hòa', '144 Nam hòa, Phường Phước Long A, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, 'test2@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-06-04 08:49:58', '2025-06-04 08:49:58', 2, 2),
(43, 'cua-hang-cua-tom', NULL, 10.00, 'Cửa hàng Cua tôm', NULL, 'Hải sản', '0912121212', '0912121212', '240', '79', '765', '26929', '29-31 đinh bộ lĩnh', '29-31 đinh bộ lĩnh, Phường 24, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam', 0.0000000000, 0.0000000000, NULL, 'test3@gmail.com', 0, 0, 0, 0, 0, 0, 0, 1, 0, '2025-06-04 08:53:02', '2025-06-04 08:53:02', 2, 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `alias` (`alias`),
  ADD KEY `register_id` (`register_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `stores`
--
ALTER TABLE `stores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
