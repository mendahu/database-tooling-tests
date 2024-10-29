BEGIN;

INSERT INTO authors (name) VALUES 
  ('John Doe'),
  ('Jane Doe'),
  ('Alice Doe'),
  ('Bob Doe');

INSERT INTO books (title, description) VALUES 
  ('Book 1', 'Description 1'),
  ('Book 2', 'Description 2'),
  ('Book 3', NULL),
  ('Book 4', NULL);

COMMIT;