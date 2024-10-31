/* @name getAuthorStatsById */
SELECT
  name,
  COUNT(books.id) as book_count,
  'author' as "type!",
  (SELECT COUNT(authors.id) > 0 FROM authors) as published,
  CASE
    WHEN COUNT(books.id) = 0 THEN 'No books'
    WHEN COUNT(books.id) = 1 THEN '1 book'
    ELSE COUNT(books.id) || ' books'
  END as book_count_text
FROM
  authors
  LEFT JOIN books ON authors.id = books.author_id
WHERE
  authors.id = :id
GROUP BY
  authors.id;