-- creating the database
drop database if exists cms_db;
create database cms_db;

use cms_db;

create table department (
    id int not null auto_increment,
    name varchar(30) not null
);

create table roles (
    id int not null,
    title varchar(30) not null,
    salary decimal not null,
    dept_id int,
    on delete set null
);

create table employee (
    id int not null auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int,
    on delete set null
)