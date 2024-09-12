import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { MovieDetailsComponent } from './app/movie-details/movie-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent,
    title: 'Movie',
  },
];

export default routeConfig;
