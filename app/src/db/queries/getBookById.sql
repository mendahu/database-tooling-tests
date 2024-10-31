SELECT
  books.id,
  books.title,
  books.description,
  (SELECT
    row_to_json(authors)
      FROM
        (SELECT authors.id, authors.name) as authors
  ) as author,
  COALESCE(books.url, authors.url) as url
FROM
  books
JOIN authors ON authors.id = books.author_id
WHERE
  books.id = $1;