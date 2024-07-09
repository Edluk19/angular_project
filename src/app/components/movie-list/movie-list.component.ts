import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieCardsComponent } from '../movie-cards/movie-cards.component';
import { NgFor } from '@angular/common';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieCardsComponent,
    NgFor,
    DurationPipe
  ],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movies: any[] = [];

  @Output() addFavorite = new EventEmitter<any>();
  @Output() addWatch = new EventEmitter<any>();


  //pass up to parent - active page
  addToFavorites(id: any) {
    this.addFavorite.emit(id);

  }

  addToWatchlist(id: any) {
    this.addWatch.emit(id);

  }
}