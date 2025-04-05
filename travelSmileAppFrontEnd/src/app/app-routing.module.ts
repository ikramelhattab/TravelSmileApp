import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { TravelerListComponent } from './travelers/traveler-list/traveler-list.component';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './containers/layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
 /*  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [ */

  { path: 'trips', component: TripListComponent},
  { path: 'travelers', component: TravelerListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
    ]
 /*  }
]; */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
