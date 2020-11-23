import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  pageTitle = 'Users Information';
  maleImage = './assets/images/man.svg';
  femaleImage = './assets/images/female.svg';
  _listFiler: string;
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
  userLists = [
    {
      ClientNumber: 2,
      FirstName: 'George',
      LastName: 'Krialashvili',
      Sex: 'Male',
      Country: 'Georgia',
      City: 'Tbilisi',
      Address: 'Kalistrate Kut Street',
    },
    {
      ClientNumber: 12,
      FirstName: 'Lasha',
      LastName: 'Krialashvili',
      Sex: 'Male',
      Country: 'Georgia',
      City: 'Tbilisi',
      Address: 'Digomi',
    },
    {
      ClientNumber: 16,
      FirstName: 'Sesili',
      LastName: 'Krialashvili',
      Sex: 'Female',
      Country: 'Georgia',
      City: 'Tbilisi',
      Address: 'Digomi',
    },
  ];

  constructor() {
    this.filteredUsers = this.userLists;
  }

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

  ngOnInit() {
    console.log('init working');
  }
}
