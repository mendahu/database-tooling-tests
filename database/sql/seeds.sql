BEGIN;

INSERT INTO authors (name, url) VALUES 
  ('John Doe', 'https://example.com/john-doe'),
  ('Jane Doe', 'https://example.com/jane-doe'),
  ('Alice Doe', NULL),
  ('Bob Doe', NULL);

INSERT INTO books (title, description, author_id, url) VALUES 
  ('Book 1', 'Description 1', 1, 'https://example.com/book-1'),
  ('Book 2', 'Description 2', 2, NULL),
  ('Book 3', NULL, 1, NULL),
  ('Book 4', NULL, 3, NULL);

COMMIT;