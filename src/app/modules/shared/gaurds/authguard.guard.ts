import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';
import { HomeService } from '../../home/home.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard {
  userData: any;
  constructor(private login: LoginService, private route: Router, private homeservice: HomeService){

  }
  canActivate(): boolean {
    if (this.login.isAuthenticate()) {
      const userData = this.login.getToken();
      console.log(location.pathname)
      if (userData && userData.is_Admin) {
        if(location.pathname != '/login' && location.pathname != '/dashboard' && location.pathname != '/'){
          this.login.openConfirmationDialogEdit();
          // this.route.navigate(['/dashboard']);
          // alert("Unauthorized Access,Redirecting to Home");  
          // console.log(window.confirm);
          return false;
        }
        // this.route.navigate(['/dashboard']);
        return true;
      } else {
        return false;
      }
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
