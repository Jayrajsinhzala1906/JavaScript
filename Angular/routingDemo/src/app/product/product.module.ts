import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductHomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductModule { }
