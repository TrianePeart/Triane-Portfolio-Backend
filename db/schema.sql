DROP DATABASE IF EXISTS write_tingz;
CREATE DATABASE write_tingz;

\c write_tingz; 


DROP TABLE IF EXISTS posts; 

CREATE TABLE posts (
   id SERIAL PRIMARY KEY, 
   title VARCHAR(200) NOT NULL, 
   author VARCHAR(60) NOT NULL,
   content TEXT NOT NULL, 
   post_type TEXT DEFAULT 'Select Post Type',
   is_liked BOOL ,
   is_bookmarked BOOL
);

-- DROP TABLE IF EX

