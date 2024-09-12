import { Injectable } from '@angular/core';
import { MoviesData } from './movies-data';
import { baseUrl } from './services/endpoints';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  url = baseUrl;
  // get one search result by movie's name
  async getMovieByName(text: string): Promise<MoviesData | undefined> {
    const res = await fetch(`${this.url}s=${text}`);
    const data = await res.json();
    //test
    if (data) console.log(data);

    return data.Search;
  }

  // get movie by ID
  async getMoviesDataByName(id: string): Promise<MoviesData> {
    const data = await fetch(`${this.url}i=${id}`);
    return (await data.json()) ?? {};
  }
}
