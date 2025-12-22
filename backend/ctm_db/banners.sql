-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 28, 2025 lúc 07:24 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
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
-- Cấu trúc bảng cho bảng `banners`
--

CREATE TABLE `banners` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `button_link` varchar(250) DEFAULT NULL,
  `button_name` varchar(50) DEFAULT NULL,
  `sale_name` varchar(100) DEFAULT NULL,
  `sale_value` varchar(50) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `is_deleted` int(11) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `banners`
--

INSERT INTO `banners` (`id`, `name`, `description`, `button_link`, `button_name`, `sale_name`, `sale_value`, `image`, `sort_order`, `status`, `is_deleted`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'Giao hàng tận nơi', 'Rau củ chứa nhiều vitamin và khoáng chất tốt cho sức khỏe.', '#', 'Xem thêm', 'Ưu đãi độc quyền', '30% Off', '1/images/banner/1.jpg', 0, 1, 0, '2023-05-09 00:00:00', '2023-11-28 15:04:31', 1, 2),
(2, 'Bộ sưu tập hạt', 'Chúng tôi cung cấp rau và trái cây hữu cơ', '#', 'Xem thêm', 'OFF', '45%', '1/images/banner/2.jpg', 0, 1, 0, '2023-05-09 00:00:00', '2023-11-28 15:01:48', 1, 2),
(3, 'Thực phẩm bổ dưỡng', 'Bắt đầu mua sắm hàng ngày của bạn với một số thực phẩm hữu cơ', '#', 'Xem thêm', 'Thị trường hữu cơ', '', '1/images/banner/3.jpg', 0, 1, 0, '2023-05-19 00:00:00', '2023-11-28 15:01:32', 1, 2),
(4, 'Deal siêu hot cho sản phẩm mới', 'Trứng & Sữa', '#', 'Xem thêm', 'OFF', '5%', '1/images/banner/4.jpg', 0, 1, 0, '2023-05-19 00:00:00', '2023-11-28 15:00:55', 1, 2),
(5, 'Deal siêu hot', 'Hoa quả tươi', '#', 'Xem thêm', 'OFF', '5%', '1/images/banner/5.jpg', 0, 1, 0, '2023-05-19 00:00:00', '2023-11-28 15:00:24', 1, 2),
(6, 'Thịt hữu cơ đã chế biến', 'Vận chuyện tận nơi', '#', 'Xem thêm', 'Shop now', '5%', '1/images/banner/6.jpg', 0, 1, 0, '2023-05-19 00:00:00', '2023-11-28 14:58:15', 1, 2),
(8, 'Mua càng nhiều, tiết kiệm càng lớn', 'Quả hạch & Đồ ăn nhẹ', '#', 'Xem thêm', 'OFF', '5%', '1/images/banner/7.jpg', 0, 1, 0, '2023-05-19 00:00:00', '2023-11-28 14:58:19', 1, 2),
(9, 'Thịt tươi', '', '#', 'Xem thêm', 'Offer', '50%', '1/images/banner/9.jpg', 0, 1, 0, '2023-05-19 00:00:00', '2023-11-28 14:57:31', 1, 2),
(10, 'Nấm tươi ngon', '', '#', 'Xem thêm', 'Offer', '50%', '1/images/banner/10.jpg', 0, 1, 0, '2023-05-19 00:00:00', '2023-11-28 14:57:23', 1, 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
