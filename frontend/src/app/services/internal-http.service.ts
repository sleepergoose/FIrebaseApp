import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalHttpService {
  baseUrl: string = environment.apiUrl;
  headers = new HttpHeaders();

  constructor(private _http: HttpClient) { }

  public getRequest<T>(url: string, httpParams?: any): Observable<T> {
    return this._http.get<T>(this._buildUrl(url), { headers: this._getHeaders(), params: httpParams});
  }

  public postRequest<T>(url: string, payload: object): Observable<T> {
    return this._http.post<T>(this._buildUrl(url), payload, { headers: this._getHeaders() })
  }

  public putRequest<T>(url: string, payload: object): Observable<T> {
    return this._http.post<T>(this._buildUrl(url), payload, { headers: this._getHeaders() })
  }

  public deleteRequest<T>(url: string, httpParams: any): Observable<T> {
    return this._http.delete<T>(this._buildUrl(url), { headers: this._getHeaders(), params: httpParams });
  }

  private _getHeaders(): HttpHeaders {
    return this.headers;
  }

  private _buildUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return this.baseUrl + url;
  }
}
