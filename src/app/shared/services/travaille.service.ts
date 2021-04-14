import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TravailleService {

  private baseUrl = 'http://localhost:8080/api/travaille';
  private createUrl = 'http://localhost:8080/api/travaille';

  constructor(private http: HttpClient) { }

  

  gettravaille(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createtravaille(travaille: Object): Observable<Object> {
    return this.http.post(`${this.createUrl}`, travaille);
  }

  updatetravaille(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletetravaille(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  
  gettravailleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
