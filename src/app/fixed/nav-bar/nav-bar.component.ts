import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private storageServ:StorageService,  private toaster: ToastrService, private router:Router){}
  loggedIn(){
    return this.storageServ.getToken()
  }
  logOut(){
    this.storageServ.destroyToken()
    this.toaster.error('User logged out')
    this.router.navigate(['log-in'])
  }
}
