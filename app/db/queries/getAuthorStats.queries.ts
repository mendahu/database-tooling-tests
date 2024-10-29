/** Types generated for queries found in "db/queries/getAuthorStats.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetAuthorStats' parameters type */
export type IGetAuthorStatsParams = void;

/** 'GetAuthorStats' return type */
export interface IGetAuthorStatsResult {
  published: string | null;
  unpublished: string | null;
}

/** 'GetAuthorStats' query type */
export interface IGetAuthorStatsQuery {
  params: IGetAuthorStatsParams;
  result: IGetAuthorStatsResult;
}

const getAuthorStatsIR: any = {"usedParamSet":{},"params":[],"statement":"WITH counts AS (\n  SELECT\n    authors.id,\n    authors.name,\n    COALESCE(COUNT(books.id), 0) AS books\n  FROM authors\n  LEFT JOIN books ON authors.id = books.author_id\n  GROUP BY authors.id\n)\nSELECT\n  COUNT(counts.*) FILTER (WHERE books = 0) AS unpublished,\n  COUNT(counts.*) FILTER (WHERE books > 0) AS published\nFROM\n  counts"};

/**
 * Query generated from SQL:
 * ```
 * WITH counts AS (
 *   SELECT
 *     authors.id,
 *     authors.name,
 *     COALESCE(COUNT(books.id), 0) AS books
 *   FROM authors
 *   LEFT JOIN books ON authors.id = books.author_id
 *   GROUP BY authors.id
 * )
 * SELECT
 *   COUNT(counts.*) FILTER (WHERE books = 0) AS unpublished,
 *   COUNT(counts.*) FILTER (WHERE books > 0) AS published
 * FROM
 *   counts
 * ```
 */
export const getAuthorStats = new PreparedQuery<IGetAuthorStatsParams,IGetAuthorStatsResult>(getAuthorStatsIR);


