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
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `tier_id` tinyint(1) NOT NULL DEFAULT 1,
  `point` int(11) DEFAULT 0,
  `point_used` int(11) DEFAULT 0,
  `referral_code` varchar(20) DEFAULT NULL,
  `fullname` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address_id` int(11) DEFAULT 0,
  `country_id` varchar(10) DEFAULT NULL,
  `province_id` varchar(10) DEFAULT NULL,
  `district_id` varchar(10) DEFAULT NULL,
  `ward_id` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `fulladdress` text DEFAULT NULL,
  `gender` int(1) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `change_username` tinyint(1) DEFAULT 0,
  `password` varchar(150) DEFAULT NULL,
  `facebook_id` varchar(50) DEFAULT NULL,
  `google_id` varchar(50) DEFAULT NULL,
  `apple_id` varchar(50) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `cnote` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(1) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`id`, `tier_id`, `point`, `point_used`, `referral_code`, `fullname`, `phone`, `email`, `address_id`, `country_id`, `province_id`, `district_id`, `ward_id`, `address`, `fulladdress`, `gender`, `birthday`, `username`, `change_username`, `password`, `facebook_id`, `google_id`, `apple_id`, `avatar`, `cnote`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`, `is_deleted`) VALUES
(1, 1, 0, 0, '', 'Everest Coffee', '0356261184', 'lnatuyet.c4nthoc@gmail.com', 0, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2001-03-19', NULL, 0, '$2y$10$aKBaUwZn4aTKtJKEKyD4pOjRPnREH.GPsIztxSg8g5z63UfcNDGC6', NULL, NULL, NULL, '', NULL, 1, '2024-11-13 09:42:02', '2024-11-13 09:42:36', NULL, NULL, 0),
(2, 1, 0, 0, '', 'Thanh Duy', '0369369429', 'nguyenduy701@gmail.com', 2, NULL, NULL, NULL, NULL, NULL, NULL, 2, '1995-09-11', NULL, 0, '$2y$10$DTdM22Ovf38ajo.rZMXOOe9X0d6uOoZupfijcu1ExD7uYFtBe0QjG', NULL, '100138449317747977119', NULL, '', NULL, 1, '2024-11-13 09:49:52', '2024-11-13 09:57:01', NULL, NULL, 0),
(3, 1, 0, 0, '', 'Lành thu hằng', '0857201164', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$avtRxvROAS0WvdGk/TZONOiSeEe6SJtPe9uduuO8hFtPbfMJd0GEq', NULL, NULL, NULL, '', NULL, 1, '2024-11-13 11:59:43', '2024-11-13 11:59:43', NULL, NULL, 0),
(4, 1, 0, 0, '', 'Nguyễn đức dũng', '0988616356', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$B6xFCPirbeZ/8WFXzD0sZ.llbf2y1HwpOJE6EYMY5Y5nol4YrfHDS', NULL, NULL, NULL, '', NULL, 1, '2024-11-13 12:02:01', '2024-11-13 12:02:01', NULL, NULL, 0),
(5, 1, 457, 0, '', 'Nguyễn Phi Long', '0984356274', '', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$QAvp34TIbys2O8pzo5ctvugyq1hp/mLQ82GZk2R.AC3f7T2u/9F/6', NULL, NULL, NULL, '', NULL, 1, '2024-11-15 09:07:53', '2025-02-17 09:24:42', NULL, NULL, 1),
(6, 1, 0, 0, '', 'Kiều trọng tám', '0988723961', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$TLYPc0ApI78zJvDyLBKoi.lVcEH4mqkR35yb58l.pWSNo1qzcjWt.', NULL, NULL, NULL, '', NULL, 1, '2024-11-19 19:04:14', '2024-11-19 19:04:14', NULL, NULL, 0),
(7, 1, 0, 0, '0903282380', 'Nguyễn Cẩm Hà', '0966896926', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$UE6/Nxq/MoznZbksMDe2VOoE5REf8beZnLDIFe8jEbMm5AGhzVlvK', NULL, NULL, NULL, '', NULL, 1, '2024-11-21 08:58:00', '2024-11-21 08:58:00', NULL, NULL, 0),
(8, 1, 0, 0, '0903282380', '123123123', '0931234567', '123@gmail.com', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$zSVaVFypTlZMQZOrXPouhuYR697ot1xTtv5UGZyAlGON75uPAz9w2', NULL, NULL, NULL, NULL, NULL, 1, '2024-11-22 10:32:51', '2024-11-22 10:32:51', NULL, NULL, 1),
(9, 1, 0, 0, '0903282380', 'Phạm Thị Chuyền', '0964035152', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$WpYiw1u9jHtQHSTGNvmz5uHtggtKNYGovyD2lqm1pYs0bhT9sy.XO', NULL, NULL, NULL, '', NULL, 1, '2024-11-26 10:20:05', '2024-11-26 10:20:05', NULL, NULL, 0),
(10, 1, 0, 0, '0931234567', 'Vũ Trọng Hải', '0969187444', 'hv299258@gmail.com', 0, NULL, NULL, NULL, NULL, NULL, NULL, 2, '1990-12-09', NULL, 0, '$2y$10$jaFc8m83AoCHC3K2suC97eaVNOVY9wgUi6EzEZy3vlsilm.rrfnS2', NULL, NULL, NULL, '', NULL, 1, '2024-12-02 22:13:48', '2024-12-02 22:31:52', NULL, NULL, 1),
(11, 1, 0, 0, '0969187444', 'Vũ Trọng Hải', '0867610522', 'xnkcahoiboucqualifood@gmail.com', 0, NULL, NULL, NULL, NULL, NULL, NULL, 2, '1990-12-09', NULL, 0, '$2y$10$WSGEPkMu5E5X50k31WdsXuxGb2yAWj1/kRMQp9NxKhyRVzryEFTka', NULL, NULL, NULL, '', NULL, 1, '2024-12-07 09:33:17', '2024-12-07 09:33:48', NULL, NULL, 1),
(12, 1, 0, 0, '0931234567', 'Hoàng Thị Lan', '0384138396', 'lanth@chothongminh.com.vn', 0, '240', '79', '0', '', '123', '123, Thành phố Hồ Chí Minh, Vietnam', NULL, NULL, NULL, 0, '$2y$10$/IzyLrB5D1v09VlIsdfrW.ij4V11cV5XmFpEjnjsOadShfRgiyjNa', NULL, NULL, NULL, '', '', 0, '2024-12-08 19:23:33', '2025-01-11 18:23:59', NULL, 1, 1),
(13, 1, 0, 0, '0903282380', 'Phan Anh', '0362448666', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$P6wy5GZYzwma/iLtFUGzLOzZx4Jzq4sAKjNqEPE1ffjKKfk/Emhyi', NULL, NULL, NULL, '', NULL, 1, '2024-12-08 19:27:18', '2024-12-08 19:27:18', NULL, NULL, 1),
(14, 1, 0, 0, '0903282380', 'Văn Thị Minh Lan', '0395856889', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$OgaXyJrupKK7.e6APSqDuOvdchYQAaQISAyNvQeJbS3rG7y0mUc.u', NULL, NULL, NULL, '', NULL, 1, '2024-12-08 19:44:58', '2024-12-08 19:44:58', NULL, NULL, 0),
(15, 1, 0, 0, '0395856889', 'Trình Hữu Công Minh', '0903282380', 'minhthc@gmail.com', 17, NULL, NULL, NULL, NULL, NULL, NULL, 2, '1977-09-11', NULL, 0, '$2y$10$XuXxXhXE2Gbk574d5pKKD.JW2VmFdvj10jUt5LJ.DkLmcxNUpq7Km', NULL, NULL, NULL, '', NULL, 1, '2024-12-08 19:48:47', '2025-03-28 11:35:09', NULL, NULL, 0),
(16, 1, 0, 0, '0395856889', 'Trần Thị Thọ', '0917876822', '', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$n6jzQVEx4mHdftdNAOCPKu.5XloNsWz7jkLSjH1teRLqzmeG6SoVG', NULL, NULL, NULL, '', NULL, 1, '2024-12-08 20:01:56', '2025-02-11 16:03:52', NULL, NULL, 0),
(17, 1, 0, 0, '0917876822', 'Lê Thị Dung', '0386690626', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$He0y5.C4mOQ.zaYEuOshXeZRx1oLCFFv1Fq8B0VRGpJuODaIpyDAW', NULL, NULL, NULL, '', NULL, 1, '2024-12-08 20:03:17', '2024-12-08 20:03:17', NULL, NULL, 0),
(18, 1, 0, 0, '0386690626', 'Lê Thị Loan', '0986431899', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$xR.Xydw7fyyFhn7hcyI6c.ie/dOLFLi0jd1l0ASbJ7ZfVRjXiRsii', NULL, NULL, NULL, '', NULL, 1, '2024-12-08 20:04:30', '2024-12-08 20:04:30', NULL, NULL, 0),
(19, 1, 0, 0, '0986431899', 'Nguyễn Mạnh Tuấn', '0968664696', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$LIrTfstDwrtbp8ZvBmdFyuqlDVCX8QWmeQtQwYLniVY/bthLLb8DS', NULL, NULL, NULL, '', NULL, 1, '2024-12-08 20:07:40', '2024-12-08 20:07:40', NULL, NULL, 0),
(20, 1, 0, 0, '0986431899', 'Nguyễn Thị hà', '0823314866', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$Gbc.kLWKS9uo68bzFQH65uVP6aaxgrCc5ocVNjcPMFQIHK/tYcItS', NULL, NULL, NULL, '', NULL, 1, '2024-12-08 20:11:38', '2024-12-08 20:11:38', NULL, NULL, 0),
(21, 1, 0, 0, '0823314866', 'Đào Văn Quyết', '0983631738', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$us9tMDV1QfQqE7y8t4PT/Oe5hYAMzKgaeCrlHulOcRZ/Di/Fxg.iu', NULL, NULL, NULL, '', NULL, 1, '2024-12-08 20:22:18', '2024-12-08 20:22:18', NULL, NULL, 1),
(22, 1, 0, 0, '0903282380', 'Thu Uyên', '0983670883', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$Yxv/9keHT4ezyRNsiQRBiuT3fJU8tArS.5awvVFsu5MtXC93ukKj6', NULL, NULL, NULL, '', NULL, 1, '2024-12-09 08:47:06', '2025-01-23 20:35:53', NULL, NULL, 1),
(23, 1, 0, 0, '0986431899', 'Phạm Thu Hường', '0849416886', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$UWnVoPVXAUPLlW3JLES7fexmvIycOwtaTx6tTYg6NZGAbLY1KqiN2', NULL, NULL, NULL, '', NULL, 1, '2024-12-10 11:49:47', '2024-12-10 11:49:47', NULL, NULL, 0),
(24, 1, 0, 0, '', 'giahuy', '0903268186', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$lzh.bgXiZivKx343AYaLFe/dCGGqyMnxzEUNrwFTkYrMhAcHoIYCy', NULL, NULL, NULL, '', NULL, 1, '2024-12-10 13:37:56', '2025-02-11 15:41:46', NULL, NULL, 1),
(25, 1, 0, 0, '', 'hightland', '0976654369', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$EfhtMYhaj8JBVAZRnwkLB.x4RavUxMxkSVgXLcxiHysStYrimDaA2', NULL, NULL, NULL, '', NULL, 1, '2024-12-13 21:07:18', '2025-01-23 21:15:47', NULL, NULL, 1),
(26, 1, 0, 0, '0903282380', 'Tran Hưng Dao', '0974532560', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$9fT/GLppti4dekkQDCPsKeCYcduV/VO6aaOF85zJQ.iyoaunSS82y', NULL, NULL, NULL, '', NULL, 1, '2024-12-14 10:21:52', '2024-12-14 10:21:52', NULL, NULL, 0),
(27, 1, 0, 0, '0983631738', 'Nguyễn Thị Hoàn', '0375895499', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$GBa0Z4GIt5j6BVwvG8A.Zu22jWWZDd/YfbjQuTPQzMumXMm4MMwmC', NULL, NULL, NULL, '', NULL, 1, '2024-12-14 20:56:39', '2024-12-14 20:56:39', NULL, NULL, 0),
(28, 1, 0, 0, '0375895499', 'Nguyễn Thị Chín', '0385170958', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$4Bu8WiHjzoweWU/3wN7TsegjDV/WFAFOEbK9.qS8D1GD/yt6RKj6.', NULL, NULL, NULL, '', NULL, 1, '2024-12-14 21:01:58', '2024-12-14 21:01:58', NULL, NULL, 0),
(29, 1, 0, 0, '0903282380', 'Vũ Thuỳ Dung', '0944883355', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$KqZCtWmRaAB/MZuh4JR8DeMFgFdW7pUivlOSVWNH/zryJLxn/DeaS', NULL, NULL, NULL, '', NULL, 1, '2024-12-14 22:40:10', '2024-12-14 22:40:10', NULL, NULL, 1),
(30, 1, 0, 0, '0944883355', 'Nguyễn Thị Hoa', '0868273511', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$tnQKdFp3r4K1uBe2mtoyfOyG0xA2Ybxm/hKtadopOSAvBOmZcUM1W', NULL, NULL, NULL, '', NULL, 1, '2024-12-14 22:43:01', '2024-12-14 22:43:01', NULL, NULL, 0),
(31, 1, 0, 0, '0868273511', 'Nguyễn thị thanh', '0975725388', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$jMcVIV9svoT5IizFmQjUmuM5miWXV8PlFkRhlw.OkVggx4QMbpvq.', NULL, NULL, NULL, '', NULL, 1, '2024-12-15 07:55:38', '2024-12-15 07:55:38', NULL, NULL, 0),
(32, 4, 0, 0, '0903282380', 'Trương Thị Hồng', '0916860521', 'truongthihong@gmail.com', 13, '240', '01', '008', '00337', 'Trương Định', 'Trương Định, Phường Hoàng Liệt, Quận Hoàng Mai, Thành phố Hà Nội, Vietnam', NULL, NULL, NULL, 0, '$2y$10$ky7NfkaEozv0.xWnLuCXDezaYZpR.GWn2cySz6SEfCr37qqNvbCKO', NULL, NULL, NULL, '', '', 1, '2024-12-16 11:43:58', '2025-02-27 11:00:15', NULL, 2, 0),
(33, 1, 0, 0, '0395856889', 'Nguyễn Như Phước', '0979690466', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$ZH9m5f8U6wB18YHw0Fgf5.gVJPiNHu0xdjAXzwS28S0uI/dJPrAue', NULL, NULL, NULL, '', NULL, 1, '2024-12-16 11:46:36', '2024-12-16 11:46:36', NULL, NULL, 0),
(34, 1, 0, 0, '0979690466', 'Nguyễn Thị Kim Tuyến', '0986495606', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$/BHy1Ym1OFC7gZQmAE6SluFgK1QI4lc3loy6f2tFVcP8BAGkAdCG6', NULL, NULL, NULL, '', NULL, 1, '2024-12-16 11:50:32', '2024-12-16 11:50:32', NULL, NULL, 0),
(35, 1, 0, 0, '0979690466', 'Nguyễn Thị Hải', '0369615718', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$1RuXQ/VHoGDazKeV85hea.dWIxi.c1eVuwXJk.dOG8NLs6s5RSOXe', NULL, NULL, NULL, '', NULL, 1, '2024-12-16 11:52:47', '2024-12-16 11:52:47', NULL, NULL, 0),
(36, 1, 0, 0, '0979690466', 'Cô Thảnh', '0365250490', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$wdDVLND.3Yq.CWCaiSbYoeV7aeBz9MOGTisgtousxBt5M2uL33XOC', NULL, NULL, NULL, '', NULL, 1, '2024-12-16 11:56:25', '2024-12-16 11:56:25', NULL, NULL, 0),
(37, 1, 0, 0, '0979690466', 'Nguyễn Xuân Du', '0924531668', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$gHCYG1WI.AjvLoB.ZFMFWeR6jsdDMjymde6AB7hdSCBxbMNUOJ6ea', NULL, NULL, NULL, '', NULL, 1, '2024-12-16 11:58:18', '2024-12-16 11:58:18', NULL, NULL, 0),
(38, 1, 0, 0, '0375895499', 'Trần Thị Lan', '0979574258', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$JXlP6DIWtdBr8ESa3JTbOuaI9hyTlp8lUfJbnOZVxbnNA2eFNK7qe', NULL, NULL, NULL, '', NULL, 1, '2024-12-17 13:09:04', '2024-12-17 13:09:04', NULL, NULL, 0),
(39, 1, 0, 0, '0979690466', 'Vĩnh Thụ', '0334911828', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$KizOGTRtWVdTrBSjj0CHvObT0egrP3etPDDnag/8CDrl3gvVHQgUi', NULL, NULL, NULL, '', NULL, 1, '2024-12-17 13:11:05', '2024-12-17 13:11:05', NULL, NULL, 0),
(40, 1, 0, 0, '0979690466', 'Bà Tí', '0988817492', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$qCkE0qGKBFBxi2ZeR99HZe2yyNOYLBfyiwagSsRnzHJCP/dkzYuze', NULL, NULL, NULL, '', NULL, 1, '2024-12-17 13:12:19', '2024-12-17 13:12:19', NULL, NULL, 0),
(41, 1, 0, 0, '0988817492', 'Bà Tân', '0384772708', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$b8dGry.09MAcyLIzT1ShsOj4W/7x13bK0MznbrWqqiYspCvUyMAu.', NULL, NULL, NULL, '', NULL, 1, '2024-12-17 13:13:45', '2024-12-17 13:13:45', NULL, NULL, 0),
(42, 1, 0, 0, '0384772708', 'Nguyễn Thị Hoa', '0982920186', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$pPQ8l1/Gh57eyRFggNL9i.CR3EXE2gRN2cWdz4vJKQ2aT00swN1ui', NULL, NULL, NULL, '', NULL, 1, '2024-12-17 13:17:13', '2024-12-17 13:17:13', NULL, NULL, 0),
(43, 1, 0, 0, '', 'Nguyễn Văn A', '0335849392', '', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$9hQwGT1ycHoL7uoFZVxoWOdv/bXHNsap04JatR4Ogl18lJfPWVZ/W', NULL, NULL, NULL, '', NULL, 1, '2025-01-02 15:01:41', '2025-02-07 09:38:43', NULL, 1, 1),
(44, 1, 0, 0, '', 'Nguyễn Duy', '0988291649', 'ndthanhduy911@gmail.com', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$bOP.k/q5s4eHKcCHW4ObGu5hKJcBbRL8kQQhiS7MgbA1BHRkTY0sa', NULL, '118112999307942606884', NULL, '/avatar/aLrQuYkRzQHaCkXj4NqYPotExDDPiqvX.png', NULL, 1, '2025-01-17 14:40:43', '2025-01-17 14:40:43', NULL, NULL, 0),
(45, 1, 0, 0, '0984356274', 'Lương Trực', '0787478304', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$SYReucWrnwExfrzzQ6AX2eGCcCW7sGWJIY5c8uGDZgG2gU5neb372', NULL, NULL, NULL, '', NULL, 1, '2025-01-22 16:35:12', '2025-01-22 16:35:12', NULL, NULL, 0),
(46, 1, 2, 0, '0903282380', 'Trần Xuân Phú', '0335932683', '', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$xgpWCoO.cotwaPsSHvDqm.6Dw55WBJX2OjwokEBc7aLvNQlTAqpiK', NULL, NULL, NULL, '', NULL, 1, '2025-01-23 10:00:24', '2025-01-23 10:00:24', NULL, NULL, 0),
(47, 1, 28, 0, '0984356274', 'Hoàng Hải', '0773718771', '', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$4FHlR5w8Huu1hYW58hrk2e9SXj4iIUjtvEWZjIWb0JSay4QB2H/2C', NULL, NULL, NULL, '', NULL, 1, '2025-01-23 11:11:20', '2025-02-07 09:31:20', NULL, NULL, 0),
(48, 1, 0, 0, '', 'Phạm Hải', '0906184364', '', 15, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$6i/9iurpkTDEPR2u7kDdNuENWDDmQpaFWpWXvVRCsOqKd7OCWBVdO', NULL, NULL, NULL, '', NULL, 1, '2025-01-23 17:01:15', '2025-01-23 17:01:15', NULL, NULL, 0),
(49, 1, 0, 0, '0903282380', 'Đinh Hằng', '0983312426', '', 7, NULL, NULL, NULL, NULL, NULL, NULL, 1, '1977-10-10', NULL, 0, '$2y$10$PGWdNrpdNhq2OLYnmK4EO.fCvDZ70z6CZB8/LFn7Fv3U9cLMqme0a', NULL, NULL, NULL, '', NULL, 1, '2025-01-23 20:41:30', '2025-03-16 20:19:39', NULL, NULL, 0),
(50, 3, 0, 0, '0903282380', 'Nguyễn Thị Điệp', '0335849892', 'diep@gmail.com', 0, '240', '01', '268', '09568', 'Phú Lãm', 'Phú Lãm, Phường Phú Lãm, Quận Hà Đông, Thành phố Hà Nội, Vietnam', NULL, NULL, NULL, 0, '$2y$10$ycAr/aDvOSB6wSb.lbDo6.L0GQ.NG7/wZ2EJ8htnaAcsrxOdFr0ne', NULL, NULL, NULL, '', '', 1, '2025-02-07 10:45:53', '2025-02-12 14:49:23', NULL, 2, 0),
(51, 1, 0, 0, '0903282380', 'Doãn Mạnh Hiền', '0963693431', '', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$EUYZffw/ph2Gv6YtXZm3iOqt8kSyoiyYtaovUqKWpIuMnE18wvD1O', NULL, NULL, NULL, '', NULL, 1, '2025-02-11 15:46:42', '2025-02-11 15:46:42', NULL, NULL, 0),
(52, 1, 0, 0, '0903282380', 'Nguyễn Thị Thanh Hiền', '0969459963', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$4SbbwAiWaxXXfD1059F4OOoJ9z70DIElhspfYttA70MotZVUZwOdK', NULL, NULL, NULL, '', NULL, 1, '2025-02-11 16:14:42', '2025-02-11 16:14:42', NULL, NULL, 0),
(53, 4, 63, 0, NULL, 'Nguyễn Văn A', '0903268186', 'abc@gmail.com', 11, '240', '01', '006', '00235', 'Trường ĐH Thủy Lợi', 'Trường ĐH Thủy Lợi, Phường Ngã Tư Sở, Quận Đống Đa, Thành phố Hà Nội, Vietnam', NULL, NULL, NULL, 0, '$2y$10$kHcrAzWqCQflpTQQBUmxlODfivmBe4TrAAsI0vY4hzVhzAPRqH0UG', NULL, NULL, NULL, NULL, 'Trường ĐH Thủy Lợi', 1, '2025-02-12 14:40:08', '2025-04-08 14:18:56', 2, 2, 0),
(54, 1, 0, 0, '', 'Nguyễn Phi Long', '0984356274', '', 12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$MpUbKox/b85iq9T5kbxZ2.d3Ruxg3eGLV0FFy0w.4I8RdEPtIUcJq', NULL, NULL, NULL, '', NULL, 1, '2025-02-17 10:46:50', '2025-02-17 10:46:50', NULL, NULL, 1),
(55, 1, 0, 0, NULL, '312312321', '0984356274', 'email@gmail.com', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$NZVjJTZ78snVbCMeEqZsY.SYnIoenoRhfon2WFtS0nAvuMDON64vi', NULL, NULL, NULL, NULL, NULL, 1, '2025-03-11 09:04:10', '2025-03-11 09:04:10', NULL, NULL, 1),
(56, 1, 0, 0, NULL, '312312321', '0984356274', 'email@gmail.com', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$.dlxwDQuglN9NNNjrYD6BOkEe6r0Vqf1QfxUZ0rFUIML6yjEZf89m', NULL, NULL, NULL, NULL, NULL, 1, '2025-03-11 12:34:24', '2025-03-11 12:34:24', NULL, NULL, 1),
(57, 1, 0, 0, NULL, '312312321', '0984356274', 'email@gmail.com', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$UGoB1Dr0ZdfCfr/gUxSZse9kbTXR7.lVnNrPTrKfw9XE.h2IX1gjq', NULL, NULL, NULL, NULL, NULL, 1, '2025-03-11 14:30:39', '2025-03-11 14:30:39', NULL, NULL, 1),
(58, 1, 0, 0, '', 'Nguyễn Phi Long', '0984356274', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$T8FZG20rogm0qSzVYgCDNOVMlbm8OqDdIFKDwrabzjfa2ccMAXY1G', NULL, NULL, NULL, '', NULL, 1, '2025-03-27 16:12:11', '2025-03-27 16:12:11', NULL, NULL, 1),
(59, 1, 1625, 0, '', 'Nguyễn Phi Long', '0984356274', '', 19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$XN0GewyG2KKhfYyb0rUbgejkxtjv7FypkEw4JWQAN9zPcwLZTGpSy', NULL, NULL, NULL, '', NULL, 1, '2025-04-08 16:43:23', '2025-04-08 16:43:23', NULL, NULL, 0),
(60, 1, 0, 0, '0903282380', 'Lê Hồng Quân', '0919102786', 'quan288268@gmail.com', 0, '240', '42', '0', '', 'Ha Tinh', 'Ha Tinh, Tỉnh Hà Tĩnh, Vietnam', NULL, NULL, NULL, 0, '$2y$10$4G1heB54a7T0mXbyRnR1leHD/DMSKHBEzqCvLyCGTuzpqK2nH2Jv6', NULL, NULL, NULL, '', '', 1, '2025-04-15 16:09:21', '2025-04-15 16:11:01', NULL, 2, 0),
(61, 1, 0, 0, '0919102786', 'Nguyễn Thị Châu Loan', '0976151094', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$ElGU9aEuN4p1qk3Y7kd/hO4UzU2wJPDajAuZT5qLWWPXZjpD4odm2', NULL, NULL, NULL, '', NULL, 1, '2025-04-15 16:15:03', '2025-04-15 16:15:03', NULL, NULL, 0),
(62, 1, 0, 0, '', 'Phaạm Hải', '0931743539', '', 18, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$nNmBhw1Qsc8GxmLCKM72SOlOyoUihnRbD7Y6xDyeVcbyW4DhU1iTO', NULL, NULL, NULL, '', NULL, 1, '2025-05-28 15:44:16', '2025-05-28 15:44:16', NULL, NULL, 0),
(63, 1, 0, 0, '', 'Nguyễn Minh', '0833764266', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$6Nd1IMAnXh3UCMXFaDSWL.7GNC1meIqGMd8OLG7v/4JMnN3jFfyvO', NULL, NULL, NULL, '', NULL, 1, '2025-06-12 13:41:13', '2025-06-12 13:41:13', NULL, NULL, 0),
(64, 1, 0, 0, '0916860521', 'Trương Hồng', '0936039499', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '$2y$10$uJhVjo3aiCFsJysGoR7ZfefZ0b67ERhE9FZZCpFUppUp2Te1Sa3gu', NULL, NULL, NULL, '', NULL, 1, '2025-06-13 16:51:43', '2025-06-13 16:51:43', NULL, NULL, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `email` (`email`) USING BTREE,
  ADD KEY `phone` (`phone`) USING BTREE,
  ADD KEY `username` (`username`),
  ADD KEY `tier_id` (`tier_id`),
  ADD KEY `address_id` (`address_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
