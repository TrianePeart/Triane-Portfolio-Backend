DROP DATABASE IF EXISTS ;
CREATE DATABASE 

\c ; 

CREATE TABLE users (
   id serial PRIMARY KEY, 
   userName VARCHAR(60),
   password TEXT, 
--   add admin after MVP is done. Likely Pool or PK
-- create table for TOS or add in. Google it. 
-- maybe should be named log in
--might put email or make it a seperate sign up. Circle back. 
); 
