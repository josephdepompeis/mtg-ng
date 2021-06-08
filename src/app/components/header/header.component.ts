import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../../services/user-info/user-info.service';
import {User} from '../../interfaces/user';
import {Card} from '../../interfaces/card';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userInfoService: UserInfoService) { }

  user: User;

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo(): void{
    this.userInfoService.user.subscribe((user: User) => {
      this.user = user;
    });
  }
}
