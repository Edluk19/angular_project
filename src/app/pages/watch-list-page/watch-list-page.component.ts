import { Component, OnInit } from '@angular/core';
import { HeaderMovieComponent } from '../../components/header-movie/header-movie.component';
import { MovieCardsComponent } from '../../components/movie-cards/movie-cards.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieService } from '../../servises/movie/movie.service';

@Component({
  selector: 'app-watch-list-page',
  standalone: true,
  imports: [MovieCardsComponent, MovieListComponent, HeaderMovieComponent],
  templateUrl: './watch-list-page.component.html',
  styleUrl: './watch-list-page.component.scss'
})
export class WatchListPageComponent implements OnInit {
  watchMovies: any[] = [];

  constructor(private movieDataService: MovieService) { }

  ngOnInit() {
    this.watchMovies = this.movieDataService.getWatchMovies();
  }
}
