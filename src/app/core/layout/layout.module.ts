import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePageModule } from 'src/app/features/home-page/home-page.module';
import { MaterialModule } from 'src/app/material/material.module';

import {CoreModule} from '../core.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomePageModule,
    MaterialModule,
    FormsModule,
    CoreModule
  ],
})
export class LayoutModule {}
