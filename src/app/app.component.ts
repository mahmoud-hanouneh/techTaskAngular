import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieComponent, RouterModule, HomeComponent],
  template: `
    <header class="brand-name">
      <img
        class="brand-logo"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true"
        style="height: 80px; cursor: pointer"
      />
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Test';
}
