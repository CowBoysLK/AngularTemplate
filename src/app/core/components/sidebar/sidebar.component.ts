import { Component, OnInit } from '@angular/core';
import { adminRoutes } from '../../Enums/RoutesEnum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  public routes: typeof adminRoutes = adminRoutes;
  public isOpenUiElements = false;

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  ngOnInit(): void {}
}
