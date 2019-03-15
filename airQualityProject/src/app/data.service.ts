import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}

  public getData(lan:string): Observable<any> {
    if(lan == 'en'){
      return this.http.get("../assets/data/english.json");
    }else if(lan == 'hi'){
      return this.http.get("../assets/data/hindi.json");
    }
  }
}
