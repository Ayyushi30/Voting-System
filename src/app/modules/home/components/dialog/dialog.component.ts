import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  public otpForm !: FormGroup;
  private _router: any;
  otp: number;
  otpSentMessage: string;
  isOtpButtonClicked: boolean;

  @ViewChild('namebutton', { read: ElementRef, static:false }) namebutton: ElementRef;
  constructor(private ngModal : NgbActiveModal, private snackBar: MatSnackBar,private formbuilder:FormBuilder,
   
  ) {}
  
  ngOnInit(){
    const nativeModalElement = document.querySelector('ngb-modal-window.modal');
    nativeModalElement.classList.remove('fade');
    this.otpForm = this.formbuilder.group({
      voterId:[''],
      otp:['']
})

  }
  get title(): string {
    return 'this.data.title';
  }

  get message(): string {
    return 'this.data.messag';
  }
  onNoClick(): void {
    this.ngModal.close(false);
  }

  onYesClick(): void {
    this.ngModal.close(true);
  }
  verify(){
    this.ngModal.close();
    // if (this.otpForm.value.otp==this.otp){
    //   this.snackBar.open("Verified Successfully!!")
    //   this.routeToUser();

    // }
    // else{
    //   this.snackBar.open("The code you entered is incorrect",'Close', {
    //     duration: 2000,
    //   });
    // } 
  }

  sendotp(){
    // this.ngModal.close();
    this.otp=2121;
    this.otpSentMessage = 'OTP sent to your email!';
    this.isOtpButtonClicked = true;
    // this.otp=this.verifyForm.value.otp;
  }
  routeToUser(){
    this._router.navigate(['/user']);
  }

  

}
