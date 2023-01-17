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
-- Table structure for table `data_chemicalanalysis`
--

DROP TABLE IF EXISTS `data_chemicalanalysis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_chemicalanalysis` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `data_name` varchar(50) NOT NULL,
  `data_source` varchar(200) DEFAULT NULL,
  `data_file_type` varchar(20) NOT NULL,
  `data_link_to_file` varchar(200) NOT NULL,
  `data_author` varchar(50) DEFAULT NULL,
  `data_maintainers` varchar(50) NOT NULL,
  `data_latitude` decimal(8,6) DEFAULT NULL,
  `data_longitude` decimal(9,6) DEFAULT NULL,
  `keywords` varchar(200) DEFAULT NULL,
  `created_date` date NOT NULL,
  `modifed_date` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_chemicalanalysis`
--

LOCK TABLES `data_chemicalanalysis` WRITE;
/*!40000 ALTER TABLE `data_chemicalanalysis` DISABLE KEYS */;
INSERT INTO `data_chemicalanalysis` VALUES (1,'Chemical Analysis','https://www.lfu.bayern.de/boden/bodenlehrpfade/doc/tafel_amberg.pdf','PDF','NULL','Hochschule Amberg','Civil Engineering Office',NULL,NULL,'earth, soil, vils, foundations, river, deformations','1988-10-18','2018-09-27');
/*!40000 ALTER TABLE `data_chemicalanalysis` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-17 12:34:08