import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService) { }


  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.loginForm = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  public getAllCards(): void {
    this.loginService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      // this.products = data;
    });
  }

  public submit(): void {
    this.loginService.loginUser(this.loginForm.value).subscribe((data: any[]) => {
      console.log('login response', data);
      // this.products = data;
    });
    console.log(this.loginForm.value);
  }

}
