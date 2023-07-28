import { Injectable } from '@angular/core';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setStorage(userData:User){
    localStorage.setItem('fname', userData.fname)
    localStorage.setItem('lname', userData.lname)
    localStorage.setItem('mail', userData.mail)
    localStorage.setItem('gender', userData.gender)
    localStorage.setItem('ph', userData.ph)
    localStorage.setItem('adrs', userData.adrs)
    sessionStorage.setItem('token', userData.token)
  }
  get(item:string){
    return localStorage.getItem(item)
  }
  getToken(){
    return sessionStorage.getItem('token')
  }
  destroyToken(){
    sessionStorage.clear()
    localStorage.clear()
  }
}
