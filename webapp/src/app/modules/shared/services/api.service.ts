import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
     * Sends http get request
     */
  get(url: string, params?: HttpParams): Observable<any> {
    return this.http.get(url, { params });
  }

  /**
   * Send http post request
   */
  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }
}
