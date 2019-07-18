import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getDragons$(token: String): Observable<any[]> {
    return this.http
      .get<any[]>('http://127.0.0.1:8080/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .pipe(
        catchError(err => throwError(err))
      );
  }

}
