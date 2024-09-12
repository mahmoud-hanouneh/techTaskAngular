import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { MoviesData } from '../movies-data';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieComponent],
  template: `
    <section>
      <form class="search-form">
        <input type="text" placeholder="Search for a movie" #searchText />
        <button
          class="primary"
          type="button"
          (click)="getMoviesList(searchText.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-movie
        *ngFor="let moviesData of moviesSearchResult"
        [moviesData]="moviesData"
      ></app-movie>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  moviesSearchResult: any;

  movieService: MovieService = inject(MovieService);
  constructor() {}

  async getMoviesList(text: string) {
    try {
      this.moviesSearchResult = await this.movieService.getMovieByName(text);
    } catch (error) {
      console.error('Error ', error);
      this.moviesSearchResult = [];
    }
  }
}
