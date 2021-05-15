import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LayoutTypes } from '../../Enums/layoutEnums';
import { WebAppRoutes } from '../../Enums/RoutesEnum';
import { UrlEnums } from '../../Enums/UrlEnums';
import { UpdateLayoutType } from '../../store/actions/LayoutType.Actions';
import { AuthenticateUser, UpdateUserId } from '../../store/actions/User.Actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  userLoggedIn = false;

  ngOnInit(): void {
     
     this.store.select('authInfo').subscribe((info) => {
      if (info.authToken !== '' && info.userId !== '') {
        this.userLoggedIn = true;
      }
    });
   
  }

  // navigation code
  goToLogout() {
    this.router.navigate([WebAppRoutes.HOME_PAGE]);
    this.store.dispatch(new UpdateLayoutType(LayoutTypes.LOGIN));
    this.store.dispatch(new AuthenticateUser(''));
    this.store.dispatch(new UpdateUserId(''));
  }

  goToProfile() {
    // this.router.navigate([WebAppRoutes.PROFILE_PAGE]);
  }

  goToHome() {
    // this.router.navigate([WebAppRoutes.HOME_PAGE]);
  }

  goToLogin() {
    console.log('login clicked');

    this.store.dispatch(new UpdateLayoutType(LayoutTypes.LOGIN));
  }


}
