import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserServices } from './users.service';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  pageTitle = 'User Detail';
  user: any;
  erroMessage: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserServices
  ) {}

  goBack() {
    this.router.navigate(['/users']);
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe({
      next: (user) => (this.user = user),
      error: (err) => (this.erroMessage = err),
    });
  }
  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getUser(id);
    }
  }
}
