CREATE DATABASE  IF NOT EXISTS `luxore` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `luxore`;
-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: luxore
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `C_AMENITIES`
--

DROP TABLE IF EXISTS `C_AMENITIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `C_AMENITIES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amenity` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `C_AMENITIES`
--

LOCK TABLES `C_AMENITIES` WRITE;
/*!40000 ALTER TABLE `C_AMENITIES` DISABLE KEYS */;
/*!40000 ALTER TABLE `C_AMENITIES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `C_CATEGORIES`
--

DROP TABLE IF EXISTS `C_CATEGORIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `C_CATEGORIES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `C_CATEGORIES`
--

LOCK TABLES `C_CATEGORIES` WRITE;
/*!40000 ALTER TABLE `C_CATEGORIES` DISABLE KEYS */;
INSERT INTO `C_CATEGORIES` VALUES (1,'Venta directa'),(2,'Remate hipotecario'),(3,'Renta');
/*!40000 ALTER TABLE `C_CATEGORIES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `C_CITIES`
--

DROP TABLE IF EXISTS `C_CITIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `C_CITIES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_state` int NOT NULL,
  `city` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_state_idx` (`id_state`),
  CONSTRAINT `fk_id_city_property` FOREIGN KEY (`id`) REFERENCES `T_PROPERTIES` (`id`),
  CONSTRAINT `fk_id_state` FOREIGN KEY (`id_state`) REFERENCES `C_STATES` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2457 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `C_CITIES`
--

LOCK TABLES `C_CITIES` WRITE;
/*!40000 ALTER TABLE `C_CITIES` DISABLE KEYS */;
/*!40000 ALTER TABLE `C_CITIES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `C_COLONIES`
--

DROP TABLE IF EXISTS `C_COLONIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `C_COLONIES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_city` int NOT NULL,
  `postal_code` varchar(5) NOT NULL,
  `colony` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_city_idx` (`id_city`),
  CONSTRAINT `fk_id_city` FOREIGN KEY (`id_city`) REFERENCES `C_CITIES` (`id`),
  CONSTRAINT `fk_id_colony_property` FOREIGN KEY (`id`) REFERENCES `T_PROPERTIES` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=153839 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `C_COLONIES`
--

LOCK TABLES `C_COLONIES` WRITE;
/*!40000 ALTER TABLE `C_COLONIES` DISABLE KEYS */;
/*!40000 ALTER TABLE `C_COLONIES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `C_PROPERTY_TYPES`
--

DROP TABLE IF EXISTS `C_PROPERTY_TYPES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `C_PROPERTY_TYPES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `propertyType` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_id_property_type_property` FOREIGN KEY (`id`) REFERENCES `T_PROPERTIES` (`idPropertyType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `C_PROPERTY_TYPES`
--

LOCK TABLES `C_PROPERTY_TYPES` WRITE;
/*!40000 ALTER TABLE `C_PROPERTY_TYPES` DISABLE KEYS */;
/*!40000 ALTER TABLE `C_PROPERTY_TYPES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `C_STATES`
--

DROP TABLE IF EXISTS `C_STATES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `C_STATES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `state` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_id_state_property` FOREIGN KEY (`id`) REFERENCES `T_PROPERTIES` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `C_STATES`
--

LOCK TABLES `C_STATES` WRITE;
/*!40000 ALTER TABLE `C_STATES` DISABLE KEYS */;
/*!40000 ALTER TABLE `C_STATES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `T_AMENITIES_PROPERTIES`
--

DROP TABLE IF EXISTS `T_AMENITIES_PROPERTIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `T_AMENITIES_PROPERTIES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idAmenity` int NOT NULL,
  `idProperty` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_amenitye_rel_idx` (`idAmenity`),
  KEY `fk_id_property_rel_idx` (`idProperty`),
  CONSTRAINT `fk_id_amenitye_rel` FOREIGN KEY (`idAmenity`) REFERENCES `C_AMENITIES` (`id`),
  CONSTRAINT `fk_id_property_rel` FOREIGN KEY (`idProperty`) REFERENCES `T_PROPERTIES` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `T_AMENITIES_PROPERTIES`
--

LOCK TABLES `T_AMENITIES_PROPERTIES` WRITE;
/*!40000 ALTER TABLE `T_AMENITIES_PROPERTIES` DISABLE KEYS */;
/*!40000 ALTER TABLE `T_AMENITIES_PROPERTIES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `T_IMAGES`
--

DROP TABLE IF EXISTS `T_IMAGES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `T_IMAGES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPrperties` int NOT NULL,
  `imagePath` varchar(200) NOT NULL,
  `createdOn` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_property_idx` (`idPrperties`),
  CONSTRAINT `fk_id_property` FOREIGN KEY (`idPrperties`) REFERENCES `T_PROPERTIES` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `T_IMAGES`
--

LOCK TABLES `T_IMAGES` WRITE;
/*!40000 ALTER TABLE `T_IMAGES` DISABLE KEYS */;
/*!40000 ALTER TABLE `T_IMAGES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `T_PROPERTIES`
--

DROP TABLE IF EXISTS `T_PROPERTIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `T_PROPERTIES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mainImage` varchar(100) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `idPropertyType` int NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` longtext NOT NULL,
  `addres` varchar(100) NOT NULL,
  `garage` tinyint NOT NULL,
  `carsNumber` int NOT NULL,
  `rooms` int NOT NULL,
  `bedrooms` int NOT NULL,
  `bathrooms` decimal(10,0) NOT NULL,
  `postedYear` datetime NOT NULL,
  `idCity` varchar(45) NOT NULL,
  `idState` varchar(45) NOT NULL,
  `idColony` varchar(45) NOT NULL,
  `metersSurface` decimal(10,0) NOT NULL,
  `metersBuilded` decimal(10,0) NOT NULL,
  `invoice` varchar(10) NOT NULL,
  `featuredProperty` tinyint NOT NULL,
  `updateOn` datetime NOT NULL,
  `idCategory` int NOT NULL,
  `zip` varchar(5) NOT NULL,
  `floors` int NOT NULL,
  `features` varchar(500) NOT NULL,
  `enable` tinyint NOT NULL,
  `latitude` varchar(45) NOT NULL,
  `longitude` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_id_category` (`idCategory`),
  KEY `idx_id_colony` (`idColony`),
  KEY `idx_id_property_type` (`idPropertyType`),
  KEY `idx_id_state` (`idState`),
  CONSTRAINT `fk_id_category_property` FOREIGN KEY (`idCategory`) REFERENCES `C_CATEGORIES` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `T_PROPERTIES`
--

LOCK TABLES `T_PROPERTIES` WRITE;
/*!40000 ALTER TABLE `T_PROPERTIES` DISABLE KEYS */;
/*!40000 ALTER TABLE `T_PROPERTIES` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-26 13:50:47
