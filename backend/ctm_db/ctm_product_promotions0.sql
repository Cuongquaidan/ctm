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
-- Table structure for table `product_promotions`
--

DROP TABLE IF EXISTS `product_promotions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_promotions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `store_id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `promotion_id` int DEFAULT NULL,
  `product_price_id` int DEFAULT '-1',
  `flash_type` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `quantity` int DEFAULT '-1',
  `remaining_quantity` int DEFAULT '-1',
  `used_quantity` int DEFAULT '0',
  `customer_quantity` int DEFAULT '-1',
  `discount_type` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` double NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `product_id` (`product_id`),
  KEY `promotion_id` (`promotion_id`),
  KEY `flash_type` (`flash_type`),
  KEY `store_id` (`store_id`),
  KEY `product_price_id` (`product_price_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='milktea';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_promotions`
--

LOCK TABLES `product_promotions` WRITE;
/*!40000 ALTER TABLE `product_promotions` DISABLE KEYS */;
INSERT INTO `product_promotions` VALUES (1,2,1219,1,-1,'12:00',NULL,NULL,-1,-1,1,-1,'P',10,1,'2024-10-16 15:54:27','2024-10-16 15:54:27',1,1,0),(2,2,1198,1,-1,'12:00',NULL,NULL,-1,-1,4,-1,'P',10,1,'2024-10-16 15:54:27','2024-10-16 15:54:27',1,1,0),(3,2,1197,1,-1,'12:00',NULL,NULL,-1,-1,2,-1,'P',15,1,'2024-10-17 11:19:49','2024-10-17 11:19:49',1,1,0),(4,2,1196,1,-1,'12:00',NULL,NULL,-1,-1,9,-1,'P',15,1,'2024-10-17 11:19:49','2024-10-17 11:19:49',1,1,0),(5,2,1195,1,-1,'12:00',NULL,NULL,-1,-1,2,-1,'P',15,1,'2024-10-17 11:19:49','2024-10-17 11:19:49',1,1,0),(6,2,1194,1,-1,'12:00',NULL,NULL,-1,-1,3,-1,'P',15,1,'2024-10-17 11:19:49','2024-10-17 11:19:49',1,1,0),(7,2,1193,2,-1,'06:00',NULL,NULL,-1,-1,3,-1,'P',30,1,'2024-10-17 11:20:52','2024-10-17 11:20:52',1,1,0),(8,2,1192,2,-1,'06:00',NULL,NULL,-1,-1,0,-1,'P',30,1,'2024-10-17 11:20:52','2024-10-17 11:20:52',1,1,0),(9,2,1191,2,-1,'06:00',NULL,NULL,-1,-1,5,-1,'P',30,1,'2024-10-17 11:20:52','2024-10-17 11:20:52',1,1,0),(10,2,1190,2,-1,'06:00',NULL,NULL,-1,-1,0,-1,'P',30,1,'2024-10-17 11:20:52','2024-10-17 11:20:52',1,1,0),(11,2,822,3,-1,'00:00',NULL,NULL,-1,-1,0,-1,'P',25,1,'2024-10-17 11:22:17','2024-10-17 11:22:17',1,1,0),(12,2,819,3,-1,'00:00',NULL,NULL,-1,-1,0,-1,'P',25,1,'2024-10-17 11:22:17','2024-10-17 11:22:17',1,1,0),(13,2,833,3,-1,'00:00',NULL,NULL,-1,-1,0,-1,'P',25,1,'2024-10-17 11:22:17','2024-10-17 11:22:17',1,1,0),(14,2,834,3,-1,'00:00',NULL,NULL,-1,-1,0,-1,'P',25,1,'2024-10-17 11:22:17','2024-10-17 11:22:17',1,1,0),(15,2,828,4,-1,NULL,'2025-04-23 09:06:21','2025-04-25 09:06:21',-1,-1,0,-1,'P',20,1,'2024-10-18 08:29:38','2024-10-18 08:29:38',1,1,0),(16,2,837,4,-1,NULL,'2025-04-23 09:06:21','2025-04-25 09:06:21',-1,-1,0,-1,'P',0,1,'2024-10-18 08:29:38','2024-10-18 08:29:38',1,1,0),(17,2,813,4,-1,NULL,'2025-04-23 09:06:21','2025-04-25 09:06:21',-1,-1,0,-1,'P',0,1,'2024-10-18 08:29:38','2024-10-18 08:29:38',1,1,0),(18,2,829,4,-1,NULL,'2025-04-23 09:06:21','2025-04-25 09:06:21',-1,-1,0,-1,'P',0,1,'2024-10-18 08:29:38','2024-10-18 08:29:38',1,1,0),(19,2,818,4,-1,NULL,'2025-04-23 09:06:21','2025-04-25 09:06:21',-1,-1,0,-1,'P',0,1,'2024-10-18 08:29:38','2024-10-18 08:29:38',1,1,0),(20,2,819,4,-1,NULL,'2025-04-23 09:06:21','2025-04-25 09:06:21',-1,-1,0,-1,'P',0,1,'2024-10-18 08:29:38','2024-10-18 08:29:38',1,1,0),(21,35,1100,5,-1,'00:00',NULL,NULL,-1,-1,11,-1,'P',10,1,'2025-04-24 09:09:44','2025-04-24 09:09:44',52,52,0),(22,37,1218,7,-1,'06:00',NULL,NULL,-1,-1,10,-1,'P',15,1,NULL,NULL,NULL,NULL,0),(23,42,1216,8,-1,'12:00',NULL,NULL,-1,-1,6,-1,'P',25,1,NULL,NULL,NULL,NULL,0),(24,42,1215,9,-1,'18:00',NULL,NULL,-1,-1,8,-1,'P',20,1,NULL,NULL,NULL,NULL,0),(25,43,1211,10,-1,'00:00',NULL,NULL,-1,-1,9,-1,'P',12,1,NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `product_promotions` ENABLE KEYS */;
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
