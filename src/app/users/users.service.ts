import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUsers } from './users';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private usersUrl = 'api/users/users.json';
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any[]> {
    return this.http
      .get<any[]>(this.usersUrl)
      .pipe(catchError(this.handleError));
  }

  public getUser(id): Observable<any | undefined> {
    return this.getUsers().pipe(
      map((users: any[]) => users.find((p) => p.ClientNumber === id)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
