import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  
  isLoggedIn = false;
  user_details = null;
  constructor( private router: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.user_details =window.localStorage.getItem('keyToken');
    if(this.user_details){
      return true;
    }

    console.log('logim:',this.user_details);

    this.router.navigate(['/signin']);
        return false;
  }
}
