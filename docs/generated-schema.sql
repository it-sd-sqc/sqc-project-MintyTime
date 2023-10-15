DROP TABLE IF EXISTS chapter CASCADE;
 DROP TABLE IF EXISTS pageNumber;

CREATE TABLE chapter (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE pageNumber (
  id SERIAL PRIMARY KEY,
  page_id INT NOT NULL, 
  title TEXT NOT NULL,
  number INT NOT NULL,
  FOREIGN KEY (page_id) REFERENCES chapter(id)
);


INSERT INTO chapter (title) VALUES
('' ),
('CHAP. II.' ),
('CHAP. III.' ),
('CHAP. IV.' ),
('CHAP. V.' ),
('CHAP. VI.' ),
('CHAP. VII.' ),
('CHAP. VIII.' ),
('CHAP. IX.' ),
('CHAP. X.' ),
('CHAP. XI.' ),
('CHAP. XII.' ),
('CHAP. XIII.' ),
('CONCLUDING CHAPTER.' ),
('' );

