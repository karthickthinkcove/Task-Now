import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http : HttpClient) { }

  postEmploye(data : any){
    return this.http.post<any>("http://localhost:3000/login", data)
    .pipe(map((res)=>{
      return res;
    }))
  }

  getEmploye(data : any){
    return this.http.get<any>("http://localhost:3000/login", data)
    .pipe(map((res)=>{
      return res;
    }))
  }
}