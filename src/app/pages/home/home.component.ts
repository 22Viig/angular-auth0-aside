import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.auth.userProfile$.pipe(catchError(err => throwError(err)));

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
