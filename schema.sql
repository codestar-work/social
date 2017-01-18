-- https://github.com/codestar-work/social

create database dekidol default charset='utf8';
use dekidol;
create table member (
  id   serial,
  name varchar(255),
  password varchar(1023),
  full_name varchar(255),
  info  varchar(1023),
  photo varchar(255)
);
insert into member(name, password, full_name)
values('markz', sha2('mark123', 512), 'Mark Zuckerberg');


