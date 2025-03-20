import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomeComponent } from './home/home.component';
import { ReportingComponent } from './reporting/reporting.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotLoggedGuard } from './guards/not-logged.guard';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'detailsProduit', component: DetailsProductComponent, },
  { path: 'manageStock', component: ManageStockComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'reporting', component: ReportingComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,  },
  // { path: 'home', component: HomeComponent, canLoad: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
