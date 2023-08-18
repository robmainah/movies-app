import type { IMovie } from "./IMovie";

export interface IApiResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}