import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  serverUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  isLoginSuccessful(username, password) {
    return this.http.post(`${this.serverUrl}/users/validate`, { username: username, password: password });
  }
  isRegistrationSuccessful(name, username, password) {
    return this.http.post(`${this.serverUrl}/users/add`, { name: name, username: username, password: password });
  }
}
