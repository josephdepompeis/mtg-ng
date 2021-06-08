import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../interfaces/user';
import {UserInfoService} from '../../services/user-info/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private userInfoService: UserInfoService
  ) { }

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
    });
  }

  public submit(): void {
    this.loginService.loginUser(this.loginForm.value).subscribe((data: User) => {
      console.log('login response', data);
      this.userInfoService.storeUser(data);
    });
    console.log(this.loginForm.value);
  }
}
