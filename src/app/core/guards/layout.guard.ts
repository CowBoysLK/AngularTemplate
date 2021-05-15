import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { LayoutTypes } from '../Enums/layoutEnums';
import { UpdateLayoutType } from '../store/actions/LayoutType.Actions';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router){}
  canActivate(): Observable<boolean> | boolean {

    return this.store.select('authInfo')
      .pipe(
        map(info => {
          if (info.authToken !== '' && info.userId !== '') {
            return true;
          }
          else {
            this.store.dispatch(new UpdateLayoutType(LayoutTypes.LOGIN));
            return true;
          }
        }),
       
      );
  }
  
}
