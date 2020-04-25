import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { SearchComponent} from './components/search/search.component';
import { MovieComponent } from './components/Movies/movie.components';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'movie', component: MovieComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing =  RouterModule.forRoot(app_routes);
