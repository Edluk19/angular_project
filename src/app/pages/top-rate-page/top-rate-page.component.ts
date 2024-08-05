import { Component } from '@angular/core';
import { MovieService } from '../../servises/movie/movie.service';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Movie, MovieApiModel } from '../../models/movie.model';

@Component({
  selector: 'app-top-rate-page',
  standalone: true,
  imports: [MovieListComponent, RouterLink, RouterModule],
  templateUrl: './top-rate-page.component.html',
  styleUrl: './top-rate-page.component.scss'
})
export class TopRatePageComponent {
  topRateMovies: Movie[] = [];
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.movieService.getNowPlayingmovies().subscribe({
      next: (response: MovieApiModel) => {
        this.topRateMovies = response.results;
      }
    });
  }

}
