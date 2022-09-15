-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: pieces
-- ------------------------------------------------------
-- Server version	5.7.21-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ajustements`
--

DROP TABLE IF EXISTS `ajustements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ajustements` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `reference` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantiteNumerique` int(11) NOT NULL,
  `quantitePhysique` int(11) NOT NULL,
  `type_id` bigint(20) unsigned NOT NULL,
  `magasin_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ajustements_reference_unique` (`reference`),
  KEY `ajustements_type_id_foreign` (`type_id`),
  KEY `ajustements_magasin_id_foreign` (`magasin_id`),
  CONSTRAINT `ajustements_magasin_id_foreign` FOREIGN KEY (`magasin_id`) REFERENCES `magasins` (`id`),
  CONSTRAINT `ajustements_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ajustements`
--

LOCK TABLES `ajustements` WRITE;
/*!40000 ALTER TABLE `ajustements` DISABLE KEYS */;
/*!40000 ALTER TABLE `ajustements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `approvisionnement_types`
--

DROP TABLE IF EXISTS `approvisionnement_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `approvisionnement_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quantite` int(11) NOT NULL,
  `approvisionnement_id` bigint(20) unsigned NOT NULL,
  `type_id` bigint(20) unsigned NOT NULL,
  `magasin_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `approvisionnement_types_approvisionnement_id_foreign` (`approvisionnement_id`),
  KEY `approvisionnement_types_type_id_foreign` (`type_id`),
  KEY `approvisionnement_types_magasin_id_foreign` (`magasin_id`),
  CONSTRAINT `approvisionnement_types_approvisionnement_id_foreign` FOREIGN KEY (`approvisionnement_id`) REFERENCES `approvisionnements` (`id`),
  CONSTRAINT `approvisionnement_types_magasin_id_foreign` FOREIGN KEY (`magasin_id`) REFERENCES `magasins` (`id`),
  CONSTRAINT `approvisionnement_types_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approvisionnement_types`
--

LOCK TABLES `approvisionnement_types` WRITE;
/*!40000 ALTER TABLE `approvisionnement_types` DISABLE KEYS */;
INSERT INTO `approvisionnement_types` VALUES (1,5,1,2,1,'2020-06-17 09:16:38','2020-06-17 09:16:38'),(2,25,2,1,2,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(3,50,2,1,1,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(4,15,2,2,2,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(5,30,2,2,1,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(6,40,2,3,2,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(7,80,2,3,1,'2020-06-17 23:19:48','2020-06-17 23:19:48');
/*!40000 ALTER TABLE `approvisionnement_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `approvisionnements`
--

DROP TABLE IF EXISTS `approvisionnements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `approvisionnements` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `identifiant` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `approvisionnements_identifiant_unique` (`identifiant`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approvisionnements`
--

LOCK TABLES `approvisionnements` WRITE;
/*!40000 ALTER TABLE `approvisionnements` DISABLE KEYS */;
INSERT INTO `approvisionnements` VALUES (1,'App/17-06-20/n°1','2020-06-17 09:16:38','2020-06-17 09:16:38'),(2,'App/17-06-20/n°2','2020-06-17 23:19:48','2020-06-17 23:19:48');
/*!40000 ALTER TABLE `approvisionnements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_commandes`
--

DROP TABLE IF EXISTS `article_commandes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_commandes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quantite` int(11) NOT NULL,
  `prixUnitaire` int(11) NOT NULL,
  `commande_id` bigint(20) unsigned NOT NULL,
  `type_id` bigint(20) unsigned NOT NULL,
  `magasin_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `article_commandes_commande_id_foreign` (`commande_id`),
  KEY `article_commandes_type_id_foreign` (`type_id`),
  KEY `article_commandes_magasin_id_foreign` (`magasin_id`),
  CONSTRAINT `article_commandes_commande_id_foreign` FOREIGN KEY (`commande_id`) REFERENCES `commandes` (`id`),
  CONSTRAINT `article_commandes_magasin_id_foreign` FOREIGN KEY (`magasin_id`) REFERENCES `magasins` (`id`),
  CONSTRAINT `article_commandes_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_commandes`
--

LOCK TABLES `article_commandes` WRITE;
/*!40000 ALTER TABLE `article_commandes` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_commandes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_ventes`
--

DROP TABLE IF EXISTS `article_ventes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_ventes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quantite` int(11) NOT NULL,
  `prixUnitaire` int(11) NOT NULL,
  `vente_id` bigint(20) unsigned NOT NULL,
  `type_id` bigint(20) unsigned NOT NULL,
  `magasin_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `article_ventes_vente_id_foreign` (`vente_id`),
  KEY `article_ventes_type_id_foreign` (`type_id`),
  KEY `article_ventes_magasin_id_foreign` (`magasin_id`),
  CONSTRAINT `article_ventes_magasin_id_foreign` FOREIGN KEY (`magasin_id`) REFERENCES `magasins` (`id`),
  CONSTRAINT `article_ventes_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`),
  CONSTRAINT `article_ventes_vente_id_foreign` FOREIGN KEY (`vente_id`) REFERENCES `ventes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_ventes`
--

LOCK TABLES `article_ventes` WRITE;
/*!40000 ALTER TABLE `article_ventes` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_ventes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `designation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emballage_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `articles_designation_unique` (`designation`),
  KEY `articles_emballage_id_foreign` (`emballage_id`),
  CONSTRAINT `articles_emballage_id_foreign` FOREIGN KEY (`emballage_id`) REFERENCES `emballages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'coca',1,'2020-06-17 08:54:49','2020-06-17 08:54:49');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avoir_credits`
--

DROP TABLE IF EXISTS `avoir_credits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avoir_credits` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `sommeVersee` int(11) NOT NULL,
  `soldeClient` int(11) NOT NULL,
  `compte_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `avoir_credits_compte_id_foreign` (`compte_id`),
  CONSTRAINT `avoir_credits_compte_id_foreign` FOREIGN KEY (`compte_id`) REFERENCES `comptes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avoir_credits`
--

LOCK TABLES `avoir_credits` WRITE;
/*!40000 ALTER TABLE `avoir_credits` DISABLE KEYS */;
/*!40000 ALTER TABLE `avoir_credits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `casse_types`
--

DROP TABLE IF EXISTS `casse_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `casse_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quantite` int(11) NOT NULL,
  `quantiteTotale` int(11) NOT NULL,
  `casse_id` bigint(20) unsigned NOT NULL,
  `type_id` bigint(20) unsigned NOT NULL,
  `magasin_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `casse_types_casse_id_foreign` (`casse_id`),
  KEY `casse_types_type_id_foreign` (`type_id`),
  KEY `casse_types_magasin_id_foreign` (`magasin_id`),
  CONSTRAINT `casse_types_casse_id_foreign` FOREIGN KEY (`casse_id`) REFERENCES `casses` (`id`),
  CONSTRAINT `casse_types_magasin_id_foreign` FOREIGN KEY (`magasin_id`) REFERENCES `magasins` (`id`),
  CONSTRAINT `casse_types_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casse_types`
--

LOCK TABLES `casse_types` WRITE;
/*!40000 ALTER TABLE `casse_types` DISABLE KEYS */;
INSERT INTO `casse_types` VALUES (1,2,2,2,2,1,'2020-06-17 11:10:25','2020-06-17 11:13:23');
/*!40000 ALTER TABLE `casse_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `casse_ventes`
--

DROP TABLE IF EXISTS `casse_ventes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `casse_ventes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quantite` int(11) NOT NULL,
  `quantiteTotale` int(11) NOT NULL,
  `casse_id` bigint(20) unsigned NOT NULL,
  `type_id` bigint(20) unsigned NOT NULL,
  `magasin_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `casse_ventes_casse_id_foreign` (`casse_id`),
  KEY `casse_ventes_type_id_foreign` (`type_id`),
  KEY `casse_ventes_magasin_id_foreign` (`magasin_id`),
  CONSTRAINT `casse_ventes_casse_id_foreign` FOREIGN KEY (`casse_id`) REFERENCES `casses` (`id`),
  CONSTRAINT `casse_ventes_magasin_id_foreign` FOREIGN KEY (`magasin_id`) REFERENCES `magasins` (`id`),
  CONSTRAINT `casse_ventes_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casse_ventes`
--

LOCK TABLES `casse_ventes` WRITE;
/*!40000 ALTER TABLE `casse_ventes` DISABLE KEYS */;
/*!40000 ALTER TABLE `casse_ventes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `casses`
--

DROP TABLE IF EXISTS `casses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `casses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `refCas` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `casses_refcas_unique` (`refCas`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casses`
--

LOCK TABLES `casses` WRITE;
/*!40000 ALTER TABLE `casses` DISABLE KEYS */;
INSERT INTO `casses` VALUES (1,'Cas/17-06-20/n°1','2020-06-17 11:05:38','2020-06-17 11:05:38'),(2,'Cas/17-06-20/n°2','2020-06-17 11:10:24','2020-06-17 11:10:24');
/*!40000 ALTER TABLE `casses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nomClient` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephoneClient` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clients_telephoneclient_unique` (`telephoneClient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commandes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `referenceCommande` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nomTel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `montantCommande` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `commandes_referencecommande_unique` (`referenceCommande`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commandes`
--

LOCK TABLES `commandes` WRITE;
/*!40000 ALTER TABLE `commandes` DISABLE KEYS */;
/*!40000 ALTER TABLE `commandes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comptes`
--

DROP TABLE IF EXISTS `comptes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comptes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `soldeAnterieur` int(11) NOT NULL DEFAULT '0',
  `variation` int(11) NOT NULL DEFAULT '0',
  `soldeActuel` int(11) NOT NULL DEFAULT '0',
  `client_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comptes_client_id_foreign` (`client_id`),
  CONSTRAINT `comptes_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comptes`
--

LOCK TABLES `comptes` WRITE;
/*!40000 ALTER TABLE `comptes` DISABLE KEYS */;
/*!40000 ALTER TABLE `comptes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `depenses`
--

DROP TABLE IF EXISTS `depenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `depenses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ref` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `montant` int(11) NOT NULL,
  `motif` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `depenses_ref_unique` (`ref`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depenses`
--

LOCK TABLES `depenses` WRITE;
/*!40000 ALTER TABLE `depenses` DISABLE KEYS */;
INSERT INTO `depenses` VALUES (1,'Ref/17-06-20/n°1',500,'facture de vent','2020-06-17 10:21:01','2020-06-17 10:21:20');
/*!40000 ALTER TABLE `depenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emballages`
--

DROP TABLE IF EXISTS `emballages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emballages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `emballages_libelle_unique` (`libelle`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emballages`
--

LOCK TABLES `emballages` WRITE;
/*!40000 ALTER TABLE `emballages` DISABLE KEYS */;
INSERT INTO `emballages` VALUES (1,'carton','2020-06-17 08:53:56','2020-06-17 08:53:56');
/*!40000 ALTER TABLE `emballages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `magasins`
--

DROP TABLE IF EXISTS `magasins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `magasins` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `magasins_libelle_unique` (`libelle`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `magasins`
--

LOCK TABLES `magasins` WRITE;
/*!40000 ALTER TABLE `magasins` DISABLE KEYS */;
INSERT INTO `magasins` VALUES (1,'boutique','2020-06-10 00:41:01','2020-06-10 00:41:01'),(2,'rakieta','2020-06-17 10:36:33','2020-06-17 10:36:33');
/*!40000 ALTER TABLE `magasins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2020_04_14_065740_create_emballages_table',1),(5,'2020_04_14_065817_create_articles_table',1),(6,'2020_04_14_065858_create_magasins_table',1),(7,'2020_04_14_065933_create_approvisionnements_table',1),(8,'2020_04_14_070000_create_clients_table',1),(9,'2020_04_14_070026_create_ventes_table',1),(10,'2020_04_14_070059_create_casses_table',1),(11,'2020_04_14_070122_create_transferts_table',1),(12,'2020_04_14_070150_create_types_table',1),(13,'2020_04_14_070152_create_stocks_table',1),(14,'2020_04_14_070208_create_comptes_table',1),(15,'2020_04_14_070236_create_avoir_credits_table',1),(16,'2020_04_14_070255_create_commandes_table',1),(17,'2020_04_14_070332_vente_casse',1),(18,'2020_04_14_070349_article_commande',1),(19,'2020_04_14_070420_article_vente',1),(20,'2020_04_14_070450_approvisionnement_article',1),(21,'2020_04_14_081657_create_depenses_table',1),(22,'2020_05_04_203338_create_casse_types_table',1),(23,'2020_05_05_203847_create_versements_table',1),(24,'2020_05_08_092518_transfert_type',1),(25,'2020_05_12_195842_create_ajustements_table',1),(26,'2020_06_06_091754_create_pages_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `page` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permission` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `statut` tinyint(1) NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pages_user_id_foreign` (`user_id`),
  CONSTRAINT `pages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` VALUES (45,'ajustement','voir',1,1,'2020-06-17 10:17:56','2020-06-17 10:17:56'),(46,'ajustement','ajouter',1,1,'2020-06-17 10:17:57','2020-06-17 10:17:57'),(47,'ajustement','modifier',1,1,'2020-06-17 10:17:57','2020-06-17 10:17:57'),(48,'ajustement','supprimer',1,1,'2020-06-17 10:17:57','2020-06-17 10:17:57'),(49,'approvisionnement','voir',1,1,'2020-06-17 10:17:57','2020-06-17 10:17:57'),(50,'approvisionnement','ajouter',1,1,'2020-06-17 10:17:57','2020-06-17 10:17:57'),(51,'approvisionnement','modifier',1,1,'2020-06-17 10:17:57','2020-06-17 10:17:57'),(52,'approvisionnement','supprimer',1,1,'2020-06-17 10:17:57','2020-06-17 10:17:57'),(53,'article','voir',1,1,'2020-06-17 10:17:57','2020-06-17 10:17:57'),(54,'article','ajouter',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(55,'article','modifier',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(56,'article','supprimer',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(57,'client','voir',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(58,'client','ajouter',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(59,'client','modifier',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(60,'client','supprimer',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(61,'commande','voir',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(62,'commande','ajouter',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(63,'commande','modifier',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(64,'commande','supprimer',1,1,'2020-06-17 10:17:58','2020-06-17 10:17:58'),(65,'depense','voir',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(66,'depense','ajouter',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(67,'depense','modifier',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(68,'depense','supprimer',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(69,'magasin','voir',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(70,'magasin','ajouter',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(71,'magasin','modifier',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(72,'magasin','supprimer',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(73,'transfert','voir',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(74,'transfert','ajouter',1,1,'2020-06-17 10:17:59','2020-06-17 10:17:59'),(75,'transfert','modifier',1,1,'2020-06-17 10:18:00','2020-06-17 10:18:00'),(76,'transfert','supprimer',1,1,'2020-06-17 10:18:00','2020-06-17 10:18:00'),(77,'user','voir',1,1,'2020-06-17 10:18:00','2020-06-17 10:18:00'),(78,'user','ajouter',1,1,'2020-06-17 10:18:00','2020-06-17 10:18:00'),(79,'user','modifier',1,1,'2020-06-17 10:18:00','2020-06-17 10:18:00'),(80,'user','supprimer',1,1,'2020-06-17 10:18:00','2020-06-17 10:18:00'),(81,'reglement','voir',1,1,'2020-06-17 10:18:00','2020-06-17 10:18:00'),(82,'reglement','ajouter',1,1,'2020-06-17 10:18:00','2020-06-17 10:18:00'),(83,'reglement','modifier',1,1,'2020-06-17 10:18:00','2020-06-17 10:18:00'),(84,'reglement','supprimer',1,1,'2020-06-17 10:18:01','2020-06-17 10:18:01'),(85,'vente','voir',1,1,'2020-06-17 10:18:01','2020-06-17 10:18:01'),(86,'vente','ajouter',1,1,'2020-06-17 10:18:01','2020-06-17 10:18:01'),(87,'vente','modifier',1,1,'2020-06-17 10:18:01','2020-06-17 10:18:01'),(88,'vente','supprimer',1,1,'2020-06-17 10:18:01','2020-06-17 10:18:01');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stocks` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quantiteAnterieure` int(11) NOT NULL,
  `variation` int(11) NOT NULL,
  `quantiteActuelle` int(11) NOT NULL,
  `transfert_id` bigint(20) unsigned DEFAULT NULL,
  `casse_id` bigint(20) unsigned DEFAULT NULL,
  `approvisionnement_id` bigint(20) unsigned DEFAULT NULL,
  `vente_id` bigint(20) unsigned DEFAULT NULL,
  `type_id` bigint(20) unsigned NOT NULL,
  `magasin_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stocks_transfert_id_foreign` (`transfert_id`),
  KEY `stocks_casse_id_foreign` (`casse_id`),
  KEY `stocks_approvisionnement_id_foreign` (`approvisionnement_id`),
  KEY `stocks_vente_id_foreign` (`vente_id`),
  KEY `stocks_type_id_foreign` (`type_id`),
  KEY `stocks_magasin_id_foreign` (`magasin_id`),
  CONSTRAINT `stocks_approvisionnement_id_foreign` FOREIGN KEY (`approvisionnement_id`) REFERENCES `approvisionnements` (`id`),
  CONSTRAINT `stocks_casse_id_foreign` FOREIGN KEY (`casse_id`) REFERENCES `casses` (`id`),
  CONSTRAINT `stocks_magasin_id_foreign` FOREIGN KEY (`magasin_id`) REFERENCES `magasins` (`id`),
  CONSTRAINT `stocks_transfert_id_foreign` FOREIGN KEY (`transfert_id`) REFERENCES `transferts` (`id`),
  CONSTRAINT `stocks_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`),
  CONSTRAINT `stocks_vente_id_foreign` FOREIGN KEY (`vente_id`) REFERENCES `ventes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
INSERT INTO `stocks` VALUES (1,0,5,5,NULL,NULL,1,NULL,2,1,'2020-06-17 09:16:38','2020-06-17 09:16:38'),(2,0,2,2,1,NULL,NULL,NULL,2,2,'2020-06-17 10:38:19','2020-06-17 10:38:19'),(3,5,-2,3,1,NULL,NULL,NULL,2,1,'2020-06-17 10:38:19','2020-06-17 10:38:19'),(4,3,-2,1,NULL,2,NULL,NULL,2,1,'2020-06-17 11:10:25','2020-06-17 11:13:23'),(5,0,25,25,NULL,NULL,2,NULL,1,2,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(6,0,50,50,NULL,NULL,2,NULL,1,1,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(7,2,15,17,NULL,NULL,2,NULL,2,2,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(8,1,30,31,NULL,NULL,2,NULL,2,1,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(9,0,40,40,NULL,NULL,2,NULL,3,2,'2020-06-17 23:19:48','2020-06-17 23:19:48'),(10,0,80,80,NULL,NULL,2,NULL,3,1,'2020-06-17 23:19:48','2020-06-17 23:19:48');
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transfert_types`
--

DROP TABLE IF EXISTS `transfert_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transfert_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quantite` int(11) NOT NULL,
  `magasinDepart` int(11) NOT NULL,
  `magasinArrive` int(11) NOT NULL,
  `transfert_id` bigint(20) unsigned NOT NULL,
  `type_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transfert_types_transfert_id_foreign` (`transfert_id`),
  KEY `transfert_types_type_id_foreign` (`type_id`),
  CONSTRAINT `transfert_types_transfert_id_foreign` FOREIGN KEY (`transfert_id`) REFERENCES `transferts` (`id`),
  CONSTRAINT `transfert_types_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transfert_types`
--

LOCK TABLES `transfert_types` WRITE;
/*!40000 ALTER TABLE `transfert_types` DISABLE KEYS */;
INSERT INTO `transfert_types` VALUES (1,2,1,2,1,2,'2020-06-17 10:38:19','2020-06-17 10:38:19');
/*!40000 ALTER TABLE `transfert_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transferts`
--

DROP TABLE IF EXISTS `transferts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transferts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `refTrans` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `transferts_reftrans_unique` (`refTrans`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transferts`
--

LOCK TABLES `transferts` WRITE;
/*!40000 ALTER TABLE `transferts` DISABLE KEYS */;
INSERT INTO `transferts` VALUES (1,'Transf/17-06-20/n°1','2020-06-17 10:38:18','2020-06-17 10:38:18');
/*!40000 ALTER TABLE `transferts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nomType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `article_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `types_article_id_foreign` (`article_id`),
  CONSTRAINT `types_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'33cl',1,'2020-06-17 08:54:49','2020-06-17 08:54:49'),(2,'50cl',1,'2020-06-17 08:54:49','2020-06-17 08:54:49'),(3,'1500cl',1,'2020-06-17 08:54:49','2020-06-17 08:54:49');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ddv hgf','jb@jb.bf',NULL,'$2y$10$8B1cWOqr.8UelD0DeAFLleWuKozRPUNKMhF5l1eqwNr6AE23606I.',NULL,'2020-06-15 15:22:08','2020-06-15 15:22:08');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventes`
--

DROP TABLE IF EXISTS `ventes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `referenceVente` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remise` int(11) NOT NULL,
  `netAPayer` int(11) NOT NULL,
  `prixTotal` int(11) NOT NULL,
  `sommeVersee` int(11) NOT NULL,
  `reliquat` int(11) NOT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ventes_referencevente_unique` (`referenceVente`),
  KEY `ventes_client_id_foreign` (`client_id`),
  CONSTRAINT `ventes_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventes`
--

LOCK TABLES `ventes` WRITE;
/*!40000 ALTER TABLE `ventes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `versements`
--

DROP TABLE IF EXISTS `versements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `versements` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `versements`
--

LOCK TABLES `versements` WRITE;
/*!40000 ALTER TABLE `versements` DISABLE KEYS */;
/*!40000 ALTER TABLE `versements` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-18 19:38:28
