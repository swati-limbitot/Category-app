import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categorymodel } from './category/categorymodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:3000/category";


  constructor(private http: HttpClient) { }

  addcategory(data: categorymodel) {
    return this.http.post<categorymodel>("http://localhost:3000/category", data);
  }

  //get category
  getcategory() {
    return this.http.get<categorymodel[]>("http://localhost:3000/category");
  }

  //fetch data
  fetchdata(id: number) {
    return this.http.get<categorymodel>("http://localhost:3000/category/" + id);
  }

  //delete
  deletecategory(id: number) {
    return this.http.delete<categorymodel>("http://localhost:3000/category/" + id)
  }
  
  //
  updatecategory(data: categorymodel, id: number) {
    return this.http.put<categorymodel>("http://localhost:3000/category/" + id, data);
  }

}

