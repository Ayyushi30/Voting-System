import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
// import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ErrorComponent,
                 HeaderComponent],
  
  imports: [
    CommonModule,
    // MaterialModule

  ],
  exports : [HeaderComponent]
})
export class SharedModule { }
