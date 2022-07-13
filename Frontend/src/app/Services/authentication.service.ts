import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.isUserLoggedIn()){
      
      return true;
    }
    else{
      this.router.navigateByUrl('/login-page');
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }
}
