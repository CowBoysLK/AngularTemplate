import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryPageRoutingModule } from './category-page-routing.module';
import { CategoryPageComponent } from './category-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CategoryPageComponent],
  imports: [
    CommonModule,
    CategoryPageRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class CategoryPageModule { }
