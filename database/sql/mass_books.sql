INSERT INTO books (title, description, author_id, url)
  SELECT * FROM UNNEST(
    $1::TEXT[],
    $2::TEXT[],
    $3::INT[],
    $4::TEXT[]
  );
