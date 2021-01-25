import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../services/register/register.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor(private registerService: RegisterService) {}

  registerForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  public submit(): void {
    this.registerService.registerUser(this.registerForm.value).subscribe((data: any[]) => {
      console.log('login response', data);
      // this.products = data;
    });
    console.log(this.registerForm.value);
  }

}
