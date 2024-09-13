import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { MoviesService } from '../../services/movie.service';
import { MovieData } from '../../types/movies-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieComponent],
  template: `
    <section>
      <form class="search-form" (submit)="onSubmit(searchText.value, $event)">
        <input type="text" placeholder="Search for a movie" #searchText />
        <button
          class="primary"
          type="submit"
          (click)="getMoviesList(searchText.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section *ngIf="isLoading" class="spinner">
      <div class="spinner-icon"></div>
    </section>

    <section *ngIf="!isLoading" class="results">
      <app-movie
        *ngFor="let movieData of moviesSearchResult"
        [moviesData]="movieData"
      ></app-movie>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  isLoading = false;
  // moviesSearchResult: MovieData[] | null = [];
  moviesSearchResult: MovieData[] | null = null;

  movieService: MoviesService = inject(MoviesService);

  onSubmit(searchText: string, event: Event) {
    event.preventDefault();
    this.getMoviesList(searchText);
  }

  ngOnInit() {
    this.moviesSearchResult = this.movieService.getCachedMovies();
  }
  async getMoviesList(text: string) {
    this.isLoading = true;
    try {
      const encodedSearchText = encodeURIComponent(text);
      const searchResult = await this.movieService.getMovies(encodedSearchText);

      this.moviesSearchResult = searchResult || [];
      console.log(this.moviesSearchResult);
    } catch (error) {
      console.error('Error ', error);
      this.moviesSearchResult = [];
    } finally {
      this.isLoading = false;
    }
  }
}
