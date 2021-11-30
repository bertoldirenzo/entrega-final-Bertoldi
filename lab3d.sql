-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-11-2021 a las 01:19:49
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `lab3d`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

CREATE TABLE IF NOT EXISTS `trabajos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `trabajos`
--

INSERT INTO `trabajos` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, '                                Protesis Dental\r\n            \r\n            ', '                              Prótesis atornillada\r\n            \r\n            ', 'Prótesis atornillada en la cual el diente va atornillado implante. En este caso se recomienda que el pilar atornillado sea preparado por CAD-CAM, es decir diseñado por ordenador y preparado en una fresadora para asegurar buenos ajustes. Nunca colado, ya que es muy inexacto\r\n            ', 'bswcxx9dhiky8sfrpqnt'),
(5, '                                Protesis Dental\r\n            \r\n            ', '                                Prótesis Cementada\r\n            \r\n            ', '                              Protesis cementada en la cual el diente va cementado sobre implante, este cementado, que quiere decir pegado, se cementa sobre un pilar que conectamos al implante. Tiene el problema de no poder desatornillarse o apretar si en algún caso se aflojara.\r\n            \r\n            ', 'kw5eu5fqn1pdvkjohbri'),
(6, '                                Ortodoncias\r\n            \r\n            ', '                Alineadores Dentales        \r\n            ', '                \r\n\r\nLos alineadores transparentes están indicadas en caso de:\r\n\r\n    dientes que se solapan, dientes mal alineados, demasiado espacio entre los dientes, problemas de oclusión, disfunción de la articulación de la mandíbula (chasquidos, dolores, etc.)\r\n\r\n\r\n            \r\n            ', 'azznruqqs7mffysviqmi'),
(8, '                Hobbies\r\n            ', '                Anna Stich\r\n            ', '                Esta semana tambien realizamos piezas de hobbistas, en este caso un mate de Anna Stich. Espero les guste!\r\n            ', 'pu8uhi2f5v9m2btqwoh1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'renzo', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
