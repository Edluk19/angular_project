import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-cards',
  standalone: true,
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent {
  @Input() movie: any;
  @Output() addFavorite = new EventEmitter<any>();
  @Output() addWatch = new EventEmitter<any>();

  onAddFavorite() {
    this.addFavorite.emit(this.movie);
  }

  onAddWatch() {
    this.addWatch.emit(this.movie);
  }
}