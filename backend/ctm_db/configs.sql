-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 28, 2025 lúc 07:22 AM
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
-- Cấu trúc bảng cho bảng `configs`
--

CREATE TABLE `configs` (
  `id` int(11) NOT NULL,
  `type` int(11) DEFAULT 0 COMMENT '\r\n',
  `key` varchar(255) DEFAULT NULL,
  `value` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `configs`
--

INSERT INTO `configs` (`id`, `type`, `key`, `value`) VALUES
(1, 1, 'address_1', '29-31 Đinh Bộ Lĩnh, Phường 24, Quận Bình Thạnh, Tp. Hồ Chí Minh'),
(2, 1, 'name_1', 'Sản thương mại điện thử - Công ty Cổ phần HONEYNET'),
(3, 1, 'description_1', '<p><strong>Sản thương mại điện thử - Công ty Cổ phần HONEYNET</strong></p>'),
(4, 1, 'content_1', '&lt;p&gt;Đại học C&amp;ocirc;ng Đo&amp;agrave;n&lt;/p&gt;\r\n'),
(5, 1, 'keyword_1', 'Sàn thương mại điện tử'),
(6, 1, 'address_2', '29-31 Đinh Bộ Lĩnh, Phường 24, Quận Bình Thạnh, Tp Hồ Chí Minh'),
(7, 1, 'name_2', 'Smart Market'),
(8, 1, 'description_2', 'Smart Market'),
(9, 1, 'content_2', '&lt;p&gt;Trade Union University&lt;/p&gt;\r\n'),
(10, 1, 'keyword_2', 'Smart Market'),
(11, 1, 'sendmail_account', 'ncv@honeynet.vn'),
(12, 1, 'sendmail_password', 'ncv.honeynet.vn'),
(13, 1, 'sendmail_domain', 'mail.honeynet.vn'),
(14, 1, 'sendmail_port', '465'),
(15, 1, 'sendmail_contact', ''),
(16, 1, 'sendmail_ssl', 'ssl'),
(17, 1, 'email', 'info@honeynet.vn'),
(18, 1, 'fb_link', '#'),
(19, 1, 'tw_link', ''),
(20, 1, 'yt_link', ''),
(21, 1, 'ggp_link', ''),
(22, 1, 'hotline', '19001094'),
(23, 1, 'phone', '19001094'),
(27, 1, 'logo', NULL),
(30, 1, 'instagram_link', ''),
(31, 1, 'tiktok_link', 'https://www.tiktok.com/@truongdaihoccongdoan'),
(36, 1, 'twitter_link', '#'),
(37, 1, 'whatsapp_link', '#'),
(47, 1, 'container', '80'),
(51, 1, 'copyright_1', 'Phát triển bởi Công ty Cổ phần HONEYNET'),
(52, 1, 'copyright_2', 'Phát triển bởi Công ty Cổ phần Dịch vụ Công nghệ Tin học HPT'),
(57, 1, 'order_link', ''),
(58, 1, 'fax', ''),
(59, 1, 'contact_info', ''),
(60, 1, 'contact_info_bank', ''),
(61, 1, 'elogo', ''),
(62, 1, 'logotext', NULL),
(63, 1, 'appstore_link', '#'),
(64, 1, 'playstore_link', '#'),
(65, 1, 'image', NULL),
(66, 1, 'favicon', NULL),
(67, 1, 'theme_color1', '#f58233'),
(68, 1, 'theme_color2', '#ffc20e');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `configs`
--
ALTER TABLE `configs`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `key` (`key`) USING BTREE,
  ADD KEY `type` (`type`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `configs`
--
ALTER TABLE `configs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
