import { Component } from '@angular/core';
// import { MovieCardsComponent } from '../movie-cards/movie-cards.component';
import { NgFor } from '@angular/common';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { PrimengMovieCardComponent } from '../primeng-movie-card/primeng-movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [PrimengMovieCardComponent, NgFor, DurationPipe],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  movies = [
    {
      backdrop_path: "../assets/images/Kingdom_planet_apes.jpg",
      id: 653346,
      original_title: "Kingdom of the Planet of the Apes",
      overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      release_date: "2024-05-08",
      title: "Kingdom of the Planet of the Apes",
      video: false,
      rating: 8.5,
      duration: 8650
    },
    {
      backdrop_path: "../assets/images/civil-war.jpg",
      id: 929590,
      original_title: "Civil War",
      overview: "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
      release_date: "2024-04-10",
      title: "Civil War",
      rating: 6.5,
      duration: 9170
    },
    {

      backdrop_path: "../assets/images/godzilla-vs-kong.jpg",
      id: 823464,
      original_title: "Godzilla x Kong: The New Empire",
      overview: "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
      poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
      release_date: "2024-03-27",
      title: "Godzilla x Kong: The New Empire",
      rating: 5.5,
      duration: 8120
    },
  ];

  favoriteMovies: any[] = [];
  watchMovies: any[] = [];

  handleAddToFavorites(movie: any) {
    if (!this.favoriteMovies.some((favoriteMovie) => favoriteMovie.id === movie.id)) {
      this.favoriteMovies.push(movie);
    }
  }

  handleAddToWatchlist(movie: any) {
    if (!this.watchMovies.some((watchMovie) => watchMovie.id === movie.id)) {
      this.watchMovies.push(movie);
    }
  }
}