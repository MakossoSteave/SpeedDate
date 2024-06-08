import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegisterService {

  private api = '/api/home/inscription'; 

  constructor( private http : HttpClient) { }



  Register(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.api,
      'description': "gestion des garages de proximité",
      'accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(this.api, data, { headers });
  }

}
