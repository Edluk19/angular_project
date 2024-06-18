import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PrimengMovieCardComponent } from './components/primeng-movie-card/primeng-movie-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent, PrimengMovieCardComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}