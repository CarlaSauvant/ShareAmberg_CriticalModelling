-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: shareamberg
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `act_cityplanningoffice`
--

DROP TABLE IF EXISTS `act_cityplanningoffice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `act_cityplanningoffice` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `actor_name` varchar(50) NOT NULL,
  `actor_contact_name` varchar(50) NOT NULL,
  `actor_address` varchar(100) DEFAULT NULL,
  `actor_phone_number` varchar(20) DEFAULT NULL,
  `actor_email` varchar(75) DEFAULT NULL,
  `website_contact_link` varchar(200) NOT NULL,
  `actor_latitude` decimal(8,6) DEFAULT NULL,
  `actor_longitude` decimal(9,6) DEFAULT NULL,
  `keywords` varchar(75) NOT NULL,
  `created_date` date DEFAULT NULL,
  `modifed_date` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `act_cityplanningoffice`
--

LOCK TABLES `act_cityplanningoffice` WRITE;
/*!40000 ALTER TABLE `act_cityplanningoffice` DISABLE KEYS */;
INSERT INTO `act_cityplanningoffice` VALUES (1,'City Planning Office','Christoph Dereser','Herrnstrasse 1-3 - 2nd floor - 92224 Amberg','09621102403','Klimaschutz@Amberg.de','https://www.amberg.de/klimaschutz',NULL,NULL,'City, Planning',NULL,NULL);
/*!40000 ALTER TABLE `act_cityplanningoffice` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-17 12:34:09
