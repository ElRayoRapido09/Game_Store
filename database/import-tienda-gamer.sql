-- ============================================================
-- Script de Importación de Base de Datos: tienda_gamer
-- ============================================================
-- Instrucciones de uso:
-- 1. Abrir MySQL Workbench o línea de comandos MySQL
-- 2. Conectarse al servidor MySQL
-- 3. Ejecutar este archivo completo
-- 
-- Desde línea de comandos:
-- mysql -u root -p < import-tienda-gamer.sql
--
-- Desde MySQL Workbench:
-- File > Run SQL Script > Seleccionar este archivo
-- ============================================================

-- Configuración inicial
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- ============================================================
-- PASO 1: Crear y usar la base de datos
-- ============================================================
DROP DATABASE IF EXISTS `tienda_gamer`;
CREATE DATABASE `tienda_gamer` 
  DEFAULT CHARACTER SET utf8mb4 
  COLLATE utf8mb4_0900_ai_ci;

USE `tienda_gamer`;

-- ============================================================
-- PASO 2: Crear todas las tablas
-- ============================================================

-- Tabla: users
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `bio` text,
  `joinDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `role` varchar(20) NOT NULL DEFAULT 'user',
  `username` varchar(100) NOT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpires` timestamp NULL DEFAULT NULL,
  `resetPasswordCode` varchar(6) DEFAULT NULL,
  `resetPasswordCodeExpires` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: categories
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: tags
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: games
CREATE TABLE `games` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text,
  `publisher` varchar(100) DEFAULT NULL,
  `developer` varchar(100) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `base_price` decimal(10,2) NOT NULL,
  `discount_percentage` decimal(5,2) DEFAULT '0.00',
  `current_price` decimal(10,2) GENERATED ALWAYS AS ((`base_price` - ((`base_price` * `discount_percentage`) / 100))) STORED,
  `image_url` varchar(255) DEFAULT NULL,
  `trailer_url` varchar(255) DEFAULT NULL,
  `system_requirements` text,
  `is_featured` tinyint(1) DEFAULT '0',
  `stock_quantity` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_games_title` (`title`),
  KEY `idx_games_price` (`current_price`),
  KEY `idx_games_release_date` (`release_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: forums
CREATE TABLE `forums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `icon` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: payment_methods
CREATE TABLE `payment_methods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `payment_type` varchar(50) NOT NULL,
  `provider` varchar(50) DEFAULT NULL,
  `account_number` varchar(255) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `is_default` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `payment_methods_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: orders
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `payment_method_id` int DEFAULT NULL,
  `status` varchar(20) DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `payment_method_id` (`payment_method_id`),
  KEY `idx_orders_user` (`user_id`),
  KEY `idx_orders_status` (`status`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: game_keys
CREATE TABLE `game_keys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `game_id` int DEFAULT NULL,
  `key_code` varchar(100) NOT NULL,
  `is_sold` tinyint(1) DEFAULT '0',
  `order_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key_code` (`key_code`),
  KEY `game_id` (`game_id`),
  KEY `order_id` (`order_id`),
  KEY `idx_game_keys_sold` (`is_sold`),
  CONSTRAINT `game_keys_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  CONSTRAINT `game_keys_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: order_items
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `game_id` int DEFAULT NULL,
  `game_key_id` int DEFAULT NULL,
  `price_at_purchase` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `game_id` (`game_id`),
  KEY `game_key_id` (`game_key_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE SET NULL,
  CONSTRAINT `order_items_ibfk_3` FOREIGN KEY (`game_key_id`) REFERENCES `game_keys` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: game_categories
CREATE TABLE `game_categories` (
  `game_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`game_id`,`category_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `game_categories_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  CONSTRAINT `game_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: game_tags
CREATE TABLE `game_tags` (
  `game_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`game_id`,`tag_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `game_tags_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  CONSTRAINT `game_tags_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: threads
CREATE TABLE `threads` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `viewCount` int NOT NULL DEFAULT '0',
  `isPinned` tinyint NOT NULL DEFAULT '0',
  `isLocked` tinyint NOT NULL DEFAULT '0',
  `tags` text,
  `authorId` int DEFAULT NULL,
  `forumId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_7d2172aeb12db58bf620d14792d` (`authorId`),
  KEY `FK_1642eb567a58dcd0e7ee5d5667b` (`forumId`),
  CONSTRAINT `FK_7d2172aeb12db58bf620d14792d` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_1642eb567a58dcd0e7ee5d5667b` FOREIGN KEY (`forumId`) REFERENCES `forums` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: posts
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isEdited` tinyint NOT NULL DEFAULT '0',
  `likes` int NOT NULL DEFAULT '0',
  `isAcceptedAnswer` tinyint NOT NULL DEFAULT '0',
  `authorId` int DEFAULT NULL,
  `threadId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c5a322ad12a7bf95460c958e80e` (`authorId`),
  KEY `FK_358568744a046c3fd71188174f3` (`threadId`),
  CONSTRAINT `FK_358568744a046c3fd71188174f3` FOREIGN KEY (`threadId`) REFERENCES `threads` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_c5a322ad12a7bf95460c958e80e` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: reviews
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `game_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `comment` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `game_id` (`game_id`,`user_id`),
  KEY `user_id` (`user_id`),
  KEY `idx_reviews_game` (`game_id`),
  KEY `idx_reviews_rating` (`rating`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `reviews_chk_1` CHECK ((`rating` between 1 and 5))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ============================================================
-- PASO 3: Insertar datos iniciales
-- ============================================================

-- Datos para categories
INSERT INTO `categories` (`id`, `name`, `description`) VALUES
  (1, 'Action', 'Juegos centrados en combate y desafíos que prueban los reflejos del jugador'),
  (2, 'Aventura', 'Juegos que enfatizan la exploración y resolución de puzzles'),
  (3, 'RPG', 'Juegos de rol con desarrollo de personajes y narrativa'),
  (4, 'Estrategia', 'Juegos que priorizan el pensamiento y la planificación'),
  (5, 'Simulación', 'Juegos que simulan actividades del mundo real'),
  (6, 'Deportes', 'Juegos basados en deportes reales'),
  (7, 'Carreras', 'Juegos centrados en conducir y competir con vehículos'),
  (8, 'Puzzle', 'Juegos centrados en resolver acertijos'),
  (9, 'Terror', 'Juegos diseñados para asustar a los jugadores'),
  (10, 'Mundo Abierto', 'Juegos con grandes entornos explorables');

-- Datos para tags
INSERT INTO `tags` (`id`, `name`) VALUES
  (11, 'AAA'),
  (9, 'Acceso anticipado'),
  (14, 'Casual'),
  (13, 'Competitivo'),
  (3, 'Cooperativo'),
  (12, 'Free-to-Play'),
  (10, 'Indie'),
  (1, 'Multijugador'),
  (5, 'Primera persona'),
  (4, 'PvP'),
  (15, 'Rica historia'),
  (8, 'Soporte para mando'),
  (7, 'Soporte VR'),
  (6, 'Tercera persona'),
  (2, 'Un jugador');

-- Datos para users (usuarios de ejemplo)
INSERT INTO `users` (`id`, `email`, `firstName`, `lastName`, `password`, `avatar`, `bio`, `joinDate`, `role`, `username`, `resetPasswordToken`, `resetPasswordExpires`, `resetPasswordCode`, `resetPasswordCodeExpires`) VALUES
  (1, 'lechuga@gmail.com', NULL, NULL, '', NULL, NULL, '2025-05-23 00:45:15', 'user', '', NULL, NULL, NULL, NULL),
  (2, 'figueroaantuane6@hotmail.com', NULL, NULL, '$2b$10$sJ3cygNjQw2z1MY/JvnXUuFv7aunw/ElWMKpQgL.yYI9t90Oumi1.', NULL, NULL, '2025-05-23 01:26:57', 'user', 'Antonymoxz', NULL, NULL, NULL, NULL),
  (3, '4nt0n1MM@hotmail.com', 'Antuane', 'Grimaldo', '$2b$10$NtMrwO1mWdfTXPulsyk6e.wk7gXqKvjqZESqMhhz/VJD3HxMGQfai', NULL, NULL, '2025-05-23 04:38:44', 'user', 'Antonymox', NULL, NULL, NULL, NULL),
  (4, '4nt0n1MM@gmail.com', 'Angel', 'XD', '$2b$10$FKcPCK9zPrUMt7xZgotvM.eRDfAzkWOxDvLcZ52VsEbCa.WsAVgg6', NULL, NULL, '2025-10-07 15:42:42', 'user', 'AngelElPro', NULL, NULL, NULL, NULL);

-- ============================================================
-- PASO 4: Restaurar configuración
-- ============================================================
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- ============================================================
-- IMPORTACIÓN COMPLETADA EXITOSAMENTE
-- ============================================================
SELECT 'Base de datos tienda_gamer creada e inicializada correctamente!' AS STATUS;
