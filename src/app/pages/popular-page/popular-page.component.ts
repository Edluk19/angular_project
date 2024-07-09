import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderMovieComponent } from '../../components/header-movie/header-movie.component';
import { movies } from '../../mock-data';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [MovieListComponent, HeaderMovieComponent, RouterLink, RouterModule],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss'
})
export class PopularPageComponent {
  movies = movies;
  favoriteMovieListIds: string[] = [];
  watchLaterMovieListIds: string[] = [];



  addToFavorites(id: any) {
    if (!this.favoriteMovieListIds.includes(id)) {
      this.favoriteMovieListIds.push(id);
    }


  }

  addToWatchlist(id: any) {
    if (!this.watchLaterMovieListIds.includes(id)) {
      this.watchLaterMovieListIds.push(id);
    }

  }
}