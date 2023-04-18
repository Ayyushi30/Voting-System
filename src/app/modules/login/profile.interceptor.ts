import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from './login.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Time } from '@angular/common';

const bodyScrollClass: string = "loaderBodyScrollFix";

@Injectable({
  providedIn: 'root'
})

export class ProfileInterceptor implements HttpInterceptor {
  private renderer: Renderer2;

  constructor(private loginservice: LoginService, private spinner: NgxSpinnerService, private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null)
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = performance.now();
    // this.showLoader
    let auth_token = localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        'content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${auth_token}`,
        'ngrok-skip-browser-warning': 'true'
      },
    })

    return next.handle(request).pipe(tap(async (event: HttpEvent<any>) => {
      if (event instanceof Response) {
        this.onEnd();
      }
    },
      (err: any) => {
        this.onEnd();
      }));
  }
  private onEnd(): void {
    this.hideLoader();     
  }
  private showLoader(): void {
    this.spinner.show();
  }
  private hideLoader(): void {
    this.spinner.hide();
  }
}

