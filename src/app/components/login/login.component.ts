import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      // this.products = data;
    });
  }

}