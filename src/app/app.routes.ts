import { Routes } from '@angular/router';
// import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AppComponent } from './app.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { FavoritesMoviePageComponent } from './pages/favorites-movie-page/favorites-movie-page.component';
import { NowPlayingPageComponent } from './pages/now-playing-page/now-playing-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { TopRatePageComponent } from './pages/top-rate-page/top-rate-page.component';
import { UpcomingPageComponent } from './pages/upcoming-page/upcoming-page.component';
import { WatchListPageComponent } from './pages/watch-list-page/watch-list-page.component';


export const routes: Routes = [
    { path: '', component: PopularPageComponent },
    { path: 'popular', component: PopularPageComponent },
    { path: 'now-playing', component: NowPlayingPageComponent },
    { path: 'top-rate', component: TopRatePageComponent },
    { path: 'upcoming', component: UpcomingPageComponent },
    { path: 'movie/:id', component: MovieDetailsPageComponent },


    { path: 'favorite', component: FavoritesMoviePageComponent, outlet: 'header' },
    { path: 'watch-list', component: WatchListPageComponent, outlet: 'header' },

];