import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LayoutTypes } from '../Enums/layoutEnums';
import { WebAppRoutes } from '../Enums/RoutesEnum';
import { UpdateLayoutType } from '../store/actions/LayoutType.Actions';
import { AuthenticateUser, UpdateUserId } from '../store/actions/User.Actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  layoutType: number;
  ngOnInit(): void {
    this.store.select('layoutType').subscribe((info) => {
      this.layoutType = info.type;

      // this.loadLoginScreen = false;
    });
  }

 
  
}
