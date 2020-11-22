import { Router, Routes } from '@angular/router';
// import { environment } from './../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
// import { Todo, TodoPost } from '../models/Todo';
import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { errors } from 'stripe';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  // .append('Access-Control-Allow-Headers', 'Content-Type')
  // .append('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  // .append('Access-Control-Allow-Origin', '*');
  datauser = {};
  ACCESS_TOKEN = 'access_token';
  constructor(private http: HttpClient, private router: Router) {}

  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/signin`, user).subscribe(
      (success) => {
        localStorage.setItem(this.ACCESS_TOKEN, success.access_token);
        localStorage.setItem('_userId', success.user._id);
        this.getUserProfile(success.user._id).subscribe((res: any) => {
          this.datauser = res.data;
          console.log(res);

          this.router.navigate(['profile']);
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
          //   footer: '<a href>Why do I have this issue?</a>',
        });
      }
    );
  }

  register(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/signup`, user)
      .subscribe((res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Hello',
          text: 'Thanks for join us',
        });
        this.router.navigate(['/login']);
      });
  }
  //   register(user):Observable<any>{
  //     return this.http.post(`${this.endpoint}/signup`,{
  //         userName:user.userName,
  //         email:user.email,
  //         password
  //     }, httpOptions);
  //   }

  logout() {
    let deleteToken = localStorage.removeItem(this.ACCESS_TOKEN);
    let deleteId = localStorage.removeItem('_userId');
    if (deleteToken == null && deleteId == null) {
      this.router.navigate(['']);
    }
  }

  get isLogin(): boolean {
    let token = localStorage.getItem(this.ACCESS_TOKEN);
    return token !== null ? true : false;
  }

  getToken() {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  get_userId() {
    return localStorage.getItem('_userId');
  }

  getUserProfile(_id): Observable<any> {
    let userId = localStorage.getItem('_userId');
    let endpoint2 = `${this.endpoint}/profile/` + userId;

    return this.http
      .get(endpoint2, {
        headers: new HttpHeaders().set(this.ACCESS_TOKEN, this.getToken()),
      })
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let note = '';

    if (error.error instanceof ErrorEvent) {
      note = error.error.message;
    } else {
      note = `Error code: ${error.status} \n error message: ${error.message}`;
    }
    return throwError(note);
  }
}
