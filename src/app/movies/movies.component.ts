import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DurationPipe } from '../pipes/duration.pipe';
import { MillionPipe } from '../pipes/million.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [DurationPipe, MillionPipe, FormsModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {    
    private sub!: Subscription;

    public movies: Movie[] = [];
    public filteredMovies: Movie[] = [];
    public titleFilter = '';
    public releaseYearFilter = '';

    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit(): void {
        this.sub = this.http.get<Movie[]>('movies').subscribe(response => {
            this.movies = response;
            this.filteredMovies = response;
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    public filterMovies(): void {        
        this.filteredMovies = this.movies.filter(movie => {
            return movie.title.toLowerCase().includes(this.titleFilter.toLowerCase()) 
            && movie.release_date.startsWith(this.releaseYearFilter);
        });
    }

    public showDetails(movie: Movie) {
        this.router.navigate(['', movie.id]);
    }
}
