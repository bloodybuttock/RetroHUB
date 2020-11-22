import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  private getTodoList(response){
    return response.data
  }

  public getAPI(): Observable<Todo[]>{
    return this.http.get<Todo[]>('http://localhost:3000/products').pipe(
      map(this.getTodoList)
    )
  }
}
