import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  party:any='';
  parties=[];
  
  constructor(private http:HttpClient) { }

  public getParties(){
    const url="http://43.205.191.47:4000/api/v1/vote";
    return this.http.get<any>(url);
  }

  public selectedVote(vote:any){
    const url=" ";
    return this.http.post<any>(url, vote);
  }


  public allElectionsData(){
    const url="http://43.205.191.47:4000/api/v1/viewElection";
    return this.http.get<any>(url);
  }


  getCandidates(){
    this.getParties().subscribe(res=>{
      if(res){
        console.log(res);
        this.party= res;
        this.parties=this.party;
      }
    });
  }
 
}
