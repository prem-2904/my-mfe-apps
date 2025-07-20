import { Routes } from '@angular/router';
//import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    // {
    //     path: 'accounts',
    //     loadChildren: () => loadRemoteModule({
    //         remoteName: 'accountsApp',
    //         exposedModule: './AccountRoutes'
    //     }).then(m => m.AccountRoutes)
    // },
    // {
    //     path: 'sales',
    //     loadChildren: () => loadRemoteModule({
    //         remoteName: 'salesApp',            // matches host remotes key and remote name
    //         exposedModule: './SalesRoutes'     // matches 'exposes' key in remote
    //     }).then(m => m.SalesRoutes)
    // },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'sales',
        loadChildren: () => import('salesApp/SalesRoutes').then(m => m.SalesRoutes)
    },
    {
        path: 'accounts',
        loadChildren: () => import('accountsApp/AccountRoutes').then(m => m.AccountRoutes)
    }
];
