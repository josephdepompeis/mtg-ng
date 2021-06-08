import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CardLibraryService} from '../../services/card-library/card-library.service';
import {Card} from '../../interfaces/card';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatInput} from '@angular/material/input';
import {User} from '../../interfaces/user';
import {UserInfoService} from '../../services/user-info/user-info.service';

@Component({
  selector: 'app-card-library',
  templateUrl: './card-library.component.html',
  styleUrls: ['./card-library.component.scss']
})
export class CardLibraryComponent implements OnInit, AfterViewInit {

  constructor(
    private cardLibraryService: CardLibraryService,
    private userInfoService: UserInfoService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatInput) filterInput: MatInput;

  dataSource: MatTableDataSource<Card>;

  cardLibrary: Card[];
  columnsToDisplay = ['id', 'name', 'setCode'];
  user: User;

  ngOnInit(): void {
    this.getAllCards();
    this.getUserInfo();

  }

  ngAfterViewInit(): void {
  }

  public getAllCards(): void {
    this.cardLibraryService.sendGetRequest().subscribe((cards: Card[]) => {
      console.log(cards);
      this.cardLibrary = cards;

      this.dataSource = new MatTableDataSource<Card>(cards);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  private getUserInfo(): void{
    this.userInfoService.user.subscribe((user: User) => {
      this.user = user;
    });
  }


  public applyFilter(): void {
    let filterValue = this.filterInput.value;
    // let filterValue;
    // if (event) {
    //   if (event.detail) {
    //     if (event.detail.value) {
    //       filterValue = event.detail.value;
    //     }
    //   }
    // }
    // if (filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    // }

  }
  // good reference for table https://stackblitz.com/angular/dnbermjydavk?file=app%2Ftable-overview-example.ts
}
