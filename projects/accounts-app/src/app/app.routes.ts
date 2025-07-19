import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'layout',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent)
    }
];

export const AccountRoutes: Routes = routes;
