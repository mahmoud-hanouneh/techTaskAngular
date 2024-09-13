import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movie.service';
import { MovieData } from '../../types/movies-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main *ngIf="movieData">
      <div class="img-container">
        <h1>{{ movieData.Title }}</h1>
        <h4>{{ movieData.Year }}</h4>
        <p>Duration: {{ movieData.Runtime }}</p>
        <img [src]="movieData.Poster" [alt]="movieData.Title" />
      </div>
    </main>
  `,
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MoviesService);

  movieData: MovieData | null = null;

  ngOnInit() {
    this.getMovieDetail();
  }

  async getMovieDetail() {
    const movieId = String(this.route.snapshot.params['id']);

    try {
      this.movieData = await this.movieService.getMovieById(movieId);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}
