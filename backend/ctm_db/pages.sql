-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 28, 2025 lúc 07:21 AM
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
-- Cấu trúc bảng cho bảng `pages`
--

CREATE TABLE `pages` (
  `id` int(11) UNSIGNED NOT NULL,
  `alias` varchar(150) DEFAULT NULL,
  `store_id` int(11) NOT NULL DEFAULT 1,
  `name` varchar(150) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `meta_title` varchar(250) DEFAULT NULL,
  `meta_keywords` varchar(250) DEFAULT NULL,
  `meta_description` varchar(250) DEFAULT NULL,
  `temp_id` int(2) DEFAULT 1,
  `params` longtext DEFAULT NULL,
  `sort_order` int(11) DEFAULT 1,
  `status` int(1) NOT NULL,
  `is_home` tinyint(1) DEFAULT 0,
  `is_login` tinyint(1) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `pages`
--

INSERT INTO `pages` (`id`, `alias`, `store_id`, `name`, `description`, `meta_title`, `meta_keywords`, `meta_description`, `temp_id`, `params`, `sort_order`, `status`, `is_home`, `is_login`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'home', 2, 'Sàn thương mại điện tử', 'Sàn thương mại điện tử', 'Sàn thương mại điện tử', 'Sàn thương mại điện tử', 'Sàn thương mại điện tử', 0, '[{\"quanRow\":\"12\",\"className\":\"pt-2\",\"idName\":\"\",\"bgImage\":\"\",\"container\":\"80\",\"data\":[{\"classCol\":\"12\",\"className\":\"\",\"idName\":\"\",\"data\":[{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"0\",\"type\":\"banners\",\"content\":\"\",\"id\":[1,2,3,8,6,5,4],\"layout\":\"1\",\"order\":\"\"}]}]},{\"quanRow\":\"9-3\",\"className\":\"\",\"idName\":\"\",\"bgImage\":\"\",\"container\":\"\",\"data\":[{\"classCol\":\"3\",\"className\":\"\",\"idName\":\"\",\"data\":[{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"Danh m\\u1ee5c\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"0\",\"type\":\"productscat\",\"content\":\"\",\"id\":[67,62,65,74,71,78,73,72,63,66,76,70,69,77,80,79,61,81,68],\"layout\":\"1\",\"order\":\"\"},{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"advertisement\",\"content\":\"\",\"id\":\"3\",\"layout\":\"5\",\"order\":\"\"},{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"advertisement\",\"content\":\"\",\"id\":\"4\",\"layout\":\"1\",\"order\":\"\"},{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"S\\u1ea3n ph\\u1ea9m th\\u1ecbnh h\\u00e0nh\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"productshot\",\"content\":\"\",\"id\":[-1],\"layout\":\"1\",\"order\":\"id_desc\",\"limit\":\"4\"}]},{\"classCol\":\"9\",\"className\":\"\",\"idName\":\"\",\"data\":[{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"Gi\\u00e1 T\\u1ed1t H\\u00f4m Nay\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\\u0110\\u1eebng b\\u1ecf l\\u1ee1 c\\u01a1 h\\u1ed9i gi\\u1ea3m gi\\u00e1 \\u0111\\u1eb7c bi\\u1ec7t ch\\u1ec9 trong h\\u00f4m nay.\"},\"intervale\":\"0\",\"type\":\"flashsale\",\"content\":\"\",\"id\":[-1],\"layout\":\"1\",\"order\":\"id_desc\",\"limit\":\"12\"},{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"T\\u00ecm ki\\u1ebfm theo danh m\\u1ee5c\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"C\\u00e1c danh m\\u1ee5c n\\u1ed5i b\\u1eadt trong tu\\u1ea7n\"},\"intervale\":\"section-b-space\",\"type\":\"productscat\",\"content\":\"\",\"id\":[67,62,65,74,71,78,73,72,63,66,76,70,69,77,79,75,61,68],\"layout\":\"2\",\"order\":\"\"},{\"classCol\":6,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"advertisement\",\"content\":\"\",\"id\":\"1\",\"layout\":\"4\"},{\"classCol\":6,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"advertisement\",\"content\":\"\",\"id\":\"2\",\"layout\":\"4\"},{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"B\\u1ea1n c\\u00f3 th\\u1ec3 th\\u00edch\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"Kh\\u00e1m Ph\\u00e1 H\\u01b0\\u01a1ng V\\u1ecb Tinh T\\u1ebf - T\\u1eadn H\\u01b0\\u1edfng Ni\\u1ec1m Vui \\u1ea8m Th\\u1ef1c!\"},\"intervale\":\"section-b-space\",\"type\":\"productshot\",\"content\":\"\",\"id\":[-1],\"layout\":\"3\",\"order\":\"id_desc\",\"limit\":\"12\"},{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"advertisement\",\"content\":\"\",\"id\":\"5\",\"layout\":\"6\",\"order\":\"\"},{\"classCol\":8,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"advertisement\",\"content\":\"\",\"id\":\"1\",\"layout\":\"4\",\"order\":\"\"},{\"classCol\":4,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"advertisement\",\"content\":\"\",\"id\":\"8\",\"layout\":\"7\",\"order\":\"\"},{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"S\\u1ea3n ph\\u1ea9m b\\u00e1n ch\\u1ea1y\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\\u0110\\u1ec9nh Cao H\\u01b0\\u01a1ng V\\u1ecb - Chinh Ph\\u1ee5c \\u0110\\u00f2i H\\u1ecfi \\u0102n U\\u1ed1ng C\\u1ee7a B\\u1ea1n!\"},\"intervale\":\"section-b-space\",\"type\":\"productshot\",\"content\":\"\",\"id\":[-1],\"layout\":\"4\",\"order\":\"id_desc\",\"limit\":\"12\"},{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"advertisement\",\"content\":\"\",\"id\":\"6\",\"layout\":\"3\",\"order\":\"\"},{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"Blog N\\u1ed5i b\\u1eadt\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"Chinh Ph\\u1ee5c N\\u1ea5u \\u0102n C\\u00f9ng N\\u00e9t \\u0110\\u1ed9c \\u0110\\u00e1o v\\u00e0 H\\u01b0\\u01a1ng V\\u1ecb \\u0110\\u1eb3ng C\\u1ea5p!\"},\"intervale\":\"0\",\"type\":\"newshot\",\"content\":\"\",\"id\":[-1],\"layout\":\"1\",\"order\":\"id_desc\",\"limit\":\"4\"}]}]},{\"quanRow\":\"12\",\"className\":\"\",\"idName\":\"\",\"bgImage\":\"\",\"container\":\"\",\"data\":[{\"classCol\":\"12\",\"className\":\"\",\"idName\":\"\",\"data\":[{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"\"},\"intervale\":\"section-b-space\",\"type\":\"contact\",\"content\":\"\",\"id\":\"\",\"layout\":\"1\",\"order\":\"\"}]}]}]', 1, 1, 1, 0, '2023-05-23 11:13:27', '2025-07-17 09:26:38', 1, 61),
(4, 'test', 2, 'Test', 'Test', 'Test', 'Test', 'Test', 0, '[{\"quanRow\":\"12\",\"className\":\"\",\"idName\":\"\",\"bgImage\":null,\"container\":\"100\",\"data\":[{\"classCol\":\"12\",\"className\":\"\",\"idName\":\"\",\"data\":[{\"classCol\":12,\"className\":\"\",\"idName\":\"\",\"name\":{\"1\":\"A\"},\"link\":{\"1\":\"\"},\"des\":{\"1\":\"C\"},\"intervale\":\"0\",\"type\":\"custom\",\"content\":\"\",\"id\":0,\"layout\":\"\"}]}]}]', 1, 1, 0, 0, '2025-08-20 13:45:16', '2025-08-20 15:48:50', 1, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `alias` (`alias`) USING BTREE,
  ADD KEY `store_id` (`store_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
