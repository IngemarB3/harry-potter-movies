import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: ':id', component: MovieDetailsComponent },
    { path: '**', redirectTo: '' }
];
