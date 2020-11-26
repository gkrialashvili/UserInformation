import { Component, OnInit } from '@angular/core';
import { UserServices } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  pageTitle = 'Users Information';
  maleImage = './assets/images/man.svg';
  femaleImage = './assets/images/female.svg';
  erroMessage: string;
  lastSeachValue: any;
  _listFiler: any;
  get listFilter() {
    return this._listFiler;
  }
  set listFilter(value) {
    this._listFiler = value;
    this.filteredUsers = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.userLists;
  }

  filteredUsers = [];
  userLists = [];

  constructor(private userServices: UserServices) {}

  performFilter(filterBy) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.userLists.filter(
      (userList) =>
        userList.ClientNumber.toString().indexOf(filterBy) !== -1 ||
        userList.City.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        userList.Country.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        userList.Address.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        userList.FirstName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        userList.Sex.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        userList.LastName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  userClick(event: string) {
    alert(event);
  }
  filter() {}
  saveLastSearch(event) {
    let inputValue = event.target.value;
    localStorage.setItem('lastSeach', inputValue);
  }
  getLastSearch() {
    localStorage.getItem('lastSeach');
    this.lastSeachValue = localStorage.getItem('lastSeach');
  }

  ngOnInit() {
    this.userServices.getUsers().subscribe({
      next: (users) => {
        this.userLists = users;
        this.filteredUsers = this.userLists;
      },
      complete: () => {
        this.getLastSearch();
        this.listFilter = this.lastSeachValue;
      },
      error: (err) => (this.erroMessage = err),
    });
  }
}
