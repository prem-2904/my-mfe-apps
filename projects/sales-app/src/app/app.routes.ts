import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        loadComponent: () => import('./components/menu/menu.component').then(m => m.MenuComponent)
    },
    {
        path: 'user',
        loadComponent: () => import('./components/user/user.component').then(m => m.UserComponent)
    }
];

export const SalesRoutes: Routes = routes;