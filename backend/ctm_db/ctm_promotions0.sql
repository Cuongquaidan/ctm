-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: ctm
-- ------------------------------------------------------
-- Server version	8.4.6

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `promotions`
--

DROP TABLE IF EXISTS `promotions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `store_id` int NOT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_type` tinyint DEFAULT '0',
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `day_of_week` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `nofi_type` tinyint(1) DEFAULT '2',
  `flash_type` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `store_id` (`store_id`),
  KEY `alias` (`alias`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotions`
--

LOCK TABLES `promotions` WRITE;
/*!40000 ALTER TABLE `promotions` DISABLE KEYS */;
INSERT INTO `promotions` VALUES (1,2,'giamgiactm','Flash Sale 12:00 PM','Flash Sale 12:00 PM',NULL,5,'2025-02-24 09:06:21','2025-12-25 09:06:21','12:00:00','17:59:59',NULL,1,0,'12:00','2024-09-19 13:37:19','2024-10-18 08:28:52',0,1,0),(2,2,'flash-sale-03-00-pm','Flash Sale 06:00 AM','Flash Sale 06:00 AM',NULL,5,'2025-02-24 09:06:21','2025-12-25 09:06:21','06:00:00','11:59:59',NULL,1,0,'06:00','2024-10-17 11:20:26','2024-10-18 08:28:25',1,1,0),(3,2,'flash-sale-09-00-pm','Flash Sale 00:00 AM','Flash Sale 00:00 AM',NULL,5,'2025-02-24 09:06:21','2025-12-25 09:06:21','00:00:00','05:59:59',NULL,1,0,'00:00','2024-10-17 11:21:54','2024-10-18 08:28:01',1,1,0),(4,2,'flash-sale-06-00-pm','Khuyến mãi từ đến','test',NULL,1,'2025-02-24 09:06:21','2025-12-25 09:06:21','06:00:00','23:59:59',NULL,1,0,NULL,'2024-10-18 08:29:12','2025-04-24 09:06:32',1,2,0),(5,35,'123','123234','123',NULL,5,'2025-02-24 09:06:21','2025-12-25 09:06:21','06:00:00','23:59:59',NULL,1,1,'06:00','2025-04-24 09:09:38','2025-04-24 09:09:56',52,52,0),(6,19,'ma-giam-gia-2-9-2025','Mã giảm giá 2/9/2025','Giảm giá ngày quốc khánh',NULL,5,'2025-02-24 09:06:21','2025-12-25 09:06:21','00:00:00','05:59:59',NULL,1,1,'00:00','2025-05-23 10:21:10','2025-05-23 10:21:10',40,40,0),(7,37,'flash-sale-noel','noel','noel',NULL,5,'2025-02-08 09:06:21','2026-02-22 09:06:21','06:00:00','23:59:59',NULL,1,1,'12:00',NULL,NULL,NULL,NULL,0),(8,42,'flash-sale-tet','tết','tết',NULL,5,'2025-02-16 09:06:21','2026-12-14 09:06:21','07:00:00','20:59:59',NULL,1,1,'06:00',NULL,NULL,NULL,NULL,0),(9,42,'flash-sale-cuoi-nam','cuổi năm','cuổi năm',NULL,5,'2025-08-24 09:06:21','2025-12-28 09:06:21','08:00:00','21:59:59',NULL,1,1,'00:00',NULL,NULL,NULL,NULL,0),(10,43,'flash-sale-sinh-nhat','sinh nhật','sinh nhật',NULL,5,'2025-10-20 09:06:21','2026-01-26 09:06:21','06:00:00','22:59:59',NULL,1,1,'18:00',NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `promotions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-25 12:33:14
