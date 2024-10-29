/** Types generated for queries found in "db/queries/searchBooks.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'SearchBooks' parameters type */
export type ISearchBooksParams = void;

/** 'SearchBooks' return type */
export interface ISearchBooksResult {
  id: number;
  title: string;
}

/** 'SearchBooks' query type */
export interface ISearchBooksQuery {
  params: ISearchBooksParams;
  result: ISearchBooksResult;
}

const searchBooksIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT\n  id,\n  title\nFROM books\nWHERE title ILIKE '%' || $1 || '%'\nORDER BY title"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   id,
 *   title
 * FROM books
 * WHERE title ILIKE '%' || $1 || '%'
 * ORDER BY title
 * ```
 */
export const searchBooks = new PreparedQuery<ISearchBooksParams,ISearchBooksResult>(searchBooksIR);


