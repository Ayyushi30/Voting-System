import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './modules/login/login.module';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileInterceptor } from './modules/login/profile.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './modules/material/material.module';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { ToastrModule } from 'ngx-toastr';
import { NgxMarqueeModule } from 'ngx-marquee';
import { NgxSpinnerModule } from "ngx-spinner";
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { CommonModule } from '@angular/common';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { NgbModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    HomeModule,
    ReactiveFormsModule,
    // MaterialModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 5000,
      closeButton: true
    }),
    NgxMarqueeModule,
    NgxSpinnerModule , 
    NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade' }),

    // AngularFireModule,
    // AngularFireAuth,

    
  ],
  exports : [
    NgxSpinnerModule
  ],

  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: ProfileInterceptor, multi:true
  }, 
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '282829664-alnv0thvns19gn09esu52m630d61ifoe.apps.googleusercontent.com'
          )
        },
       ],
      } as SocialAuthServiceConfig,
  
    }
  ],


  
  
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class AppModule { 
  // constructor(library: FaIconLibrary) {
  //   library.addIconPacks(fas);
  //   // library.addIcons(faGoogle);
}
