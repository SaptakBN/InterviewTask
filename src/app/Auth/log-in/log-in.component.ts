import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  activeUser!:User
  logInForm!:FormGroup
  constructor(private fb: FormBuilder, private authSer:AuthService, private storageSer:StorageService, private toaster: ToastrService, private router:Router){}
  ngOnInit(): void {
    this.logInForm = this.fb.group({
      mail:['',[Validators.required, Validators.email]],
      pword:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[&@#*~`!$%^])(?=.*[0-9])(?=.*[a-z]).{8,12}$')]],
    })
  }
  onSubmit(){
    let newForm = this.logInForm.value
    // console.log(newForm);
    // this.authSer.logIn(new)
    this.authSer.allUser().subscribe((res=>{
    let existingUser = res.filter(user=>user.mail==newForm.mail)
    if(existingUser.length==0){
      this.toaster.error('You are not registered please sign up');
      this.router.navigate(['reg'])
    }
    else{
      if(existingUser[0].pword!=newForm.pword){
        this.toaster.warning('Password incorrect');
      }
      else{
        this.activeUser = existingUser[0]
        this.storageSer.setStorage(this.activeUser)
        this.toaster.success('You are successfully logged in');
        this.router.navigate(['dashboard'])
      }
    }
    }),(err=>{

    }))
  }

}
