import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent)
            }
        ]
    },
];

export const AccountRoutes: Routes = routes;
