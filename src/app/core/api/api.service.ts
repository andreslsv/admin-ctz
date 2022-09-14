import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) { }


  public login(credentials: { name: string; password: string }): Observable<any>{
    return this._httpClient.post(`${environment.serverUrl}/login`,credentials);
  }

}
