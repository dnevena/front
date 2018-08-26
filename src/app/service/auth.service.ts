import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  onLogin(login: Login): Observable<any> {
    return this.http.post('http://localhost:8082/authtentication/login', login , httpOptions)
  }

getToDo(): Observable<any> {
  return this.http.get('http://localhost:8082/todo')
}

}
