DROP DATABASE IF EXISTS write_tingz;
CREATE DATABASE write_tingz;

\c write_tingz; 

-- CREATE TABLE users (
--    user_id serial PRIMARY KEY, 
--    username VARCHAR(60) UNIQUE NOT NULL,
--    --should allow for it to make only single sn
--    email: VARCHAR UNIQUE NOT NULL,
--    --this might be an issue take out uni if anything
--    password TEXT NOT NULL 
--    --Might be another Varchar 
-- --   add admin after MVP is done. Likely Pool or PK
-- -- create table for TOS or add in. Google it. 
-- -- maybe should be named log in
-- --might put email or make it a seperate sign up. Circle back. 
-- ); 

DROP TABLE IF EXISTS posts; 

CREATE TABLE posts (
   article_id SERIAL PRIMARY KEY, 
   title VARCHAR(200) NOT NULL, 
   author VARCHAR(60) NOT NULL,
   content TEXT NOT NULL, 
   post_type TEXT DEFAULT 'Select Post Type',
   updated_at TIMESTAMP, 
   created_at DATE,
   is_liked BOOL ,
   is_bookmarked BOOL
);


