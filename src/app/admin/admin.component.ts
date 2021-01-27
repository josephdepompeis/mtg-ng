import { Component, OnInit } from '@angular/core';
import {AdminService} from '../components/services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
  }

  public addSetEld(): void {
    this.adminService.addSet('ELD').subscribe((data: any[]) => {
      console.log(data);
    });
  }

  public addSetStu(): void {
    this.adminService.addSet('STU').subscribe((data: any[]) => {
      console.log(data);

    });
  }

  public addSetThb(): void {
    this.adminService.addSet('THB').subscribe((data: any[]) => {
      console.log(data);
    });
  }

  public addSetIko(): void {
    this.adminService.addSet('IKO').subscribe((data: any[]) => {
      console.log(data);
    });
  }
}
