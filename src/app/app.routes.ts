import { Routes } from '@angular/router';

export const routes: Routes = [
  /* {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  }, */
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./modules/introduction/pages/welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: 'breed-list',
    loadComponent: () => import('./modules/breeds/pages/breed-list/breed-list.page').then( m => m.BreedListPage)
  },
  {
    path: 'breed-detail/:id',
    loadComponent: () => import('./modules/breeds/pages/breed-detail/breed-detail.page').then( m => m.BreedDetailPage)
  },
];
