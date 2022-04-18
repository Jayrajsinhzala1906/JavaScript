import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  Users: User[];

  baseURL = 'https://localhost:3000/User';

  constructor(public http: HttpClient) {}

  postMember(M: User) {
    return this.http.post(this.baseURL, M);
  }

  getMemberList() {
    return this.http.get(this.baseURL);
  }

  putMember(M: User) {
    return this.http.put(this.baseURL + `/${M._id}`, M);
  }

  deleteMember(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
