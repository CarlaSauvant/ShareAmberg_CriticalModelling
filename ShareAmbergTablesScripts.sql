USE [ShareAmberg]  --specify database name
 GO
 CREATE TABLE Actors (
 ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 actor_name VARCHAR(50) NOT NULL,
 actor_contact_name VARCHAR(50) NOT NULL,
 actor_address VARCHAR(100) NOT NULL,
 actor_phone_number VARCHAR(20) NOT NULL,
 actor_email VARCHAR(75) NOT NULL,
 website_contact_link VARCHAR(200) NOT NULL,
 actor_latitude DECIMAL(8,6) NOT NULL,
 actor_longitude DECIMAL(9,6) NOT NULL,
 keywords VARCHAR(75),
 links INT(75),
 created_date DATE NOT NULL DEFAULT GETDATE(),
 modifed_date DATE
 )
 
 GO
 SET ANSI_NULLS ON
 GO
 SET QUOTED_IDENTIFIER ON
 GO
 CREATE TRIGGER set_modified_date on Actors FOR UPDATE AS
 BEGIN
     UPDATE Actors
     SET modifed_Date = GETDATE()
     FROM Actors INNER JOIN deleted d ON Actors.id = d.id
 END
 GO
 ALTER TABLE Actors ENABLE TRIGGER [set_modified_date]
 GO
 
 
  CREATE TABLE Headlines (
 ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 headline_name VARCHAR(50) NOT NULL,
 headline_description VARCHAR(500) NOT NULL,
 keywords VARCHAR(75),
 links INT(75),
 created_date DATE NOT NULL DEFAULT GETDATE(),
 modifed_date DATE
 )
 
 USE [ShareAmberg]  --specify database name
 GO
 SET ANSI_NULLS ON
 GO
 SET QUOTED_IDENTIFIER ON
 GO
 CREATE TRIGGER set_modified_date on Headlines FOR UPDATE AS
 BEGIN
     UPDATE Headlines
     SET modifed_Date = GETDATE()
     FROM Headlines INNER JOIN deleted d ON Headlines.id = d.id
 END
 GO
 ALTER TABLE Actors ENABLE TRIGGER [set_modified_date]
 GO
 
 USE [ShareAmberg]  --specify database name
 GO
 CREATE TABLE DataPieces (
 ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 data_name VARCHAR(50) NOT NULL,
 data_source VARCHAR(200) NOT NULL,
 data_file_type VARCHAR(20) NOT NULL,
 data_link_to_file VARCHAR(200) NOT NULL,
 data_providers INT(75) NOT NULL,
 data_maintainers INT(75) NOT NULL,
 data_latitude DECIMAL(8,6) NOT NULL,
 data_longitude DECIMAL(9,6) NOT NULL,
 keywords VARCHAR(75),
 links INT(75),
 created_date DATE NOT NULL DEFAULT GETDATE(),
 modifed_date DATE
 )
 
 USE [ShareAmberg]  --specify database name
 GO
 SET ANSI_NULLS ON
 GO
 SET QUOTED_IDENTIFIER ON
 GO
 CREATE TRIGGER set_modified_date on DataPieces FOR UPDATE AS
 BEGIN
     UPDATE DataPieces
     SET modifed_Date = GETDATE()
     FROM DataPieces INNER JOIN deleted d ON DataPieces.id = d.id
 END
 GO
 ALTER TABLE DataPieces ENABLE TRIGGER [set_modified_date]
 GO