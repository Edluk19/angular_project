import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
// import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PrimengSidebarComponent } from './components/primeng-sidebar/primeng-sidebar.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HeaderMovieComponent } from './components/header-movie/header-movie.component';
// import { PrimengMovieCardComponent } from './components/primeng-movie-card/primeng-movie-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PopularPageComponent,
    PrimengSidebarComponent,
    HeaderMovieComponent,
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideAnimations()]
})
export class AppComponent {

}