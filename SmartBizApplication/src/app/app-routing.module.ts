import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
  { path: 'admin/customers', component: CustomerListComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
  { path: 'admin/products', component: ProductListComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
  { path: 'admin/transactions', component: TransactionListComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },

  { path: 'employee', component: EmployeeDashboardComponent, canActivate: [AuthGuard], data: { role: 'Employee' } },
  { path: 'employee/customers', component: CustomerListComponent, canActivate: [AuthGuard], data: { role: 'Employee' } },
  { path: 'employee/products', component: ProductListComponent, canActivate: [AuthGuard], data: { role: 'Employee' } },
  { path: 'employee/transactions', component: TransactionListComponent, canActivate: [AuthGuard], data: { role: 'Employee' } },

  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
