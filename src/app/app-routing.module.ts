import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { from } from 'rxjs';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DetailProductComponent } from '../app/detail-product/detail-product.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../app/shared/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // {
  //   path: 'home',
  //   children: [
  //     {
  //       path: 'detail',
  //       component: DetailProductComponent,
  //     },
  //   ],
  // },

  { path: 'detail', component: DetailProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
