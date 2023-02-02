import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
