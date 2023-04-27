import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  private _router: any;
  constructor(public dialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  { title: string, message: string }
  ) {}
  get title(): string {
    return this.data.title;
  }

  get message(): string {
    return this.data.message;
  }
  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
