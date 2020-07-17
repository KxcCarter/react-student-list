-- use database: react_student_list

-- create table
CREATE TABLE students
(
	id SERIAL PRIMARY KEY,
	github_name varchar(255)
);

-- add to database
INSERT INTO students
	(github_name)
VALUES
	('KxcCarter'),
	('ryanmikegregory');