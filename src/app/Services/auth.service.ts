import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from '../Classes/user';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_api:string = 'http://localhost:3000/user'
  constructor(private httpServ:HttpClient) { }
  register(regData:User):Observable<User[]>{
    return this.httpServ.post<User[]>(this.user_api, regData).pipe(catchError(this.errHandler))
  }
  logIn(id:string):Observable<User[]>{
    return this.httpServ.get<User[]>(`${this.user_api}/${id}`)
  }
  allUser():Observable<User[]>{
    return this.httpServ.get<User[]>(this.user_api)
  }
  errHandler(err:HttpErrorResponse){
    return throwError(()=>err)
  }
}
