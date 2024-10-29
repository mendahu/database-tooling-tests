/** Types generated for queries found in "db/queries/getBookById.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

/** 'GetBookById' parameters type */
export interface IGetBookByIdParams {
  id: number;
}

/** 'GetBookById' return type */
export interface IGetBookByIdResult {
  author: Json | null;
  description: string | null;
  id: number;
  title: string;
  url: string | null;
}

/** 'GetBookById' query type */
export interface IGetBookByIdQuery {
  params: IGetBookByIdParams;
  result: IGetBookByIdResult;
}

const getBookByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":288,"b":291}]}],"statement":"SELECT\n  books.id,\n  books.title,\n  books.description,\n  (SELECT\n    row_to_json(authors)\n      FROM\n        (SELECT authors.id, authors.name) as authors\n  ) as author,\n  COALESCE(books.url, authors.url) as url\nFROM\n  books\nJOIN authors ON authors.id = books.author_id\nWHERE\n  books.id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   books.id,
 *   books.title,
 *   books.description,
 *   (SELECT
 *     row_to_json(authors)
 *       FROM
 *         (SELECT authors.id, authors.name) as authors
 *   ) as author,
 *   COALESCE(books.url, authors.url) as url
 * FROM
 *   books
 * JOIN authors ON authors.id = books.author_id
 * WHERE
 *   books.id = :id!
 * ```
 */
export const getBookById = new PreparedQuery<IGetBookByIdParams,IGetBookByIdResult>(getBookByIdIR);


