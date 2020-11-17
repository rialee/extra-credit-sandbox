DROP DATABASE IF EXISTS extra_credit_db;
CREATE DATABASE extra_credit_db;

USE extra_credit_db;

-- SEARCH HISTORY --
CREATE TABLE search_history(
    id INT NOT NULL AUTO_INCREMENT,
    search_price INTEGER,
    PRIMARY KEY (id)
);

-- WALLET --
CREATE TABLE wallet (
  id INT NOT NULL AUTO_INCREMENT,
  cc_name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);


-- Credit Cards --
CREATE TABLE credit_cards (
  id INT NOT NULL AUTO_INCREMENT,
  cc_name VARCHAR(45) NOT NULL,
  miles  VARCHAR(15),
  rewards VARCHAR(15),
  cashback VARCHAR(15),
  PRIMARY KEY (id)
);

INSERT INTO credit_cards (cc_name, rewards)
VALUES ("Amex Gold", "4X");

INSERT INTO credit_cards (cc_name, rewards, cashback)
VALUES ("Chase Freedom", "3X", "4%");

INSERT INTO credit_cards (cc_name, miles, rewards, cashback)
VALUES ("Chase Sapphire", "3X", "3X", "5X");

INSERT INTO credit_cards (cc_name, cashback)
VALUES ("Amex Blue Everyday", "3X");

INSERT INTO credit_cards (cc_name, rewards, cashback)
VALUES (" Amex Blue Cash Preferred","1X", "6X");

INSERT INTO credit_cards (cc_name, miles, rewards)
VALUES ("BOA Travel Rewards", "3X","1.5X");


-- FACTS --
CREATE TABLE facts_library (
  id INT NOT NULL AUTO_INCREMENT,
  fact VARCHAR(400) NOT NULL,
  PRIMARY KEY (id)
);
