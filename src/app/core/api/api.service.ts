import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'access-token': localStorage.getItem('accessToken'),
    })
  };

  constructor(private _httpClient:HttpClient) { }

  public getData(nombreQuery,queryParams): Observable<any>{
    return this._httpClient.get(`${environment.serverUrl}/api/${nombreQuery}?${queryParams}`,this.httpOptions);
  }

  public setData(nombreQuery,dataForm: { nombre: string; unidad_medida: string }): Observable<any>{
    return this._httpClient.post(`${environment.serverUrl}/api/${nombreQuery}`,dataForm,this.httpOptions);
  }

  public deleteData(nombreQuery,idData): Observable<any>{
    return this._httpClient.delete(`${environment.serverUrl}/api/${nombreQuery}/${idData}`,this.httpOptions);
  }

}
