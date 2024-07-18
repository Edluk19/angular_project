import { Component, OnInit } from '@angular/core';
import { MovieCardsComponent } from '../../components/movie-cards/movie-cards.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { HeaderMovieComponent } from '../../components/header-movie/header-movie.component';
// import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../servises/movie/movie.service';

@Component({
  selector: 'app-favorites-movie-page',
  standalone: true,
  imports: [MovieCardsComponent, MovieListComponent, HeaderMovieComponent],
  templateUrl: './favorites-movie-page.component.html',
  styleUrl: './favorites-movie-page.component.scss'
})
export class FavoritesMoviePageComponent implements OnInit {
  favMovies: any[] = [];

  constructor(private movieDataService: MovieService) { }

  ngOnInit() {
    this.favMovies = this.movieDataService.getFavMovies();
  }
}