import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamComponent } from './exam.component';

const routes: Routes = [
  {
    path:'exam',
    component:ExamComponent,
    children:[
      {
        path:'',
        component:ExamListComponent,
        pathMatch:'full'
      },
      {
        path:'detail',
        component:ExamDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
