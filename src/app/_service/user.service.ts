import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API ='http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

    private http : HttpClient

    getHome(): Observable<any>{
      return this.http.get(API + 'all',{
        responseType: 'text'
      })
    }

    getUser(): Observable<any>{
      return this.http.get(API + 'all',{
        responseType: 'text'
      })
    }

    getAdmin(): Observable<any>{
      return this.http.get(API + 'all',{
        responseType: 'text'
      })
    }
  
}
