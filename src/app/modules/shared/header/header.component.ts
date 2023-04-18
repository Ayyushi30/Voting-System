import { Component, OnInit,Input } from '@angular/core';
import { LoginService } from 'src/app/modules/login/login.service';
// import { Component, Input } from '@angular/core';
import region from 'src/assets/json/region.json';
import { Router } from '@angular/router';


interface Region{
  region: String;
}
var key="";
let user:any;
// var searchItem:string[];



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // var searchItem: string[]
  region: Region[] = region;
  userName : String = '';
  userData:any
 
  constructor(public loginservice: LoginService, private _router: Router){
    
  }
  
  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
  setTimeout(() => {
    this.userData = localStorage.getItem('userData');
    this.userData = JSON.parse(this.userData);
    if(this.userData)
    {
     this.userName = this.userData.data.name;
   }
  }, 1000);

  }
  onKeydown(eventData:any)
  {
    console.log("Input:", );
    // console.log()
    var el=document.querySelector('.inp') as HTMLInputElement
    var key=el.value;
    let vals=this.customSearchFn(key,region)
    console.log("SEARCH ITEM:",vals);
    // this.searchItem=vals
    console.log("Vals:",vals);
  
  }

  customSearchFn(term: string, region: any) {
    // check if the name startsWith the input, everything in lowercase so "a" will match "A" 
    
    var arr_names:string[] = new Array(region.length)  
    for(var i=0;i<region.length;i++)
    {
          if(region[i].region.toLowerCase().startsWith(term.toLowerCase())) 
          {
            arr_names.push(region[i].region);
          }
    }
    return arr_names;

    
}
routeToUser(){
  this._router.navigate(['user']);
}
routeToLogin(){
  this._router.navigate(['login']);
}

routeToSignup(){
  this._router.navigate(['signup']);
}

}



