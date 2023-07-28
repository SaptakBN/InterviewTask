import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentProfile!:User
  constructor(private aroute:ActivatedRoute, private authServ:AuthService, private storageServ:StorageService,private router:Router){}
  ngOnInit(): void {
    // let userMail:string | null
    this.aroute.queryParamMap.subscribe(qParam=>{
      let userMail = qParam.get('mail')
      // console.log(userMail);
      this.authServ.allUser().subscribe((res:any)=>{
        // console.log(res);
        this.currentProfile = res.find((user:any)=>userMail==user.mail)
        // console.log(this.currentProfile);
      })
    })
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
