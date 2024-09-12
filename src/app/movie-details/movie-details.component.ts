import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MoviesData } from '../movies-data';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  template: `
    <main>
      <div class="img-container">
        <h1>{{ movieData!.Title }}</h1>
        <h4>{{ movieData!.Year }}</h4>
        <p>Duration: {{ movieData!.Runtime }}</p>
        <img [src]="movieData?.Poster" [alt]="movieData?.Title" />
      </div>
    </main>
  `,
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);

  movieData: MoviesData | undefined | null;

  constructor() {
    const imdbMovieId = String(this.route.snapshot.params['id']);

    const getMovieDetail = async () => {
      try {
        this.movieData = await this.movieService.getMoviesDataByName(
          imdbMovieId
        );
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    getMovieDetail();
  }
}
