import { Component, Input } from '@angular/core';
import { MovieData } from '../../types/movies-data';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <section class="listing" [routerLink]="['/details', moviesData.imdbID]">
      <img
        class="listing-photo"
        [src]="moviesData.Poster"
        alt="Exterior photo of {{ moviesData.Title }}"
      />
      <h4 class="listing-heading">{{ moviesData.Title }}</h4>
      <p class="listing-detail">Released in: {{ moviesData.Year }}</p>
      <p class="listing-detail">Type: {{ moviesData.Type }}</p>
      <a class="link" [routerLink]="['/details', moviesData.imdbID]"
        >More details ..</a
      >
    </section>
  `,
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input() moviesData!: MovieData;
}
