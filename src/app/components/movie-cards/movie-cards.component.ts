import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { ReleaseDatePipe } from '../../pipes/date/release-date.pipe';


@Component({
  selector: 'app-movie-cards',
  standalone: true,
  imports: [DurationPipe, ReleaseDatePipe],
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent {
  @Input() movie: any;
  @Output() addFavorite = new EventEmitter<any>();
  @Output() addWatch = new EventEmitter<any>();

  //pass up to parent - movie-list
  addToFavorites(id: any) {
    this.addFavorite.emit(id);
  }

  addToWatchlist(id: any) {
    this.addWatch.emit(id);
  }
}