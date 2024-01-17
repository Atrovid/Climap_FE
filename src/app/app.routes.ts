import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/home/home.component';
import { CriticComponent } from './presentation/critic/critic.component';

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
];
