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
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int(11) UNSIGNED NOT NULL,
  `store_id` int(11) DEFAULT 1,
  `category_ids` varchar(255) DEFAULT NULL,
  `alias` varchar(250) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `file` varchar(250) DEFAULT NULL,
  `meta_title` varchar(250) DEFAULT NULL,
  `meta_keywords` varchar(250) DEFAULT NULL,
  `meta_description` varchar(250) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 0,
  `view` int(11) DEFAULT 0,
  `hot` tinyint(1) DEFAULT 0,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `publish_at` datetime DEFAULT NULL,
  `publish_by` int(11) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `store_id`, `category_ids`, `alias`, `name`, `description`, `content`, `image`, `file`, `meta_title`, `meta_keywords`, `meta_description`, `status`, `view`, `hot`, `updated_at`, `created_at`, `created_by`, `updated_by`, `publish_at`, `publish_by`, `is_deleted`) VALUES
(4, 1, '[\"2\"]', 'bo-tui-5-meo-che-bien-ca-khong-bi-tanh-thom-ngon-kho-cuong', 'Bỏ túi 5 mẹo chế biến cá không bị tanh, thơm ngon khó cưỡng', 'Cá là loại thực phẩm nhiều dinh dưỡng. tuy nhiên cần phải có bước sơ chế kỹ lưỡng. Hãy cùng tìm hiểu ngay những mẹo chế biến cá không bị tanh, thơm ngon nào!', NULL, '1/images/blog/meonauca/1.jpg', NULL, 'Bỏ túi 5 mẹo chế biến cá không bị tanh, thơm ngon khó cưỡng', 'Bỏ túi 5 mẹo chế biến cá không bị tanh, thơm ngon khó cưỡng', 'Bỏ túi 5 mẹo chế biến cá không bị tanh, thơm ngon khó cưỡng', 1, 91, 0, '2024-09-19 15:08:18', '2023-11-30 13:49:22', 2, 30, '2023-11-30 13:49:22', 30, 0),
(5, 1, '[\"3\"]', 'cach-lam-mi-thanh-long-dai-ngon-doc-la-ngay-tai-nha', 'Cách làm mì thanh long dai ngon, độc lạ ngay tại nhà', 'Mì thanh long chưa bao giờ hết hot. Sợi mì màu hồng đỏ đẹp mắt, dai ngon không thể chối từ. Vào bếp cùng Bách hóa XANH nhé!', NULL, '1/images/blog/congthucnauan/1.jpg', NULL, 'Cách làm mì thanh long dai ngon, độc lạ ngay tại nhà', 'Cách làm mì thanh long dai ngon, độc lạ ngay tại nhà', 'Cách làm mì thanh long dai ngon, độc lạ ngay tại nhà', 1, 53, 0, '2024-09-19 15:03:42', '2023-11-30 13:49:51', 2, 30, '2023-11-30 13:49:51', 30, 0),
(6, 1, '[\"3\"]', 'cach-lam-pudding-sua-don-gian-mem-min-nung-ninh', 'Cách làm pudding sữa đơn giản, mềm mịn núng nính', 'Hôm nay, Bách hóa XANH sẽ hướng dẫn bạn cách làm pudding sữa đơn giản chỉ với 3 bước nhanh chóng. Cùng vào bếp nhé!', NULL, '1/images/blog/pudding/1.jpg', NULL, 'Cách làm pudding sữa đơn giản, mềm mịn núng nính', 'Cách làm pudding sữa đơn giản, mềm mịn núng nính', 'Cách làm pudding sữa đơn giản, mềm mịn núng nính', 1, 91, 0, '2024-09-19 14:28:52', '2023-11-30 13:54:13', 2, 30, '2023-11-30 13:54:13', 30, 0),
(7, 1, '[\"4\"]', 'di-an-banh-canh-ha-lan-dac-san-dak-lak-tru-danh', 'Đi ăn bánh canh Hà Lan - Đặc sản Đắk Lắk trứ danh', 'Bánh canh Hà Lan là một món ăn ngon, nổi tiếng ở Đắk Lắk. Món ăn này có hương vị như thế nào? Ăn ở đâu ngon? Cùng tìm hiểu ngay nhé!', NULL, '1/images/blog/banhcanh/1.jpg', NULL, 'Đi ăn bánh canh Hà Lan - Đặc sản Đắk Lắk trứ danh', 'Đi ăn bánh canh Hà Lan - Đặc sản Đắk Lắk trứ danh', 'Đi ăn bánh canh Hà Lan - Đặc sản Đắk Lắk trứ danh', 1, 102, 0, '2024-09-19 14:27:34', '2023-11-30 13:59:28', 2, 30, '2023-11-30 13:59:28', 30, 0),
(8, 1, '[\"5\"]', 'che-do-an-dia-trung-hai-la-gi-loi-ich-va-cach-thuc-hien', 'Chế độ ăn Địa Trung Hải là gì? Lợi ích và cách thực hiện', 'Chế độ ăn Địa Trung Hải được biết đến là chế độ ăn rất tốt, giúp giảm tỷ lệ tử vong ở những người mắc phải các bệnh mạn tính. Vậy chế độ ăn Địa Trung Hải là gì? Cùng tìm hiểu ngay nhé!', NULL, '1/images/blog/diatrunghai/1.jpg', NULL, 'Chế độ ăn Địa Trung Hải là gì? Lợi ích và cách thực hiện', 'Chế độ ăn Địa Trung Hải là gì? Lợi ích và cách thực hiện', 'Chế độ ăn Địa Trung Hải là gì? Lợi ích và cách thực hiện', 1, 92, 1, '2024-09-19 14:26:58', '2023-11-30 14:09:29', 2, 30, '2023-11-30 14:09:29', 30, 0),
(10, 2, '[\"8\"]', 'chinh-sach-bao-mat', 'Chính sách bảo mật', 'CHÍNH SÁCH BẢO MẬT VÀ XỬ LÝ DỮ LIỆU CÁ NHÂN', NULL, NULL, NULL, 'Chính sách bảo mật', 'Chính sách bảo mật', 'Chính sách bảo mật', 1, 67, 1, '2025-06-09 13:57:13', '2025-02-24 09:49:41', 2, 2, '2025-02-24 09:49:41', 2, 0),
(11, 2, '[\"8\"]', 'co-che-giai-quyet-tranh-chap', 'Cơ chế giải quyết tranh chấp', 'CƠ CHẾ GIẢI QUYẾT KHIẾU NẠI, TRANH CHẤP', NULL, NULL, NULL, 'Cơ chế giải quyết tranh chấp', 'Cơ chế giải quyết tranh chấp', 'Cơ chế giải quyết tranh chấp', 1, 84, 1, '2025-06-09 13:43:49', '2025-02-24 09:49:50', 2, 2, '2025-02-24 09:49:50', 2, 0),
(12, 2, '[\"8\"]', 'quy-che-hoat-dong', 'Quy chế hoạt động', 'QUY CHẾ HOẠT ĐỘNG', NULL, NULL, NULL, 'Quy chế hoạt động', 'Quy chế hoạt động', 'Quy chế hoạt động', 1, 99, 1, '2025-06-09 13:52:17', '2025-02-24 09:51:12', 2, 2, '2025-02-24 09:51:12', 2, 0),
(13, 2, '[\"5\",\"4\"]', 'loai-qua-duoc-danh-gia-la-thuc-pham-tot-nhat-the-gioi-viet-nam-trong-nhieu', 'Loại quả được đánh giá là thực phẩm tốt nhất thế giới, Việt Nam trồng nhiều', '(Dân trí) - Với hàm lượng dinh dưỡng vượt trội cùng hàng loạt nghiên cứu chứng minh hiệu quả với sức khỏe tim mạch, thần kinh và miễn dịch, quả bơ xứng đáng là một \"siêu thực phẩm\".', NULL, NULL, NULL, 'Loại quả được đánh giá là thực phẩm tốt nhất thế giới, Việt Nam trồng nhiều', 'Loại quả được đánh giá là thực phẩm tốt nhất thế giới, Việt Nam trồng nhiều', 'Loại quả được đánh giá là thực phẩm tốt nhất thế giới, Việt Nam trồng nhiều', 1, 62, 1, '2025-04-11 16:16:52', '2025-04-11 10:24:01', 2, 2, '2025-04-11 10:24:01', 2, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `alias` (`alias`),
  ADD KEY `store_id` (`store_id`),
  ADD KEY `category_ids` (`category_ids`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
