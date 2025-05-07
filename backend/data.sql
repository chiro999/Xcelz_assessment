CREATE DATABASE IF NOT EXISTS itemdb;
USE itemdb;

CREATE TABLE IF NOT EXISTS properties (
  id INT AUTO_INCREMENT PRIMARY KEY,
  propertyName VARCHAR(255),
  price VARCHAR(20),
  priceInLakhs DECIMAL(10,2),
  bedrooms INT,
  bathrooms INT,
  location VARCHAR(100),
  imageURL TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
