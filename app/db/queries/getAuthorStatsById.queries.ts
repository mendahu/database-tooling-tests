/** Types generated for queries found in "db/queries/getAuthorStatsById.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetAuthorStatsById' parameters type */
export interface IGetAuthorStatsByIdParams {
  id?: number | null | void;
}

/** 'GetAuthorStatsById' return type */
export interface IGetAuthorStatsByIdResult {
  book_count: string | null;
  book_count_text: string | null;
  name: string;
  published: boolean | null;
  type: string;
}

/** 'GetAuthorStatsById' query type */
export interface IGetAuthorStatsByIdQuery {
  params: IGetAuthorStatsByIdParams;
  result: IGetAuthorStatsByIdResult;
}

const getAuthorStatsByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":374,"b":376}]}],"statement":"SELECT\n  name,\n  COUNT(books.id) as book_count,\n  'author' as \"type!\",\n  (SELECT COUNT(authors.id) > 0 FROM authors) as published,\n  CASE\n    WHEN COUNT(books.id) = 0 THEN 'No books'\n    WHEN COUNT(books.id) = 1 THEN '1 book'\n    ELSE COUNT(books.id) || ' books'\n  END as book_count_text\nFROM\n  authors\n  LEFT JOIN books ON authors.id = books.author_id\nWHERE\n  authors.id = :id\nGROUP BY\n  authors.id"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   name,
 *   COUNT(books.id) as book_count,
 *   'author' as "type!",
 *   (SELECT COUNT(authors.id) > 0 FROM authors) as published,
 *   CASE
 *     WHEN COUNT(books.id) = 0 THEN 'No books'
 *     WHEN COUNT(books.id) = 1 THEN '1 book'
 *     ELSE COUNT(books.id) || ' books'
 *   END as book_count_text
 * FROM
 *   authors
 *   LEFT JOIN books ON authors.id = books.author_id
 * WHERE
 *   authors.id = :id
 * GROUP BY
 *   authors.id
 * ```
 */
export const getAuthorStatsById = new PreparedQuery<IGetAuthorStatsByIdParams,IGetAuthorStatsByIdResult>(getAuthorStatsByIdIR);


