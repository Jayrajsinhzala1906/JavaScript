import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { ExamComponent } from './exam.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExamListComponent,
    ExamDetailsComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    FormsModule
  ]
})
export class ExamModule { }
