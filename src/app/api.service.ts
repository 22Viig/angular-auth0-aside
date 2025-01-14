import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getDragons$(): Observable<any[]> {
    return this.http
      .get<any[]>(environment.auth.RESTHEART_URL + environment.auth.RESTHEART_COLLECTION)
      .pipe(
        catchError(err => throwError(err))
      );
  }

}
