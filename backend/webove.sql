-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hostiteľ: 127.0.0.1
-- Čas generovania: St 27.Nov 2024, 22:11
-- Verzia serveru: 10.4.28-MariaDB
-- Verzia PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáza: `webove`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `birth_year` int(4) NOT NULL,
  `country` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `users`
--

INSERT INTO `users` (`id`, `name`, `birth_year`, `country`, `email`, `phone`, `note`) VALUES
(1, 'fero', 2000, 'slovakia', 'fero@gmail.com', '0903065686', 'nic'),
(3, 'ja', 2000, 'slovakia', 'fds@fsdf.com', '1111', 'on'),
(4, 'fsdaf', 2000, 'SDS', '333@fds.com', '1111111111', ''),
(5, 'fff', 1999, 'slov', 'DD@ff.com', '+421910112092', ''),
(6, 'fsdfa', 1999, 'fsdaf', 'fdfsaro@gfdsail.com', '+421903065688', ''),
(7, 'jaaa', 1999, 'fsdaf', 'fds@fsdfadf.com', '+421922344545', 'addf'),
(8, 'fsdf', 1999, 'fdsf', 'fero@gdsfl.com', '+421903065111', ''),
(9, 'FFF', 1999, 'DDD', '321@fsdf.com', '+421903065222', 'f'),
(11, 'FFF', 1999, 'DDD', '21@fsdf.com', '+421903065222', 'f'),
(12, 'FFF', 1902, 'DDD', 'ja@mail.com', '+421901234522', '2'),
(13, 'DDD', 1922, 'FFF', '1112@gmail.com', '+421903065555', '1');

--
-- Kľúče pre exportované tabuľky
--

--
-- Indexy pre tabuľku `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pre exportované tabuľky
--

--
-- AUTO_INCREMENT pre tabuľku `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
