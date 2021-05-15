import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutGuard } from './core/guards/layout.guard';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [

  {
    path: '',
    canActivate:[LayoutGuard], 
    loadChildren: './features/home-page/home-page.module#HomePageModule',
    pathMatch: 'full',
  },
  {
    path: 'profile-page',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./features/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'home-page',
    // canActivate:[AuthGuard],
    loadChildren: () =>
      import('./features/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'category-page',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/category-page/category-page.module').then(
        (m) => m.CategoryPageModule
      ),
    
  },
  // {
  //   path: 'admin-dash',
  //   //canActivate: [AdminAuthGuardGuard],
  //   component: AdminAddDestinationComponent,
  //   loadChildren: () =>
  //     import(
  //       './features/admin-add-destination/admin-add-destination.module'
  //     ).then((m) => m.AdminAddDestinationModule),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers:[AuthGuard , LayoutGuard]
})
export class AppRoutingModule {}
