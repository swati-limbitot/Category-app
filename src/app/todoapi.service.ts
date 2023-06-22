import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todomodel } from './todo/todomodel';

@Injectable({
  providedIn: 'root'
})
export class TodoapiService {
  url = "http://localhost:3000/todo";


  constructor(private http: HttpClient) { }

  addtodo(data: todomodel) {
    return this.http.post<todomodel>("http://localhost:3000/todo", data);
  }

  //get category
  gettodo() {
    return this.http.get<todomodel[]>("http://localhost:3000/todo");
  }

  //fetch data
  
   fetchdata(item:string) {
    return this.http.get<todomodel[]>("http://localhost:3000/todo/" + '?selectCategory=' + item);
  }
   //fetch data
   fetchtodo(id: number) {
    return this.http.get<todomodel>("http://localhost:3000/todo/" + id);
  }

  //delete
  deletetodo(id: number) {
    return this.http.delete<todomodel>("http://localhost:3000/todo/" + id)
  }
  
  //
  tupdatetodo(data: todomodel, id: number) {
    return this.http.put<todomodel>("http://localhost:3000/todo/" + id, data);
  }
  
}
