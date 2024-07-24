import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MovieService } from '../../servises/movie/movie.service';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [MovieListComponent, RouterLink, RouterModule],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss'
})
export class PopularPageComponent implements OnInit {
  popularMovies: any[] = [];
  // favoriteMovieListIds: string[] = [];
  // watchLaterMovieListIds: string[] = [];
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.popularMovies = this.movieService.getPopularMovies();
  }

  // addToFavorites(id: any) {
  //   if (!this.favoriteMovieListIds.includes(id)) {
  //     this.favoriteMovieListIds.push(id);
  //   }


  // }

  // addToWatchlist(id: any) {
  //   if (!this.watchLaterMovieListIds.includes(id)) {
  //     this.watchLaterMovieListIds.push(id);
  //   }

  // }
}