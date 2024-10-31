/* @name getAllNames */
SELECT
  name
FROM authors

UNION

SELECT
  title
FROM books;