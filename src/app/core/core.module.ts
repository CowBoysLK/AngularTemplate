import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, MaterialModule],
  exports: [LayoutComponent, HeaderComponent , FooterComponent , LoginComponent],
})
export class CoreModule {}
