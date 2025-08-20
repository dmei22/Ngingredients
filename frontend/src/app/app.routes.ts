import { Routes } from '@angular/router';
import { OverviewComponent } from './recipe/overview-component/overview-component';

export const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  // { path: 'details/:id', component: DetailsComponent },

  // Redirect empty pathing to overview
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  // Redirect nonexistent pathing to overview
  { path: '**', redirectTo: '/overview' }
];

