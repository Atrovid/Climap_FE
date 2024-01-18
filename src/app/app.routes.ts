import { ExtraOptions, Routes } from '@angular/router';
import { MapComponent } from './map/map/map.component';
import { HomeComponent } from './presentation/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Climap - Home',
  },
  {
    path: 'map',
    component: MapComponent,
    title: 'Climap - Map',
  },
];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
}