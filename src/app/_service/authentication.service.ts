import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API = 'http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'Application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials): Observable<any>{
    return this.http.post(API + 'signin',{
        email: credentials.email,
        password: credentials.password
    }, httpOptions)
  }

  register(user): Observable<any>{
    return this.http.post(API + 'signup',{
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
    }, httpOptions)
  }
}
