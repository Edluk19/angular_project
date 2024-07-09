import { Component, OnInit } from '@angular/core';
import { MovieCardsComponent } from '../../components/movie-cards/movie-cards.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { HeaderMovieComponent } from '../../components/header-movie/header-movie.component';
import { movies } from '../../mock-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorites-movie-page',
  standalone: true,
  imports: [MovieCardsComponent, MovieListComponent, HeaderMovieComponent],
  templateUrl: './favorites-movie-page.component.html',
  styleUrl: './favorites-movie-page.component.scss'
})
export class FavoritesMoviePageComponent implements OnInit {
  movies = movies;
  favoriteMovies: any[] = [];
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
          this.favoriteMovies.push(movie);
        }
      })
    });
  }
}
