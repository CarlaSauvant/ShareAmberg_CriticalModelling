-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: shareambergsimplified
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
-- Table structure for table `actorsgroups`
--

DROP TABLE IF EXISTS `actorsgroups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actorsgroups` (
  `idactorsGroups` int NOT NULL AUTO_INCREMENT,
  `group` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idactorsGroups`),
  CONSTRAINT `idGroup` FOREIGN KEY (`idactorsGroups`) REFERENCES `actorstable` (`ID_actorstable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actorsgroups`
--

LOCK TABLES `actorsgroups` WRITE;
/*!40000 ALTER TABLE `actorsgroups` DISABLE KEYS */;
/*!40000 ALTER TABLE `actorsgroups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actorstable`
--

DROP TABLE IF EXISTS `actorstable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actorstable` (
  `ID_actorstable` int NOT NULL AUTO_INCREMENT,
  `actor_name` varchar(50) NOT NULL,
  `actor_contact_name` varchar(50) DEFAULT NULL,
  `actor_address` varchar(100) DEFAULT NULL,
  `actor_phone_number` varchar(20) DEFAULT NULL,
  `actor_email` varchar(75) DEFAULT NULL,
  `website_contact_link` varchar(200) NOT NULL,
  `actor_latitude` decimal(8,6) DEFAULT NULL,
  `actor_longitude` decimal(9,6) DEFAULT NULL,
  `keywords` varchar(200) NOT NULL,
  `created_date` date DEFAULT NULL,
  `modifed_date` date DEFAULT NULL,
  `actorGroup` int DEFAULT NULL,
  PRIMARY KEY (`ID_actorstable`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actorstable`
--

LOCK TABLES `actorstable` WRITE;
/*!40000 ALTER TABLE `actorstable` DISABLE KEYS */;
INSERT INTO `actorstable` VALUES (1,'Climate Protection Office','Anne-Katrin Kluth','Steinhofgasse 2 - 1st floor - room 108','0962110-1481','Planungsamt@Amberg.de','https://www.amberg.de/rathaus/aemter-referate/ansprechpartner',NULL,NULL,'Climate, Protection',NULL,NULL,NULL),(2,'City Planning Office','Christoph Dereser','Herrnstrasse 1-3 - 2nd floor - 92224 Amberg','09621102403','Klimaschutz@Amberg.de','https://www.amberg.de/klimaschutz',NULL,NULL,'City, Planning',NULL,NULL,NULL),(3,'Amberg Alliance For Families','Managing Director Tobias Berz','Herrnstraße 1-3 -92224 Amberg','09621101221','tobias.berz@amberg.de','https://www.amberg.de/rathaus/netzwerke/buendnisse/familie',NULL,NULL,'Families, Alliance',NULL,NULL,NULL);
/*!40000 ALTER TABLE `actorstable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datatable`
--

DROP TABLE IF EXISTS `datatable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datatable` (
  `ID_datatable` int NOT NULL AUTO_INCREMENT,
  `data_name` varchar(50) NOT NULL,
  `data_source` varchar(200) NOT NULL,
  `data_file_type` varchar(20) NOT NULL,
  `data_link_to_file` varchar(200) NOT NULL,
  `data_providers` varchar(50) DEFAULT NULL,
  `data_maintainers` varchar(50) DEFAULT NULL,
  `data_latitude` decimal(8,6) DEFAULT NULL,
  `data_longitude` decimal(9,6) DEFAULT NULL,
  `keywords` varchar(200) NOT NULL,
  `created_date` date NOT NULL,
  `modifed_date` date NOT NULL,
  PRIMARY KEY (`ID_datatable`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datatable`
--

LOCK TABLES `datatable` WRITE;
/*!40000 ALTER TABLE `datatable` DISABLE KEYS */;
INSERT INTO `datatable` VALUES (1,'Chemical Analysis','https://www.lfu.bayern.de/boden/bodenlehrpfade/doc/tafel_amberg.pdf','PDF','NULL','Hochschule Amberg','Civil Engineering Office',NULL,NULL,'earth, soil, vils, foundations, river, deformations','1988-10-18','2018-09-27'),(2,'Deformations','https://www.adbv-amberg.de/','JSON','NULL','Water Management Office in Weiden','Civil Engineering Office',NULL,NULL,'flood, flooding, vils, naab, riverbed, deformations, water','2015-06-08','2018-12-10'),(3,'Drainage Channels','https://www.amberg-bau-gmbh.de/marke_hersteller_produkte/mea/mea_entwaesserungsrinnen','JSON','NULL','Civil Engineering Office','Civil Engineering Office',NULL,NULL,'flood, flooding, drainage, sewerage','2004-01-07','2020-10-23'),(4,'Emergency Energy Plan','https://stadtwerke-amberg.de/presseartikel/ausrufung-alarmstufe-des-notfallplans-gas.html','PDF','NULL','Stadtwerke-Amberg','Stadtwerke-Amberg',NULL,NULL,'flood, flooding, evacuation, safety, energy, shelter','2021-11-03','2022-01-01'),(5,'Evacuation Plan','https://www.thw-amberg.de/ortsverband/oertliche-gefahren','PDF','NULL','State of Bavaria','Civil participation office',NULL,NULL,'flood, flooding, evacuation, safety','2019-10-10','2023-06-29'),(6,'Riverbed: Gradient and Bed Material','0','PDF','0','Climate Protection Office','Climate Protection Office',NULL,NULL,'riverbed, soil, gradient, earth, water, river, flood, vills','1980-10-23','2016-03-17'),(7,'Population Count Amberg','0','Excel','0','Office of Social Affairs','Office of Social Affairs',NULL,NULL,'amberg, population, count, citizens, demographic','1967-12-12','2022-12-05'),(8,'Crossections of the riverbed','0','DWG','0','Climate Protection Office','Climate Protection Office',NULL,NULL,'amberg, vills, water, river, riverbed, section, crossection, plan, flood','2005-08-26','2016-03-10'),(9,'Locations of Shelters','0','PDF','0','Climate Protection Office','Climate Protection Office',NULL,NULL,'amberg, vills, river, shelter, emergency, safety, rescue, flood','2010-11-13','2021-05-11'),(10,'Riverbed Stratigraphy','0','PDF','0','Climate Protection Office','Climate Protection Office',NULL,NULL,'amberg, vills, river, flood, riverbed, sediment, stratigraphy, section, earth, soil, layers','2005-06-03','2017-03-29');
/*!40000 ALTER TABLE `datatable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datatable_has_actorstable`
--

DROP TABLE IF EXISTS `datatable_has_actorstable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datatable_has_actorstable` (
  `datatable_ID` int NOT NULL,
  `actorstable_ID` int NOT NULL,
  PRIMARY KEY (`datatable_ID`,`actorstable_ID`),
  KEY `fk_datatable_has_actorstable_actorstable1_idx` (`actorstable_ID`),
  KEY `fk_datatable_has_actorstable_datatable1_idx` (`datatable_ID`),
  CONSTRAINT `fk_datatable_has_actorstable_actorstable1` FOREIGN KEY (`actorstable_ID`) REFERENCES `actorstable` (`ID_actorstable`),
  CONSTRAINT `fk_datatable_has_actorstable_datatable1` FOREIGN KEY (`datatable_ID`) REFERENCES `datatable` (`ID_datatable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datatable_has_actorstable`
--

LOCK TABLES `datatable_has_actorstable` WRITE;
/*!40000 ALTER TABLE `datatable_has_actorstable` DISABLE KEYS */;
/*!40000 ALTER TABLE `datatable_has_actorstable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headlinestable`
--

DROP TABLE IF EXISTS `headlinestable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headlinestable` (
  `ID_headlinestable` int NOT NULL AUTO_INCREMENT,
  `headline_name` varchar(50) NOT NULL,
  `headline_description` mediumtext,
  `keywords` varchar(200) NOT NULL,
  `created_date` date DEFAULT NULL,
  `modifed_date` date DEFAULT NULL,
  PRIMARY KEY (`ID_headlinestable`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headlinestable`
--

LOCK TABLES `headlinestable` WRITE;
/*!40000 ALTER TABLE `headlinestable` DISABLE KEYS */;
INSERT INTO `headlinestable` VALUES (1,'Soil Conditions','State of art of Soil: Soil Health & Hazards','Soil, Conditions',NULL,NULL),(2,'Emergency Protocol Plan','Overview plan of potential flood in Amberg','Emergency, Protocol, Plan',NULL,NULL),(3,'Riverbed Conditions','State of art of riverbed: flood hazards, vulnerability, water depth','Riverbed, COnditions',NULL,NULL);
/*!40000 ALTER TABLE `headlinestable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headlinestable_has_actorstable`
--

DROP TABLE IF EXISTS `headlinestable_has_actorstable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headlinestable_has_actorstable` (
  `headlinestable_ID` int NOT NULL,
  `actorstable_ID` int NOT NULL,
  PRIMARY KEY (`headlinestable_ID`,`actorstable_ID`),
  KEY `fk_headlinestable_has_actorstable_actorstable1_idx` (`actorstable_ID`),
  KEY `fk_headlinestable_has_actorstable_headlinestable1_idx` (`headlinestable_ID`),
  CONSTRAINT `fk_headlinestable_has_actorstable_actorstable1` FOREIGN KEY (`actorstable_ID`) REFERENCES `actorstable` (`ID_actorstable`),
  CONSTRAINT `fk_headlinestable_has_actorstable_headlinestable1` FOREIGN KEY (`headlinestable_ID`) REFERENCES `headlinestable` (`ID_headlinestable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headlinestable_has_actorstable`
--

LOCK TABLES `headlinestable_has_actorstable` WRITE;
/*!40000 ALTER TABLE `headlinestable_has_actorstable` DISABLE KEYS */;
INSERT INTO `headlinestable_has_actorstable` VALUES (1,1),(2,1),(3,1),(1,2),(2,3);
/*!40000 ALTER TABLE `headlinestable_has_actorstable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headlinestable_has_datatable`
--

DROP TABLE IF EXISTS `headlinestable_has_datatable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headlinestable_has_datatable` (
  `headlinestable_ID` int NOT NULL,
  `datatable_ID` int NOT NULL,
  PRIMARY KEY (`headlinestable_ID`,`datatable_ID`),
  KEY `fk_headlinestable_has_datatable_datatable1_idx` (`datatable_ID`),
  KEY `fk_headlinestable_has_datatable_headlinestable1_idx` (`headlinestable_ID`),
  CONSTRAINT `fk_headlinestable_has_datatable_datatable1` FOREIGN KEY (`datatable_ID`) REFERENCES `datatable` (`ID_datatable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headlinestable_has_datatable`
--

LOCK TABLES `headlinestable_has_datatable` WRITE;
/*!40000 ALTER TABLE `headlinestable_has_datatable` DISABLE KEYS */;
INSERT INTO `headlinestable_has_datatable` VALUES (1,1),(2,1),(10,1),(2,2),(4,2),(5,2),(8,2),(9,2),(3,3),(6,3),(7,3);
/*!40000 ALTER TABLE `headlinestable_has_datatable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headlinestable_has_headlinestable`
--

DROP TABLE IF EXISTS `headlinestable_has_headlinestable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headlinestable_has_headlinestable` (
  `headlinestable_ID` int NOT NULL,
  `headlinestable_ID1` int NOT NULL,
  PRIMARY KEY (`headlinestable_ID`,`headlinestable_ID1`),
  KEY `fk_headlinestable_has_headlinestable_headlinestable2_idx` (`headlinestable_ID1`),
  KEY `fk_headlinestable_has_headlinestable_headlinestable1_idx` (`headlinestable_ID`),
  CONSTRAINT `fk_headlinestable_has_headlinestable_headlinestable1` FOREIGN KEY (`headlinestable_ID`) REFERENCES `headlinestable` (`ID_headlinestable`),
  CONSTRAINT `fk_headlinestable_has_headlinestable_headlinestable2` FOREIGN KEY (`headlinestable_ID1`) REFERENCES `headlinestable` (`ID_headlinestable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headlinestable_has_headlinestable`
--

LOCK TABLES `headlinestable_has_headlinestable` WRITE;
/*!40000 ALTER TABLE `headlinestable_has_headlinestable` DISABLE KEYS */;
INSERT INTO `headlinestable_has_headlinestable` VALUES (1,3);
/*!40000 ALTER TABLE `headlinestable_has_headlinestable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-21 12:30:24
