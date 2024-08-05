import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MovieService } from '../../servises/movie/movie.service';
import { Movie, MovieApiModel } from '../../models/movie.model';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  imports: [MovieListComponent, RouterLink, RouterModule],
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss'
})
export class UpcomingPageComponent {
  upcomingMovies: Movie[] = [];
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.movieService.getNowPlayingmovies().subscribe({
      next: (response: MovieApiModel) => {
        this.upcomingMovies = response.results;
      }
    });
  }

}
