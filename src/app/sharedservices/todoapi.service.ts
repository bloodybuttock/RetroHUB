import { Todo } from './../models/Todo';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoapiService {

  constructor(private http:HttpClient) { }

  private getDataTodo(response){
    return response.data
  }

  public getTodo(): Observable<Todo[]>{
    return this.http.get<Todo[]>('http://localhost:3000/newtodos/').pipe(map(this.getDataTodo))
  }
}
