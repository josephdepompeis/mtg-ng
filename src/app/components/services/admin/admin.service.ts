import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private addSetApi = 'http://localhost:5000/cardSets/add';

  constructor(private httpClient: HttpClient) { }

  public addSet(codeSet: string): any{
    const data = {
      setCode: codeSet
    };
    return this.httpClient.post(this.addSetApi, data);
  }

}
