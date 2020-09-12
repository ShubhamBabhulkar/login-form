import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpRequest: HttpClient) { }
  private baseUrl = 'http://localhost:3000/user';

  signUp = (userEntry) => {
    return this.httpRequest.post(this.baseUrl, userEntry);
  }
}
