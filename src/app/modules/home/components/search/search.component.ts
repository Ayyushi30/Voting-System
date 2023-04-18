import { Component } from '@angular/core';
import { Router } from '@angular/router';


import region from 'src/assets/json/region.json';

interface Region {
  region: String;
}

let selected: any = "";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  region: Region[] = region;
  selectedGuest: any;
  constructor(private _router: Router,) {

  }

  handleChange(val: any) {

    console.log("Selected:", val);
    selected = val;

  }
  handleSubmit() {
    if (selected) {
      this._router.navigate([''], { queryParams: { selectedState: selected } });
    }
    else {
      window.alert("Please select the region first.");
    }


  }
}

console.log(region);




