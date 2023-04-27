import { Component, OnInit } from '@angular/core';
// import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { LoginService } from '../../login.service';
import { HomeService } from 'src/app/modules/home/home.service';
import { Router } from '@angular/router';
import { ConfirmationComponent } from 'src/app/modules/home/components/confirmation/confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import  election from '../../../../../assets/json/election.json' 
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  profileData: any;
  partiesData: any;
  confirmed: boolean =true;
  currentDate: Date = new Date();
  buttonDisabled: boolean = false;


  constructor(private login: LoginService,
    private home: HomeService,
    private _router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
     ){
  
  }
  ngOnInit(): void {
    this.getProfileData(); 
  }
 
  getProfileData(){
    this.profileData = localStorage.getItem('userData');
    this.profileData = JSON.parse(this.profileData);
    this.profileData = this.profileData.data;

  }

  getCandidates(){
    this.home.getCandidates();
  }
  logout(){
    localStorage.clear();
    this._router.navigate(['']);
  }

  openConfirmationDialogEdit(): void {    
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '400px',
      height:'200px',
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to logout?'
      }
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        console.log("data returned from mat-dialog-close is ",result);
        this.logout();
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.snackBar.open('Thank you for your precious time.', 'Close', {
          duration: 2000,
        });
        this._router.navigate(['/']);
      } else {
        this.snackBar.open('Please continue to vote.', 'Close', {
          duration: 2000,
        });
      }
    });
  }
  
  onButtonClicked() {
    this.buttonDisabled = true;
  }


}



