CREATE DATABASE  IF NOT EXISTS `shareambergford3` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shareambergford3`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: shareambergford3
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
-- Table structure for table `actorgroups`
--

DROP TABLE IF EXISTS `actorgroups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actorgroups` (
  `actorgrp_id` int NOT NULL,
  `actorgrp_name` varchar(75) NOT NULL,
  KEY `group_has_actors_idx` (`actorgrp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actorgroups`
--

LOCK TABLES `actorgroups` WRITE;
/*!40000 ALTER TABLE `actorgroups` DISABLE KEYS */;
/*!40000 ALTER TABLE `actorgroups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actorstable`
--

DROP TABLE IF EXISTS `actorstable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actorstable` (
  `actors_id` int NOT NULL,
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
  `actor_group` int DEFAULT NULL,
  PRIMARY KEY (`actors_id`),
  CONSTRAINT `actor_has_entity` FOREIGN KEY (`actors_id`) REFERENCES `distribution` (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actorstable`
--

LOCK TABLES `actorstable` WRITE;
/*!40000 ALTER TABLE `actorstable` DISABLE KEYS */;
INSERT INTO `actorstable` VALUES (4,'Amberg Alliance For Families','Managing Director Tobias Berz','Herrnstraße 1-3 -92224 Amberg','09621101221','tobias.berz@amberg.de','https://www.amberg.de/rathaus/netzwerke/buendnisse/familie',NULL,NULL,'Families, Alliance',NULL,NULL,1),(5,'Climate Protection Office','Anne-Katrin Kluth','Steinhofgasse 2 - 1st floor - room 108','0962110-1481','Planungsamt@Amberg.de','https://www.amberg.de/rathaus/aemter-referate/ansprechpartner',NULL,NULL,'Climate, Protection',NULL,NULL,2),(6,'City Planning Office','Christoph Dereser','Herrnstrasse 1-3 - 2nd floor - 92224 Amberg','09621102403','Klimaschutz@Amberg.de','https://www.amberg.de/klimaschutz',NULL,NULL,'City, Planning',NULL,NULL,2);
/*!40000 ALTER TABLE `actorstable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datatable`
--

DROP TABLE IF EXISTS `datatable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datatable` (
  `data_id` int NOT NULL,
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
  PRIMARY KEY (`data_id`),
  KEY `datatable_has_entity_idx` (`data_id`),
  CONSTRAINT `datatable_has_entity` FOREIGN KEY (`data_id`) REFERENCES `distribution` (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datatable`
--

LOCK TABLES `datatable` WRITE;
/*!40000 ALTER TABLE `datatable` DISABLE KEYS */;
INSERT INTO `datatable` VALUES (7,'Crossections of the riverbed','link','DWG','NULL','Climate Protection Office','Climate Protection Office',NULL,NULL,'amberg, vills, water, river, riverbed, section, crossection, plan, flood','2005-08-26','2016-03-10'),(8,'Population Count Amberg','link','Excel','NULL','Office of Social Affairs','Office of Social Affairs',NULL,NULL,'amberg, population, count, citizens, demographic','1967-12-12','2022-12-05'),(9,'Locations of Shelters','link','PDF','NULL','Climate Protection Office','Climate Protection Office',NULL,NULL,'amberg, vills, river, shelter, emergency, safety, rescue, flood','2010-11-13','2021-05-11'),(10,'Riverbed Stratigraphy','link','PDF','NULL','Climate Protection Office','Climate Protection Office',NULL,NULL,'amberg, vills, river, flood, riverbed, sediment, stratigraphy, section, earth, soil, layers','2005-06-03','2017-03-29'),(11,'Chemical Analysis','https://www.lfu.bayern.de/boden/bodenlehrpfade/doc/tafel_amberg.pdf','PDF','NULL','Hochschule Amberg','Civil Engineering Office',NULL,NULL,'earth, soil, vils, foundations, river, deformations','1988-10-18','2018-09-27'),(12,'Deformations','https://www.adbv-amberg.de/','JSON','NULL','Water Management Office in Weiden','Civil Engineering Office',NULL,NULL,'flood, flooding, vils, naab, riverbed, deformations, water','2015-06-08','2018-12-10'),(13,'Drainage Channels','https://www.amberg-bau-gmbh.de/marke_hersteller_produkte/mea/mea_entwaesserungsrinnen','JSON','NULL','Civil Engineering Office','Civil Engineering Office',NULL,NULL,'flood, flooding, drainage, sewerage','2004-01-07','2020-10-23'),(14,'Emergency Energy Plan','https://stadtwerke-amberg.de/presseartikel/ausrufung-alarmstufe-des-notfallplans-gas.html','PDF','NULL','Stadtwerke-Amberg','Stadtwerke-Amberg',NULL,NULL,'flood, flooding, evacuation, safety, energy, shelter','2021-11-03','2022-01-01'),(15,'Evacuation Plan','https://www.thw-amberg.de/ortsverband/oertliche-gefahren','PDF','NULL','State of Bavaria','Civil participation office',NULL,NULL,'flood, flooding, evacuation, safety','2019-10-10','2023-06-29'),(16,'Riverbed: Gradient and Bed Material','link','PDF','NULL','Climate Protection Office','Climate Protection Office',NULL,NULL,'riverbed, soil, gradient, earth, water, river, flood, vills','1980-10-23','2016-03-17');
/*!40000 ALTER TABLE `datatable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distribution`
--

DROP TABLE IF EXISTS `distribution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distribution` (
  `card_id` int NOT NULL,
  `target_table` varchar(75) NOT NULL,
  PRIMARY KEY (`card_id`),
  CONSTRAINT `distribution_has_entity` FOREIGN KEY (`card_id`) REFERENCES `nodes` (`entityID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distribution`
--

LOCK TABLES `distribution` WRITE;
/*!40000 ALTER TABLE `distribution` DISABLE KEYS */;
INSERT INTO `distribution` VALUES (1,'headlinestable'),(2,'headlinestable'),(3,'headlinestable'),(4,'actorstable'),(5,'actorstable'),(6,'actorstable'),(7,'datatable'),(8,'datatable'),(9,'datatable'),(10,'datatable'),(11,'datatable'),(12,'datatable'),(13,'datatable'),(14,'datatable'),(15,'datatable'),(16,'datatable');
/*!40000 ALTER TABLE `distribution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headlinestable`
--

DROP TABLE IF EXISTS `headlinestable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headlinestable` (
  `head_id` int NOT NULL,
  `head_name` varchar(50) NOT NULL,
  `head_description` varchar(500) DEFAULT NULL,
  `keywords` varchar(200) NOT NULL,
  `created_date` date DEFAULT NULL,
  `modifed_date` date DEFAULT NULL,
  PRIMARY KEY (`head_id`),
  CONSTRAINT `headlines_has_entity` FOREIGN KEY (`head_id`) REFERENCES `distribution` (`card_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `links` (
  `sourceEnt` int NOT NULL,
  `targetEnt` int NOT NULL,
  PRIMARY KEY (`sourceEnt`,`targetEnt`),
  KEY `links_has_target_idx` (`targetEnt`),
  CONSTRAINT `links_has_source` FOREIGN KEY (`sourceEnt`) REFERENCES `nodes` (`entityID`),
  CONSTRAINT `links_has_target` FOREIGN KEY (`targetEnt`) REFERENCES `nodes` (`entityID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links`
--

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;
INSERT INTO `links` VALUES (1,4),(2,5),(3,5),(2,6),(3,6),(3,7),(1,8),(1,9),(2,10),(2,11),(2,12),(3,12),(3,13),(1,14),(1,15),(3,16);
/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nodes`
--

DROP TABLE IF EXISTS `nodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nodes` (
  `entityID` int NOT NULL,
  `entityName` varchar(75) NOT NULL,
  PRIMARY KEY (`entityID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nodes`
--

LOCK TABLES `nodes` WRITE;
/*!40000 ALTER TABLE `nodes` DISABLE KEYS */;
INSERT INTO `nodes` VALUES (1,'Emergency Protocol'),(2,'Soil Conditions'),(3,'Riverbed Conditions'),(4,'Amberg Alliance for Families'),(5,'Climate Protection Office'),(6,'City Planning Office'),(7,'Crossections of the riverbed'),(8,'Population Count Amberg'),(9,'Locations of Shelters'),(10,'Riverbed Stratigraphy'),(11,'Chemical Analysis'),(12,'Deformations'),(13,'Drainage Channels'),(14,'Emergency Energy Plan'),(15,'Evacuation Plan'),(16,'Riverbed: Gradient and Bed Material');
/*!40000 ALTER TABLE `nodes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-23 17:53:49
