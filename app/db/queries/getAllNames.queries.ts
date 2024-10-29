/** Types generated for queries found in "db/queries/getAllNames.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetAllNames' parameters type */
export type IGetAllNamesParams = void;

/** 'GetAllNames' return type */
export interface IGetAllNamesResult {
  name: string | null;
}

/** 'GetAllNames' query type */
export interface IGetAllNamesQuery {
  params: IGetAllNamesParams;
  result: IGetAllNamesResult;
}

const getAllNamesIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT\n  name\nFROM authors\n\nUNION\n\nSELECT\n  title\nFROM books"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   name
 * FROM authors
 * 
 * UNION
 * 
 * SELECT
 *   title
 * FROM books
 * ```
 */
export const getAllNames = new PreparedQuery<IGetAllNamesParams,IGetAllNamesResult>(getAllNamesIR);


