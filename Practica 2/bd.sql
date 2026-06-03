CREATE DATABASE practica2;
USE practica2;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    createdAt DATETIME NOT NULL DEFAULT current_timestamp(),
    updatedAt DATETIME NOT NULL DEFAULT current_timestamp()
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    categoriaId INT,
    FOREIGN KEY (categoriaId) REFERENCES categorias(id)
);

INSERT INTO categorias (nombre, descripcion) VALUES
('Electrónica', 'Dispositivos electrónicos y gadgets'),
('Oficina', 'Material y accesorios de oficina'),
('Hogar', 'Productos para el hogar');

INSERT INTO productos (nombre, precio, categoriaId) VALUES
('Monitor Curvo 24', 1450.00, 1),
('Mouse Optico', 85.00, 1),
('Teclado Bluetooth', 260.00, 1),
('Fotocopiadora Laser', 3100.00, 2),
('Bolígrafo Tinta Gel', 8.50, 2),
('Escritorio de Madera', 1150.00, 2),
('Estante de Cocina', 420.00, 3),
('Microondas Digital', 890.00, 3),
('Lámpara LED', 75.00, 3);