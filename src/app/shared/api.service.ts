import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }

  postEmploye(data : any){
    return this.http.post<any>("http://localhost:3000/task", data)
    .pipe(map((res)=>{
      return res;
    }))
  }

  getEmploye(data : any){
    return this.http.get<any>("http://localhost:3000/task", data)
    .pipe(map((res)=>{
      return res;
    }))
  }

  updateEmploye(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/task/"+id, data)
    .pipe(map((res)=>{
      return res;
    }))
  }
  
  deleteEmploye(id : number){
    return this.http.delete<any>("http://localhost:3000/task/"+id)
    .pipe(map((res)=>{
      return res;
    }))
  }
}