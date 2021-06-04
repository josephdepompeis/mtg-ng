import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private signUpApi = 'http://localhost:5000/signUp';

  constructor(private httpClient: HttpClient) { }

  public registerUser(formData: any): any {
    return this.httpClient.post(this.signUpApi, formData);
  }
}
