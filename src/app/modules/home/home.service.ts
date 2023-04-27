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
    const url="http://15.206.28.41:4000/api/v1/votes";
    return this.http.get<any>(url);
  }

  public selectedVote(vote:any){
    const url="http://15.206.28.41:4000/api/v1/vote";
    return this.http.post<any>(url, vote);
  }


  public allElectionsData(userState: any){
    const url="http://15.206.28.41:4000/api/v1/viewElection?search=${userState}";
    return this.http.get<any>(url);
  }

  
  public verifyVoterId(verifyVoter){
    const url="http://15.206.28.41:4000/api/v1/verifyid";
    return this.http.post<any>(url, verifyVoter);
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
