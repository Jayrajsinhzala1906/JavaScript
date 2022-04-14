import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css'],
})
export class ExamDetailsComponent implements OnInit {
  step: number | undefined;
  examId: number | undefined;

  data: any = {};
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => ({
          id: params['id'] || 1,
          step: params['step'] || 1,
        }))
      )
      .subscribe((p) => {
        this.data.examId = p.id;
        this.data.step = p.step;
      });
  }
  doIt() {
    let matrixUrlData = {
      id: this.examId,
      step: this.step,
    };
    this.router.navigate(['/exam', 'detail', matrixUrlData]);
  }
}
