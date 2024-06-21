import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegisterService {
  private apiUrl = '/api/api/home/';
  private apiUrltel = '/api/api/profil/';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"inscription", data);
  }
  
  login(data:any):Observable<any>{
    console.log(data)
    return this.http.post(this.apiUrl+"connection" ,data);
  }

  getProfil(data:any):Observable<any>{
    console.log(data)
    return  this.http.post(this.apiUrl+"profil",data);
  }
  updateTel(data:any):Observable<any>{
    console.log(data)
    return this.http.post(this.apiUrltel+"tel",data)
  }
}
