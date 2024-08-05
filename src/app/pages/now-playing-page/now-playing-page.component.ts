import { Component } from '@angular/core';
import { MovieService } from '../../servises/movie/movie.service';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { RouterLink, RouterModule } from '@angular/router';
import { movies } from '../../mock-data';
import { Movie, MovieApiModel } from '../../models/movie.model';

@Component({
  selector: 'app-now-playing-page',
  standalone: true,
  imports: [MovieListComponent, RouterLink, RouterModule],
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.scss'
})
export class NowPlayingPageComponent {
  nowPlayingMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getNowPlayingmovies().subscribe({
      next: (response: MovieApiModel) => {
        this.nowPlayingMovies = response.results;
      }
    });
  }

}
