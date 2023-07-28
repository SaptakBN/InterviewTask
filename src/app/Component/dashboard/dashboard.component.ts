import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  allUser!:User[]
  constructor(private storageServ:StorageService, private router:Router, private authServ:AuthService){}
  ngOnInit(): void {
    this.authServ.allUser().subscribe((res=>{
      console.log(res);
      this.allUser = res.filter(user=>user.mail!=this.storageServ.get('mail'))
    }),(err=>{}))
  }
  loggedIn(){
    if(this.storageServ.getToken()){
      return true
    }
    else{
      this.router.navigate(['log-in'])
      return false
    }
  }
}
