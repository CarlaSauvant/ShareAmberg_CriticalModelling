create database ShareAmberg;

use ShareAmberg;

#Actors table

create table ClimateProtectionOffice(
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
 created_date DATE NOT NULL,
 modifed_date DATE NOT NULL
 );

#Headlines table
 
 CREATE TABLE RiverbedConditions (
 ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 headline_name VARCHAR(50) NOT NULL,
 headline_description VARCHAR(500) NOT NULL,
 keywords VARCHAR(75),
 links INT(75),
 created_date DATE NOT NULL,
 modifed_date DATE NOT NULL
 );
 
 #Data table
 
 CREATE TABLE EvacuationPlan(
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
 created_date DATE NOT NULL,
 modifed_date DATE NOT NULL
 );
 
ALTER TABLE `shareamberg`.`data_stratigraphy` 
CHANGE COLUMN `data_latitude` `data_latitude` DECIMAL(8,6) NULL ,
CHANGE COLUMN `data_longitude` `data_longitude` DECIMAL(9,6) NULL ;

ALTER TABLE `shareamberg`.`head_soilconditions` 
CHANGE COLUMN `headline_name` `head_name` VARCHAR(50) NOT NULL ,
CHANGE COLUMN `headline_description` `head_description` MEDIUMTEXT NULL ;

ALTER TABLE `shareamberg`.`data_stratigraphy` 
DROP COLUMN `links`,
CHANGE COLUMN `data_source` `data_source` VARCHAR(200) NULL ,
CHANGE COLUMN `data_providers` `data_author` VARCHAR(50) NULL ,
CHANGE COLUMN `data_maintainers` `data_maintainers` VARCHAR(50) NOT NULL ;

ALTER TABLE `shareamberg`.`head_riverbedconditions` 
DROP COLUMN `links`,
CHANGE COLUMN `keywords` `keywords` VARCHAR(75) NOT NULL;

ALTER TABLE `shareamberg`.`act_climateprotectionoffice` 
DROP COLUMN `links`,
CHANGE COLUMN `keywords` `keywords` VARCHAR(75) NOT NULL ,
CHANGE COLUMN `created_date` `created_date` DATE NULL ,
CHANGE COLUMN `modifed_date` `modifed_date` DATE NULL ;

insert into data_chemicalanalysis values
(0, "Chemical Analysis", "https://www.lfu.bayern.de/boden/bodenlehrpfade/doc/tafel_amberg.pdf", "PDF", "NULL", "Hochschule Amberg",
 "Civil Engineering Office", null, null, "earth, soil, vils, foundations, river, deformations", "1988-10-18", "2018-09-27");
