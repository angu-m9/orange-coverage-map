CREATE DATABASE IF NOT EXISTS orange_coverage_map;
USE orange_coverage_map;

CREATE TABLE Company (
  company_id INT AUTO_INCREMENT PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  user_name VARCHAR(50) NOT NULL,
  user_lastname VARCHAR(50) NOT NULL,
  postal_code VARCHAR(20) NOT NULL,
  company_id INT,
  FOREIGN KEY (company_id) REFERENCES Company(company_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE LocationNetworkQuality (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_uuid VARCHAR(36),
  network CHAR(8) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  rtt FLOAT NOT NULL,
  downlink FLOAT NOT NULL,
  city VARCHAR(255), 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_uuid) REFERENCES Users(uuid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE NetworkQualityMode (
  mode_id INT AUTO_INCREMENT PRIMARY KEY,
  city VARCHAR(255) NOT NULL,
  most_common_network CHAR(8) NOT NULL,
  frequency INT NOT NULL,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE Admins (
  admin_id INT AUTO_INCREMENT PRIMARY KEY,
  admin_username VARCHAR(50) NOT NULL,
  admin_password VARCHAR(255) NOT NULL
  admin_username VARCHAR(50) NOT NULL,
  admin_password VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE AdminSession (
  session_id INT AUTO_INCREMENT PRIMARY KEY,
  admin_id INT,
  token VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES Admins (admin_id)
  FOREIGN KEY (admin_id) REFERENCES Admins (admin_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO Company (company_name) VALUES ('Orange');
INSERT INTO Company (company_name) VALUES ('Jazztel');
INSERT INTO Company (company_name) VALUES ('Simyo');


SELECT * FROM Users;
SELECT * FROM LocationNetworkQuality;
SELECT * FROM Company;
SELECT * FROM Admins;
SELECT * FROM AdminSession;
SELECT * FROM NetworkQualityMode;

INSERT INTO NetworkQualityMode (city, most_common_network, frequency) VALUES ('Madrid','4g' ,'5');
INSERT INTO NetworkQualityMode (city, most_common_network, frequency) VALUES ('Barcelona','4g' ,'6');
