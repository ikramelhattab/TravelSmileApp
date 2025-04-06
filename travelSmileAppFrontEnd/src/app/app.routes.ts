// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'trips',
    loadChildren: () => import('./trip/trip.routes').then(m => m.tripRoutes)
  },
  { path: 'travelers', loadChildren: () => import('./traveler/traveler.routes').then(m => m.travelerRoutes) }

];
