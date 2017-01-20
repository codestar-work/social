create database dekidol default charset='utf8';
create user dekidol@'%' identified by 'dekidol7';
grant all on dekidol.* to dekidol@'%';
use dekidol;
create table member (
  id   serial,
  name varchar(255) unique not null,
  password varchar(1023),
  full_name varchar(255),
  info  varchar(1023),
  photo varchar(255)
);
insert into member(name, password, full_name)
values('markz', sha2('mark123', 512), 'Mark Zuckerberg');

create table message (
  id serial,
  member bigint,
  text varchar(2047),
  time timestamp default now()
);