import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getDragons$(idToken: String): Observable<any[]> {
    return this.http
      .get<any[]>('http://localhost:8080/dragons')
      .pipe(
        catchError(err => throwError(err))
      );
  }

}
