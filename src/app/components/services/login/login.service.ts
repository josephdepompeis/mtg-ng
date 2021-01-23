import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private REST_API_SERVER = 'http://localhost:5000/cards';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(): any {
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
