import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { throwError, Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './../../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  idToken$ = this.auth.idToken$.pipe(catchError(err => throwError(err)));
  dragons$: Observable<any[]>;

  constructor(public auth: AuthService, private api: ApiService, ) { }


  ngOnInit() {
    this.auth.idToken$.subscribe(idToken => {
      this.dragons$ = this.api.getDragons$();
    })
  }

  makeProfileArray(obj): string[] {
    const keyPropArray = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keyPropArray.push(key + ': ' + JSON.stringify(obj[key]));
      }
    }
    return keyPropArray;
  }

}
