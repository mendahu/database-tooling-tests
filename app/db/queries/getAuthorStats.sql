WITH counts AS (
  SELECT
    authors.id,
    authors.name,
    COUNT(books.id) AS books
  FROM authors
  LEFT JOIN books ON authors.id = books.author_id
  GROUP BY authors.id
)
SELECT
  COUNT(counts.*) FILTER (WHERE books = 0) AS unpublished,
  COUNT(counts.*) FILTER (WHERE books > 0) AS published
FROM
  counts