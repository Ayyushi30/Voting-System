import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import results from '../../../../../assets/json/results.json';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { MatDialog } from '@angular/material/dialog';

interface Results {
  party_name: any;
  candidate_name: any;
  votes: any;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{

  result: Results[] = results;

  constructor(private _router : Router, private snackBar: MatSnackBar, private dialog: MatDialog ){

  }

  ngOnInit(): void {
  }

  route(){
    this._router.navigate(['/vote']);
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

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.snackBar.open('Thank you for your precious time.', 'Close', {
          duration: 2000,
        });
        this._router.navigate(['/']);
      } else {
        this.snackBar.open("You're not logged In", 'Close', {
          duration: 2000,
        });
      }
    });
  }
  


}
