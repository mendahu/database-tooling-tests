-- These queries do a straight compare of with or without JSON functions
SELECT
  books.id,
  books.title,
  books.description,
  (SELECT
    row_to_json(authors)
      FROM
        (SELECT authors.name) as authors
  ) as author
FROM
  books
JOIN authors ON authors.id = books.author_id;

SELECT
  books.id,
  books.title,
  books.description,
  (SELECT authors.name) as authors
FROM
  books
JOIN authors ON authors.id = books.author_id;

-- This more accurate describes how two implementations might actually look (but there will be server work in addition to this)
SELECT
  books.id,
  books.title,
  books.description,
  (SELECT
    row_to_json(authors)
      FROM
        (SELECT authors.id, authors.name) as authors
  ) as author
FROM
  books
JOIN authors ON authors.id = books.author_id;

SELECT
  books.id,
  books.title,
  books.description,
  authors.id as author_id,
  authors.name as author_name
FROM
  books
JOIN authors ON authors.id = books.author_id;
