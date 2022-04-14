import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { ExamComponent } from './exam/exam.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import { NotFoundService } from './services/not-found.service';
import { ExamModule } from './exam/exam.module';
import { ProductRoutingModule } from './product/product-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ExamModule,
    // ProductModule,
    ProductRoutingModule,
    AppRoutingModule
  ],
  providers: [NotFoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
