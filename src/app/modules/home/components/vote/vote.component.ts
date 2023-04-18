import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { HeaderComponent } from 'src/app/modules/shared/header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit{

  parties: any =[];

  constructor(private _router: Router,
    private homeservice: HomeService,
    private http:HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
    ){

    }

  ngOnInit(): void {
    this.getCandidatesData();
  }

  getCandidatesData(){
    this.homeservice.getParties().subscribe(res=>{
      if(res){
        console.log(res.data);
        this.parties=res.data;
      }
    });  
  }
                      
  openConfirmationDialogEdit(): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      
      width: '400px',
      height:'200px',
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to cast your vote?'
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.snackBar.open('Your vote has been stored successfully!', 'Close', {
          duration: 2000,
        });
        this._router.navigate(['/user']);
      } else {
        this.snackBar.open('Kindly cast your vote!', 'Close', {
          duration: 2000,
        });
      }
    });
}
}

