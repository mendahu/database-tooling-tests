SELECT
  id,
  name
FROM books
WHERE title ILIKE '%' || $1 || '%'
ORDER BY title