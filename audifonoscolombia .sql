-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-03-2023 a las 01:44:47
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `audifonoscolombia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `idDepartamentos` int(11) NOT NULL,
  `nombreDepartamento` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`idDepartamentos`, `nombreDepartamento`) VALUES
(1, 'Cundinamarca'),
(2, 'Antioquia'),
(3, 'Atlántico'),
(4, 'Huila'),
(5, 'Tolima');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleventa`
--

CREATE TABLE `detalleventa` (
  `idDetalleVenta` int(11) NOT NULL,
  `Fk_idUsuarios` int(11) NOT NULL,
  `fechaVenta` date NOT NULL,
  `subtotal` double NOT NULL,
  `IVA` double NOT NULL,
  `total` double NOT NULL,
  `Usuarios_Fk_idtpdocumento` int(11) NOT NULL,
  `Usuarios_Fk_idDepartamentos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `detalleventa`
--

INSERT INTO `detalleventa` (`idDetalleVenta`, `Fk_idUsuarios`, `fechaVenta`, `subtotal`, `IVA`, `total`, `Usuarios_Fk_idtpdocumento`, `Usuarios_Fk_idDepartamentos`) VALUES
(1, 2, '2023-03-24', 294118, 55882, 350000, 1, 2),
(2, 3, '2023-03-24', 168068, 31932, 200000, 1, 1),
(3, 4, '2023-03-24', 336135, 63865, 400000, 1, 4),
(4, 1, '2023-03-24', 151261, 28739, 180000, 1, 1),
(5, 5, '2023-03-24', 168068, 31932, 200000, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleventa_has_productos`
--

CREATE TABLE `detalleventa_has_productos` (
  `detalleVenta_idDetalleVenta` int(11) NOT NULL,
  `Productos_idProductos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `detalleventa_has_productos`
--

INSERT INTO `detalleventa_has_productos` (`detalleVenta_idDetalleVenta`, `Productos_idProductos`) VALUES
(1, 1),
(2, 2),
(2, 4),
(3, 6),
(3, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProductos` int(11) NOT NULL,
  `nombreProducto` varchar(45) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `precio` double NOT NULL,
  `cantidad` double NOT NULL,
  `URL` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProductos`, `nombreProducto`, `descripcion`, `precio`, `cantidad`, `URL`) VALUES
(1, 'SENZER SG500 Surround Sound Pro', 'Los auriculares Senzer SG500 son plegables, livianos y cómodos con almohadillas desmontables. Cuentan con micrófono antiestático con cancelación de ruido y capacidad de sonido envolvente. Son compatibles con múltiples plataformas y Plug and Play.', 350000, 10, 'https://i.postimg.cc/cCrgNq4W/senzer-sg500-surround-sound-pro.webp'),
(2, 'sephia SP3060 Auriculares', 'Auriculares con cable ideales para correr o hacer ejercicio, con 6 juegos de almohadillas y un potente imán de neodimio de 0.394 in para una excelente claridad de audio y aislamiento de ruido. Diseño ligero y elegante en color plateado y negro.', 200000, 10, 'https://i.postimg.cc/PfRvQq25/sephia-sp3060-auriculares.webp'),
(3, 'Auriculares inalámbricos JBL Tune 125TWS', 'Ofrecen un sonido de graves puros de alta calidad y hasta 32 horas de duración de batería. Además, se emparejan fácilmente con dispositivos Android. Los auriculares cuentan con controles independientes para llamadas y música.', 150000, 30, 'https://i.postimg.cc/VL0rGcVB/s-inal195161mbricos-jbl-tune-125tws.webp'),
(4, 'Luckyu Auriculares Bluetooth 5.0 con orejas d', 'Auriculares Bluetooth 5.0 plegables con aislamiento de ruido, micrófono integrado, tres modos de reproducción de música, modo FM, diadema ajustable y cómoda, orejas de gato con luces LED y batería recargable de 400 mAh.', 400000, 10, 'https://i.postimg.cc/MGmj7brC/luckyu-auriculares-inalambrico.webp'),
(5, 'Itayak Bluetooth 5.0', 'Auriculares detrás de la cabeza con tecnología Bluetooth 5.0 ofrecen una transmisión más rápida y una conexión estable con dispositivos Bluetooth. Con un rango de conexión de 33 pies, proporcionan llamadas telefónicas manos libres.', 250000, 10, 'https://i.postimg.cc/Gh6Ydpy5/itayak-bluetooth-5-0.webp'),
(6, 'Otium Auriculares Bluetooth inalámbricos', 'Los auriculares Bluetooth U18 cuentan con la última tecnología Bluetooth 5.1 y componentes acústicos mejorados para ofrecer auténtico sonido HD de alta fidelidad con graves profundos y agudos cristalinos. ', 180000, 10, 'https://i.postimg.cc/fRXdLh7T/iculares-bluetooth-inal195161mbricos.webp'),
(7, 'EKSA E900 - Auriculares para juegos con micró', 'Tienen un micrófono desmontable con tecnología de cancelación de ruido omnidireccional, con ajuste de volumen, son ideales para juegos, trabajo, estudios, chats y Skype. Transmisiones de voz fuertes y de alta calidad garantizadas.', 380000, 15, 'https://i.postimg.cc/zfrgHPpw/eksa-e900-auriculares-para-juegos.webp'),
(8, 'Auriculares inalámbricos Bluetooth ZIYOU LANG', 'Están equipados con altavoz de alta calidad y micrófono integrado, pueden ofrecer un sonido estéreo de alta resolución o graves profundos al escuchar música, te mantienen alejado del ruido circundante.', 300000, 10, 'https://i.postimg.cc/vBPgj8yX/auriculares-inal195161mbricosziyou.webp'),
(9, 'Auriculares inalámbricos Bluetooth PSIER', 'Tienen almohadillas de silicona planas y redondas para adaptarse a diferentes orejas, ganchos antideslizantes para un ajuste seguro durante el ejercicio y un sello acústico que cierra el sonido. Diseñados para comodidad durante largas horas de uso.', 170000, 30, 'https://i.postimg.cc/T1FydkpD/auriculares-inal195161mbricospsier.webp'),
(10, 'Audífonos inalámbricos Bluetooth PRTUKYT', 'Audífonos inalámbricos con chip Bluetooth 5.0 avanzado, graves profundos y agudos cristalinos, recargables y con respuesta precisa de graves. Ofrecen calidad de sonido superior, rango de frecuencia ampliado y música envolvente a bajo volumen.', 200000, 15, 'https://i.postimg.cc/ZRYvVBGC/95173fonos-inal195161mbricos-prtukyt.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idRoles` int(11) NOT NULL,
  `nombreRol` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idRoles`, `nombreRol`) VALUES
(1, 'Cliente'),
(2, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodocumentos`
--

CREATE TABLE `tipodocumentos` (
  `idtpdocumento` int(11) NOT NULL,
  `tpDocumento` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tipodocumentos`
--

INSERT INTO `tipodocumentos` (`idtpdocumento`, `tpDocumento`) VALUES
(1, 'Cedula Ciudadanía'),
(2, 'Cedula Extranjería'),
(3, 'Tarjeta de identidad'),
(4, 'Pasaporte'),
(5, 'Registro civil de nacimiento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuarios` int(11) NOT NULL,
  `email` varchar(35) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombreCompleto` varchar(255) NOT NULL,
  `Fk_idRoles` int(11) NOT NULL,
  `Fk_idtpdocumento` int(11) DEFAULT NULL,
  `numeroDocumento` bigint(20) DEFAULT NULL,
  `telefono` bigint(14) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `Fk_idDepartamentos` int(11) DEFAULT NULL,
  `ciudadMunicipio` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuarios`, `email`, `password`, `nombreCompleto`, `Fk_idRoles`, `Fk_idtpdocumento`, `numeroDocumento`, `telefono`, `direccion`, `Fk_idDepartamentos`, `ciudadMunicipio`) VALUES
(1, 'juanito@gmail.com', '123', 'Juanito Perez', 1, 1, 1010789110, 3005983425, 'calle 45#12a-47', 1, 'Bogota DC'),
(2, 'navajapedro@gmail.com', '1234', 'Pedro Navaja', 1, 1, 1011889044, 3105393001, 'calle 4#17a-20', 2, 'Medellin'),
(3, 'valdez@gmail.com', '12345', 'Juan Valdez', 1, 1, 1048009812, 3114563021, 'carrera 20 4#13a-12', 1, 'Bogota DC'),
(4, 'tony@gmail.com', '123456', 'Antonio Nariño', 1, 1, 1023459091, 3002899174, 'carrera 47 4#20b-11', 4, 'Neiva'),
(5, 'cami@gmail.com', '1234567', 'Camilo Torres', 1, 1, 1013457892, 3001236789, 'carrera 47 4#20b-11', 1, 'Bogota DC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`idDepartamentos`);

--
-- Indices de la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  ADD PRIMARY KEY (`idDetalleVenta`),
  ADD KEY `fk_detalleVenta_Usuarios1` (`Fk_idUsuarios`),
  ADD KEY `Usuarios_Fk_idtpdocumento` (`Usuarios_Fk_idtpdocumento`),
  ADD KEY `Usuarios_Fk_idDepartamentos` (`Usuarios_Fk_idDepartamentos`);

--
-- Indices de la tabla `detalleventa_has_productos`
--
ALTER TABLE `detalleventa_has_productos`
  ADD KEY `fk_detalleVenta_has_Productos_detalleVenta1` (`detalleVenta_idDetalleVenta`),
  ADD KEY `fk_detalleVenta_has_Productos_Productos1` (`Productos_idProductos`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProductos`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRoles`);

--
-- Indices de la tabla `tipodocumentos`
--
ALTER TABLE `tipodocumentos`
  ADD PRIMARY KEY (`idtpdocumento`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuarios`),
  ADD KEY `fk_Usuarios_Roles1` (`Fk_idRoles`),
  ADD KEY `fk_Usuarios_TipoDocumentos1` (`Fk_idtpdocumento`),
  ADD KEY `fk_Usuarios_Departamentos` (`Fk_idDepartamentos`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `idDepartamentos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  MODIFY `idDetalleVenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProductos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idRoles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipodocumentos`
--
ALTER TABLE `tipodocumentos`
  MODIFY `idtpdocumento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalleventa`
--
ALTER TABLE `detalleventa`
  ADD CONSTRAINT `Usuarios_Fk_idDepartamentos` FOREIGN KEY (`Usuarios_Fk_idDepartamentos`) REFERENCES `usuarios` (`Fk_idDepartamentos`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Usuarios_Fk_idtpdocumento` FOREIGN KEY (`Usuarios_Fk_idtpdocumento`) REFERENCES `usuarios` (`Fk_idtpdocumento`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_detalleVenta_Usuarios1` FOREIGN KEY (`Fk_idUsuarios`) REFERENCES `usuarios` (`idUsuarios`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalleventa_has_productos`
--
ALTER TABLE `detalleventa_has_productos`
  ADD CONSTRAINT `fk_detalleVenta_has_Productos_Productos1` FOREIGN KEY (`Productos_idProductos`) REFERENCES `productos` (`idProductos`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_detalleVenta_has_Productos_detalleVenta1` FOREIGN KEY (`detalleVenta_idDetalleVenta`) REFERENCES `detalleventa` (`idDetalleVenta`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_Usuarios_Departamentos` FOREIGN KEY (`Fk_idDepartamentos`) REFERENCES `departamentos` (`idDepartamentos`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Usuarios_Roles1` FOREIGN KEY (`Fk_idRoles`) REFERENCES `roles` (`idRoles`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Usuarios_TipoDocumentos1` FOREIGN KEY (`Fk_idtpdocumento`) REFERENCES `tipodocumentos` (`idtpdocumento`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
