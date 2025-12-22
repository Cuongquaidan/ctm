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
-- Cấu trúc bảng cho bảng `customer_register`
--

CREATE TABLE `customer_register` (
  `id` int(11) NOT NULL,
  `google_id` varchar(50) DEFAULT NULL,
  `facebook_id` varchar(50) DEFAULT NULL,
  `apple_id` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL,
  `avatar` varchar(256) DEFAULT NULL,
  `reference_code` varchar(10) NOT NULL,//otp
  `referral_code` varchar(15) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer_register`
--

INSERT INTO `customer_register` (`id`, `google_id`, `facebook_id`, `apple_id`, `phone`, `username`, `email`, `name`, `avatar`, `reference_code`, `referral_code`, `created_at`, `updated_at`) VALUES
(8, NULL, NULL, NULL, '0928952888', NULL, '', 'LÊ ĐỨC TUYỀN', '', '829148', '', '2024-11-15 01:58:54', '2024-11-15 02:00:04'),
(13, NULL, NULL, NULL, '0987654321', NULL, '111@gmail.com', '123123', NULL, '190320', NULL, '2024-11-25 11:17:22', '2024-11-25 11:17:22'),
(57, NULL, NULL, NULL, '0335932682', NULL, '', 'Trần Xuân Phú', '', '337491', '', '2025-01-23 11:18:09', '2025-01-23 11:18:09'),
(62, NULL, NULL, NULL, '0912485033', NULL, '', 'Nguyen Van B', '', '101247', '', '2025-01-23 21:13:22', '2025-01-23 21:13:22'),
(72, NULL, NULL, NULL, '0981283712', NULL, '', 'Nguyễn Phi Long', '', '752265', '0903268186', '2025-03-04 10:10:20', '2025-03-04 10:10:20'),
(73, NULL, NULL, NULL, '0984356271', NULL, '', 'Nguyễn Phi Long', '', '832419', '0984356274', '2025-03-07 10:30:01', '2025-03-07 10:30:01'),
(77, '112836068450986685525', NULL, NULL, '0909905324', NULL, 'xuonggiacong.vyt@gmail.com', 'Gia Công Xưởng', '/avatar/4mdbEfc93PVB9uzezRmIQDmPcyJrwoPj.png', '310529', '', '2025-03-22 13:48:38', '2025-03-22 13:48:38'),
(80, NULL, NULL, NULL, '0857777114', NULL, '', 'Lê Hồng Quân', '', '160531', '0903282380', '2025-04-15 15:53:48', '2025-04-15 15:53:48'),
(83, NULL, NULL, NULL, '0352026688', NULL, '', 'Hoàng Như Quỳnh', '', '416866', '0919102786', '2025-04-15 16:16:33', '2025-04-15 16:16:33'),
(84, NULL, NULL, NULL, '0941111119', NULL, '', 'Duong Khanh Ngoc', '', '902622', '', '2025-05-25 11:54:23', '2025-05-25 11:54:23');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer_register`
--
ALTER TABLE `customer_register`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `phone` (`phone`) USING BTREE,
  ADD KEY `id_google` (`google_id`),
  ADD KEY `facebook_id` (`facebook_id`),
  ADD KEY `apple_id` (`apple_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customer_register`
--
ALTER TABLE `customer_register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
