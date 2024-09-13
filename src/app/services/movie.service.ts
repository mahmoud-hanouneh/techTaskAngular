import { Injectable } from '@angular/core';
import { MovieData } from '../types/movies-data';
import { baseUrl } from '../config/endpoints';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  private url = baseUrl;

  moviesSearchResult: MovieData[] | null = null;
  // get search results
  async getMovies(text: string): Promise<MovieData[] | undefined> {
    try {
      const res = await fetch(`${this.url}s=${text}`);
      if (!res.ok) {
        throw new Error('Error getting movies');
      }
      const data = await res.json();
      this.moviesSearchResult = data.Search || [];
      return data.Search;
    } catch (error) {
      console.log('Error: ', error);
      this.moviesSearchResult = [];
      return [];
    }
  }

  getCachedMovies(): MovieData[] | null {
    return this.moviesSearchResult;
  }
  // get movie by ID
  async getMovieById(id: string): Promise<MovieData | null> {
    try {
      const res = await fetch(`${this.url}i=${id}`);
      if (!res.ok) {
        throw new Error("Error getting movie's details");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log('Error', error);
      return null;
    }
  }
}
