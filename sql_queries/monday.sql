-- create user table
CREATE TABLE users(
	id serial primary key,
	lastname varchar(50),
	firstname varchar(50)
)

-- insert data into table
INSERT INTO users(lastname, firstname)
VALUES 
	('Simmons', 'Philip'),
	('Musk', 'Elon'),
	('Besos', 'Jess')

-- show all users
select * from users

-- only show last name columns
select lastname from users

-- show multiple columns
select firstname, id from users

-- order by last name, order by can have multiple values comma seperated
select * from users
	order by lastname

-- select from where
select * from users
	where lastname = 'Besos'

-- where comparison
select * from users
	where id > 1
-- create business table
-- must use bigint reference for elon and jeff's net worths
create table businesses(
	bus_name varchar,
	net_worth bigint,
	user_id int 
)

-- create second table in DB
INSERT INTO businesses(bus_name, net_worth, user_id)
VALUES
	('CodeCraftersAcad', 1200, 1),
	('Tesla', 46300000000, 2),
	('Amazon', 166300000000, 3)

-- join tables
SELECT users.firstname, users.lastname, businesses.bus_name, businesses.net_worth
FROM businesses
INNER JOIN users ON
users.id = businesses.user_id

-- get count from tables
SELECT COUNT(id) FROM users

-- get average and give alias
SELECT AVG(net_worth) AS "NET WORTH" FROM businesses

-- get min
SELECT MIN(net_worth) AS "POOREST PERSON" FROM businesses

-- get max
SELECT MAX(net_worth) AS "RICHEST PERSON" FROM businesses

-- subquery
SELECT * 
FROM users
WHERE id IN
(
	SELECT id
	FROM users
	WHERE id = 3
)

-- set variable names for tables
SELECT * FROM businesses b
WHERE b.user_id != 2

-- foreign keys
-- foreign key must be attached to unique value in parent tabel ie:serial primary key
 drop table orders
 create table orders(
 	id serial primary key,
	order_number int,
	cost float,
	bus_id int not null,
	FOREIGN KEY(bus_id) REFERENCES users(id)
 )
 
 INSERT INTO orders(order_number, cost, bus_id)
 VALUES
 	(123,1.23, 1),
	(234,2.34, 1),
	(345,3.45,1),
	(456,4.56, 1),
	(567,5.67, 2),
	(678,6.78,2),
	(789,7.89,3)

-- check order table
SELECT * FROM orders

-- join tables using aliases
SELECT u.firstname, u.lastname, o.bus_id, o.order_number
FROM users u
LEFT JOIN orders o ON
o.bus_id = u.id

-- add column to user table
ALTER TABLE users
ADD COLUMN email varchar

-- check added column
SELECT * FROM users

-- add values to email column
UPDATE users
SET email = 'phil@email.com'
WHERE firstname = 'Philip'

UPDATE users
SET firstname = 'Jeff'
WHERE firstname = 'Jess'

SELECT * FROM users

-- pattern matching
SELECT * 
FROM businesses
WHERE bus_name
LIKE 'A%'
-- LIKE '__s__'
-- LIKE '%z%'

SELECT *
FROM users
WHERE firstname
SIMILAR TO '%(J|P)%'