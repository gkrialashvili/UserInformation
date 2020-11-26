import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users/:id', component: UserDetailComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
