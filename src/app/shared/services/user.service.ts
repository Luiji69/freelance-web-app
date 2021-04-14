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
export class UserService {

  private baseUrl = 'http://localhost:8080/api/user';
  private createUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  

  getuser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createuser(user: Object): Observable<Object> {
    return this.http.post(`${this.createUrl}`, user);
  }

  updateuser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  
  getuserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
