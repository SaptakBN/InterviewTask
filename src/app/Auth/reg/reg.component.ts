import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { v4 as uuid, v4 } from 'uuid';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  regForm!:FormGroup
  constructor(private fb: FormBuilder, private authServ:AuthService, private toaster: ToastrService, private router: Router){}
  ngOnInit(): void {
    this.regForm = this.fb.group({
      fname:['',[Validators.required,Validators.pattern('^[A-Z]{1}[a-z]{1,9}$')]],
      lname:['',[Validators.required,Validators.pattern('^[A-Z]{1}[a-z]{1,9}$')]],
      mname:[''],
      mail:['',[Validators.required, Validators.email]],
      gender:['',[Validators.required]],
      ph:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      adrs:['',[Validators.required]],
      pword:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[&@#*~`!$%^])(?=.*[0-9])(?=.*[a-z]).{8,12}$')]],
      cpword:['',[Validators.required]]
    })
  }
  onSubmit(){
    // console.log(this.regForm);
    let newForm = {
      fname:this.regForm.value.fname,
      mname:this.regForm.value.mname,
      lname:this.regForm.value.lname,
      mail:this.regForm.value.mail,
      gender:this.regForm.value.gender,
      ph:this.regForm.value.ph,
      adrs:this.regForm.value.adrs,
      pword:this.regForm.value.pword,
      token:uuid()
    }

    if(this.regForm.value.pword!=this.regForm.value.cpword){
      this.toaster.error('Password and confirm password need to match')
    }
    else{
      this.authServ.allUser().subscribe((res)=>{
        // console.log(res);
        let existingUser = res.filter(user=>user.mail==newForm.mail)
        // console.log(existingUser);
        if(existingUser.length!=0){
          this.toaster.info('You are already registered please Log in')
          this.router.navigate(['log-in'])
        }
        else{
          this.authServ.register(newForm).subscribe((res)=>{
            // console.log(res);
            this.toaster.success('Registration Successful you can log in')
            this.router.navigate(['log-in'])
            },(err)=>{
              // console.log(err);
            })
        }
      },(err)=>{
        // console.log(err);
      })
    }
  }
}
