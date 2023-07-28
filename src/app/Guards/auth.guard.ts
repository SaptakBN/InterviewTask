import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../Services/storage.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const token = inject(StorageService)
  const toaster = inject(ToastrService)
  const router = inject(Router)
  if(token.getToken()){
    return true;
  }
  else{
    toaster.error('You need to log in to access this page')
    router.navigate(['log-in'])
    return false
  }
};
