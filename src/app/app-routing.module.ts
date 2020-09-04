import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InfoComponent } from './info/info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}, //redirect
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'contact-us', component: ContactUsComponent }, 
  { path: 'info', component: InfoComponent},
  { path: 'info/:id', component: InfoComponent}, //parameterized route
  { path: 'dashboard', canActivate: [AdminGuardGuard], //route guard is false, cant access, change to true if wanted
    children: [ //child routes
      { path: 'home', component: DashboardComponent},
      { path: 'profile', component: DashboardProfileComponent},
      { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    ]},
  { path: '**', component: PageNotFoundComponent} //wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
