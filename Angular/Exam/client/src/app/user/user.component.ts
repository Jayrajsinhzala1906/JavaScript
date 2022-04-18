import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../services/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserServiceService],
})
export class UserComponent implements OnInit {
  constructor(readonly userServices: UserServiceService) {}

  ngOnInit(): void {}
}
