-- creating the database
drop database if exists cms_db;
create database cms_db;

use cms_db;

create table departments (
    id int not null auto_increment,
    name varchar(30) not null,
    primary key (id)
);

create table roles (
    id int not null,
    title varchar(30) not null,
    salary decimal not null,
    dept_id int,
    foreign key (dept_id),
    references departments (id),
    primary key (id)
    on delete set null
);

create table employees (
    id int not null auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int,
    foreign key (role_id),
    references roles (id),
    foreign key (manager_id),
    references employees (id),
    on delete set null
)