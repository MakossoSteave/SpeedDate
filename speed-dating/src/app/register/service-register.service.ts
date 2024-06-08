import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegisterService {
  private apiUrl = '/api/api/home/';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"inscription", data);
  }
  
  login(data:any):Observable<any>{
    console.log(data)
    return this.http.post(this.apiUrl+"connection" ,data);
  }

}
