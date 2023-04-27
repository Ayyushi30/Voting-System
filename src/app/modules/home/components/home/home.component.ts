import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/login/login.service';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../../home.service';
import { DomSanitizer } from '@angular/platform-browser';
import election from '../../../../../assets/json/election.json';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
// import { DialogComponent } from '../dialog/dialog.component';
// import { MatDialog } from '@angular/material/dialog';

interface Election {
  id:any;
  state: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  modalReference: NgbModalRef;
  elections: Election[] = election;
  videoUrl;
  safeUrl;
  anotherUrl;
  // selectedRegion: any = ""
  dialog: any;
  allElections: any = [];
  selectedState: any;
  selectedStatus: any;
  filteredElections: Election[] = election;
  otp: any;
  public otpForm !: FormGroup;
  displayStyle = "none";
  otpSentMessage: string = '';
  selectedRowData: any;
  isOtpButtonClicked: boolean = false;
  isCross: boolean = true;
  private modals: any[] = [];
  // isCross: boolean= false;
  // states: string[] = [];

  constructor(private _router: Router, public LoginService: LoginService, private router: ActivatedRoute, private modalService: NgbModal, private homeservice: HomeService,
    private _sanitizer: DomSanitizer, private formbuilder: FormBuilder, private toastr: ToastrService, private snackBar: MatSnackBar, private SpinnerService: NgxSpinnerService, private loginservice: LoginService) {

  }
  ngOnInit(): void {

    // this.router.queryParams
    //   .subscribe(params => {
    //     console.log(params);
    //     let { selectedState } = params;
    //     this.selectedRegion = selectedState;
    //   })
    
    
    this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/BO6UHgRmBo8');
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/K1LrAeMVew4');
    this.anotherUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dWWuMT4FI7c');
    // this.electionsData();
    this.otpForm = this.formbuilder.group({
      voterId: [''],
      otp: ['']
    })
  }

  // routeToElectionScreen(type: any) {
  //   this._router.navigate(['/electiontype/' + type]);
  // }
  // openPopUp() {
  //   let modalReference = this.modalService.open(ElectionTypeComponent,
  //     {
  //       backdrop: 'static',
  //       size: 'lg',
  //       keyboard: false,
  //       centered: true
  //     });
  //     modalReference.result.then((result) =>{
  //       console.log(result);
  //     })

  // }
  // electionsData(){
  //   this.homeservice.allElectionsData().subscribe(res=>{
  //     if(res){
  //       console.log(res.data);
  //       this.allElections=res.data;
  //     }
  //   });
  // }
  filterByStatus(event) {
    this.selectedStatus = event.target.value;
    if (this.selectedStatus) {
      if (this.selectedState) {
        this.filteredElections = this.elections.filter((election) => (this.selectedState === election.state && this.selectedStatus === election.status));
      } else {
        this.filteredElections = this.elections.filter((election) => (this.selectedStatus === election.status));
      }
    } else {
      if (this.selectedState) {
        this.filteredElections = this.elections.filter((election) => (this.selectedState === election.state));
      } else {
        this.filteredElections = this.elections;
      }
    }
  }

  filterByState(event) {
    this.selectedState = event.target.value;
    if (this.selectedState) {
      if (this.selectedStatus) {
        this.filteredElections = this.elections.filter((election) => (this.selectedState === election.state && this.selectedStatus === election.status));
      } else {
        this.filteredElections = this.elections.filter((election) => (this.selectedState === election.state));
      }
    } else {
      if (this.selectedStatus) {
        this.filteredElections = this.elections.filter((election) => (this.selectedStatus === election.status));
      } else {
        this.filteredElections = this.elections;
      }
    }
  }
  saveData(data: any) {
    this.selectedRowData = data;
    this.displayStyle = "block";
    console.log(data);
    return data;
  }

  openOTPModal(id:any) {
    // console.log("kbksadbakbdka-----------------------------",id)
    localStorage.setItem("elecId",id)
    this.displayStyle = "block";
  }

  verifyId() {
    // this.LoginService.verifyOtp(this.otpForm.value).subscribe((res)=>{
    //   if(res){
    //     console.log("asdfg");

    //   }
    // })
    //   if (this.otpForm.value.otp==this.otp){
    //     this.snackBar.open("Verified Successfully!!")
    //     this._router.navigate(["/vote"]);
    //   }
    //   else{
    //     this.snackBar.open("The code you entered is incorrect",'Close', {
    //       duration: 2000,
    //     });
    //   }

  }

  verifyVoter() {
    this.SpinnerService.show();
    // this.otpSentMessage = 'OTP sent to your email!';
    this.isOtpButtonClicked = true;
    this.homeservice.verifyVoterId(this.otpForm.value).subscribe((res: any) => {
      if (res) {
        this.snackBar.open('Please check your mail!', 'close', {
          duration: 2000,
        });
        this.displayStyle = "block";
        this.SpinnerService.hide();
      }
    }
      , (err) => {
        this.snackBar.open('Voter ID does not exist!', 'Close', {
          duration: 2000,
        });
      });
  }
  verifyOtpSent() {
    this.loginservice.verifyOtp(this.otpForm.value).subscribe((res) => {
      if (res) {
        console.log(res.token);
        this.snackBar.open("Voter ID verified successfully!!.", 'Close', {
          duration: 2000,
        });
        this._router.navigate(['/vote']);
      }

    }, (err) => {
      this.snackBar.open("Invalid OTP", 'Close', {
        duration: 2000,
      });
    }
    );
  }

  sendotp() {
    this.otp = 2121;
    this.otpSentMessage = 'OTP sent to your email!';
    this.isOtpButtonClicked = true;
    // this.otp=this.verifyForm.value.otp;
  }

  closePopup() {
    this.displayStyle = "none";
    console.log("sdfghj");
  }



}






