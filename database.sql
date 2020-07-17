-- use database: react_student_list

-- create table
CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	github_name varchar(255)
);

INSERT INTO students (github_name)
VALUES ('ryanmikegregory'),
('KxcCarter');