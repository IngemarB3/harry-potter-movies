import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../interfaces/movie.interface';
import { Subscription } from 'rxjs';
import { DurationPipe } from '../pipes/duration.pipe';
import { MillionPipe } from '../pipes/million.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  imports: [DurationPipe, MillionPipe]
})
export class MovieDetailsComponent implements OnInit {    
    private sub!: Subscription;

    public movie!: Movie;

    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        
        this.sub = this.http.get<Movie>('movies/' + id).subscribe(response => {
            this.movie = response;
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    public navigateToMovieList(): void {
        this.router.navigate(['']);
    }
}
