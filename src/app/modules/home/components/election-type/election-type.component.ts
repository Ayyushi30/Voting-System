import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-election-type',
  templateUrl: './election-type.component.html',
  styleUrls: ['./election-type.component.css']
})
export class ElectionTypeComponent implements OnInit {
  public verifyForm !: FormGroup;


  constructor(private _router: Router,
    private formbuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.verifyForm = this.formbuilder.group({
      voterID:[''],
      OTP:['']
  })
  }
  verify(){
    
  }
  

}
