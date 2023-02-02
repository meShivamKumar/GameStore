import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
