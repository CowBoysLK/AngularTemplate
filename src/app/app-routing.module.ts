import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: './features/home-page/home-page.module#HomePageModule',
    pathMatch: 'full',
  },
  {
    path: 'profile-page',
    loadChildren: () =>
      import('./features/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'home-page',
    loadChildren: () =>
      import('./features/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'category-page',
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
})
export class AppRoutingModule {}
