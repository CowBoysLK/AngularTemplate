import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo, UserDetails } from '../../Models/UserInfo.Model';
import { GoogleAuthInfo } from '../../Models/AuthInfo.Model';
import { UrlEnums } from '../../Enums/UrlEnums';
import axios from 'axios';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {
  AuthenticateUser,
  UpdateUserId,
  UpdateUserType,
} from '../../store/actions/User.Actions';
import * as CryptoJS from 'crypto-js';
import { EncryptKeysEnums } from '../../Enums/AuthenticationEnums';

@Injectable({
  providedIn: 'root',
})
export class UserAuthentication {
  constructor(
    //  public http: HttpClient,
    private store: Store<AppState>
  ) {}

  async authenticateWithUsernameAndPassword(
    username: string,
    password: string
  ) {
    const url = UrlEnums.MAIN_API + UrlEnums.LOGIN_CONTROLLER;
    const encryptPw = this.getEncryptedPassword(password);
    // console.log(encryptPw);
    const data = {
      Email: username,
      Password: encryptPw,
    };
    const result = await axios.post(url, data);

    if (result.status === 200) {
      // if (result.data.stastusCode === 0) {
      //     this.store.dispatch(new AuthenticateUser(result.data.authToken));
      //     this.store.dispatch(new UpdateUserId(result.data.user.userId));
      // }
      return result.data;
    }
    return 99;
  }

  async getUserType(userId: string) {
    const url =
      UrlEnums.MAIN_API + UrlEnums.USER_CONTROLLER + '/userType/' + userId;
    const result = await axios.get(url);

    if (result.status === 200) {
      this.store.dispatch(new UpdateUserType(result.data.stastusCode));
    }
  }

  async userRegistration(userInfo: UserInfo) {
    const url = UrlEnums.MAIN_API + 'Register';
    const encryptPw = this.getEncryptedPassword(userInfo.password);
    const data = {
      Name: userInfo.userName,
      Password: 'lifung1234',
      Email: userInfo.email,
      MobileNumber: userInfo.mobileNumber,
    };
    const result = await axios.post(url, data);
    return result.status;
  }

  async RegisterWithGoogleAuth(info: GoogleAuthInfo) {
    const url = UrlEnums.MAIN_API + UrlEnums.LOGIN_CONTROLLER + '/google';
    const data = {
      email: info.email,
      name: info.name,
      imageUrl: info.profileImage,
    };
    const result = await axios.post(url, data);
    if (result.status === 200) {
      return result.data;
    } else {
      return null;
    }
  }

  private getEncryptedPassword(phrase: string) {
    const key = CryptoJS.enc.Utf8.parse(EncryptKeysEnums.KEY);
    const iv = CryptoJS.enc.Utf8.parse(EncryptKeysEnums.IV_KEY);
    const bytes = CryptoJS.enc.Utf8.parse(phrase);
    return CryptoJS.AES.encrypt(bytes, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
  }

  async getUserDetails(userId: string) {
    const url = UrlEnums.MAIN_API + UrlEnums.USER_CONTROLLER + userId;
    const result = await axios.get(url);
    if (result.status === 200) {
      return result.data;
    } else {
      return null;
    }
  }

  async updateProfile(userInfo: UserDetails) {
    const url = UrlEnums.MAIN_API + 'profile/UpdateUserProfile';
    const encryptPw = this.getEncryptedPassword(userInfo.newPassword);
    const data = {
      userId: userInfo.userId,
      name: userInfo.name,
      oldPassword: userInfo.oldPassword,
      password: encryptPw,
      mobileNumber: userInfo.mobileNumber,
      address: userInfo.address,
    };
    const result = await axios.post(url, data);
    console.log(result);
    return result.status;
  }
}
