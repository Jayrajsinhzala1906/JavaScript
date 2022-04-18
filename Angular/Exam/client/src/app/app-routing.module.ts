import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'product',
    component: ProductComponent,
    children: [],
  },
  {
    path: '/user',
    pathMatch: 'full',
    component: UserComponent,
    children: [],
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
