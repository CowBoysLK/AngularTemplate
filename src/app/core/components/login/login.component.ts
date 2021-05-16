import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { UserTypes } from '../../Enums/AuthenticationEnums';
import {
  AuthenticateUser,
  UpdateUserId,
  UpdateUserType,
} from '../../store/actions/User.Actions';
import { UpdateLayoutType } from '../../store/actions/LayoutType.Actions';
import { LayoutTypes } from '../../Enums/layoutEnums';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { UserAuthentication } from '../../Services/Login/loginAuth';
import { GoogleAuthInfo } from '../../Models/AuthInfo.Model';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public email: string = '';
  public password = '';

  constructor(
    private store: Store<AppState>,
    private afAuth: AngularFireAuth,
    private userAuth: UserAuthentication
  ) {}

  @ViewChild('username') userNameElement: ElementRef;
  @ViewChild('password') passwordElement: ElementRef;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.password, [Validators.required]),
    });
  }
  // push attempt 2
  loginwithGoogle(): void {
    console.log('loging with google');
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider).then((result) => {
      //  console.log(result.user);
      // console.log('email' + result.user?.email);
      // console.log('display name ' + result.user?.displayName);
      // this.store.dispatch(new UpdateLayoutType(LayoutTypes.DEFAULT));
      if (result.user?.email !== '') {
        const info: any = {
          email: result.user?.email,
          name: result.user?.displayName,
          // profileImage: result.user?.imageUrl
        };
        this.userAuth.RegisterWithGoogleAuth(info).then((data) => {
          console.log(data);
          this.store.dispatch(new AuthenticateUser(data.authToken));
          this.store.dispatch(new UpdateUserId(data.user.userId));
        });

        // this.userAuth.getUserType(data.user.userId);

        // this.store.dispatch(new UpdateLayoutType(LayoutTypes.DEFAULT));

        // .catch(err => console.log('err ' + err)
      }
    });
  }

  login(): void {
    this.email = this.userNameElement.nativeElement.value;
    this.password = this.passwordElement.nativeElement.value;
    if (this.email !== '' && this.password !== '') {
      console.log('logging the user in');
      this.userAuth
        .authenticateWithUsernameAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data);
          if (data.stastusCode == 0) {
            this.store.dispatch(new AuthenticateUser(data.authToken));
            this.store.dispatch(new UpdateUserId(data.user.userId));
            this.store.dispatch(new UpdateUserType(UserTypes.ADMIN));
            // this.store.dispatch(new UpdateLayoutType(LayoutTypes.DEFAULT));
          } else {
            // this. presentLoginFailedToast();
            console.log('login failed');
          }
        });
    }
  }

  mockLogin(): void {
    this.email = this.userNameElement.nativeElement.value;
    this.password = this.passwordElement.nativeElement.value;
    if (this.email !== '' && this.password !== '') {
      console.log('logging the user in');
      // temp token valid till Aug 16
      const tempToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZmYzZDFjZC0yMWJkLTRmYzgtOGU2NS0xMGUzYWUxMmU4NjYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNGZmM2QxY2QtMjFiZC00ZmM4LThlNjUtMTBlM2FlMTJlODY2IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVmlzaXRvciIsInVuaXF1ZV9uYW1lIjoiZGluaXRoMTIzQHlvcG1haWwuY29tIiwiaWF0IjoiNS8xNi8yMDIxIDEwOjAyOjI2IEFNIiwibmJmIjoxNjIxMTU5MzQ2LCJleHAiOjE2MjkxMDgxNDYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY3IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjcifQ.-Hp8Pw_urL10HORPrk0QdOnHbTyKtjdgYT3KmzLs7lU';
      this.store.dispatch(new AuthenticateUser(tempToken));
      this.store.dispatch(new UpdateUserId('dinith72'));
      this.store.dispatch(new UpdateUserType(UserTypes.BUYER));
      this.store.dispatch(new UpdateLayoutType(LayoutTypes.WITH_HEADER));


    }
  }
}
