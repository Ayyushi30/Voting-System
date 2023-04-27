import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../home/components/confirmation/confirmation.component';
import { Router } from '@angular/router';
import { ErrorComponent } from '../home/components/error/error.component';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private token = 'auth_token';


  // private path = environment.apiUrl;


  constructor(private http: HttpClient, public dialog: MatDialog, private route: Router) { }


  public signUp(login: any) {
    const url = "http://15.206.28.41:4000/api/v1/sign-up ";
    return this.http.post<any>(url, login);
  }

  public logIn(login: any) {

    const url = "http://15.206.28.41:4000/api/v1/sign-in";
    return this.http.post<any>(url, login);
  }

  public getData() {
    const url = "http://15.206.28.41:4000/api/v1/profile";
    return this.http.get<any>(url);
  }

  public verifyOtp(verify: any) {
    const url = "http://15.206.28.41:4000/api/v1/verifyotp";
    return this.http.post<any>(url, verify);
  }


  isAuthenticated() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  isAuthenticate(): boolean {
    return !!localStorage.getItem('userData');


  }

  getToken(): any {
    const userData = localStorage.getItem('userData');
    if (userData) {
      console.log(JSON.parse(userData));
      let user = JSON.parse(userData);
      return user.data;
    } else {
      return null;
    }
  }
  openConfirmationDialogEdit(): void {
    const dialogRef = this.dialog.open(ErrorComponent, {
      width: '400px',
      height: '200px',
      data: {
        title: 'Unauthorized Access!!!',
        // message: 'Unauthorized Access'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("data returned from mat-dialog-close is ", result);
        this.routeToDashboard();
      }
    });
  }

  routeToDashboard(){
    this.route.navigate(['/dashboard']);
  }

}







