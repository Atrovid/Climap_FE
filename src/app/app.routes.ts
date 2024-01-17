import { Routes } from '@angular/router';
import { MapComponent } from './map/map/map.component';
import { CriticComponent } from './presentation/critic/critic.component';
import { HomeComponent } from './presentation/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Climap - Home',
  },
  {
    path: 'critic',
    component: CriticComponent,
    title: 'Climap - Critic',
  },
  {
    path: 'map',
    component: MapComponent,
    title: 'Climap - Map',
  },
];
