import { Routes } from '@angular/router';
import { TripListComponent } from './trip-list.component';
import { TripFormComponent } from './trip-form.component';

export const tripRoutes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'new', component: TripFormComponent },
  { path: ':id/edit', component: TripFormComponent }
];