import { Routes } from '@angular/router';
import { TravelerListComponent } from './traveler-list.component';
import { TravelerFormComponent } from './traveler-form.component';

export const travelerRoutes: Routes = [
    { path: '', component: TravelerListComponent },
    { path: 'new', component: TravelerFormComponent },
    { path: ':id/edit', component: TravelerFormComponent }
  ];