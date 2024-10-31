INSERT INTO authors (id, name, url)
  SELECT * FROM UNNEST(
    $1::INT[],
    $2::TEXT[],
    $3::TEXT[]
  );