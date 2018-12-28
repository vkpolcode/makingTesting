import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api_url;
  }

  public delete<T>(path: string, options?: any): Observable<T> {
    return this.request(path, 'delete', options);
  }

  public get(path: string, options?: any): Observable<any> {
    return this.request(path, 'get', options);
  }

  public post<T>(path: string, options?: any): Observable<T> {
    return this.request(path, 'post', options);
  }

  public put<T>(path: string, options: any): Observable<T> {
    return this.request(path, 'put', options);
  }

  public patch<T>(path: string, options: any): Observable<T> {
    return this.request(path, 'patch', options);
  }

  private request<T>(path: string, method: string, options?: any): Observable<any> {
    options = options || {};
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    const requestOptions = Object.assign(options, {headers: headers}, {observe: 'response'});
    return this.http.request(method, `${this.baseUrl}${path}`, requestOptions);
  }
}
