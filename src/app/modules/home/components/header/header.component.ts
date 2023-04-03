import { Component, OnInit,Input } from '@angular/core';
// import { Component, Input } from '@angular/core';
import region from 'src/assets/json/region.json';


interface Region{
  region: String;
}
var key="";
let userName:any;
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
 
  
 
  constructor(){
    
  }
  


  ngOnInit(): void {
    

    // userName = localStorage.getItem('ayushiName');
    // console.log("NAME:",userName);

    //SECOND METHOD : using DOM manipulation changing cntext of p tag
    // var el=document.querySelector('.nav-link') as HTMLParagraphElement
    // el.textContent+=userName;
    
  
   
  }
  // user= userName;
  getN(){
    userName = localStorage.getItem('userName');
    return userName;
  }
  userNam:String=this.getN()

  

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
    

    // var listItem=document.createElement('li')
    
   
    
    // var list=region.filter()
    
    //typed value - 
    //regions ["delhi","gurgaon"]
    //regions.filter(inputValue)
    //return s an array
    //this retunay element is hsown belw the input box
    //in html, we create an empty div
    //
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

    // return region[0].region.toLowerCase().startsWith(term.toLowerCase())
    
}


 
  
  

  


  

}



