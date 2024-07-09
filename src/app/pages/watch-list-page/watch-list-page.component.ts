import { Component, OnInit } from '@angular/core';
import { HeaderMovieComponent } from '../../components/header-movie/header-movie.component';
import { MovieCardsComponent } from '../../components/movie-cards/movie-cards.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { movies } from '../../mock-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-list-page',
  standalone: true,
  imports: [MovieCardsComponent, MovieListComponent, HeaderMovieComponent],
  templateUrl: './watch-list-page.component.html',
  styleUrl: './watch-list-page.component.scss'
})
export class WatchListPageComponent implements OnInit {
  movies = movies;
  watchListMovies: any[] = [];
  moviesId: any[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    this.moviesId = JSON.parse(route.snapshot.queryParams['data']);
  }
  ngOnInit() {
    this.movies.forEach(movie => {
      this.moviesId.forEach(id => {
        if (movie.id == id) {
          this.watchListMovies.push(movie);
        }
      })
    });
  }

}
