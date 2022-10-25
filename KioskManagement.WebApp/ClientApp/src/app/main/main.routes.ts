import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
        data: {
          title: 'Trang chủ',
          breadcrumb: [
            {
              label: 'Trang chủ',
              url: ''
            }
          ]
        },
      },
      {
        path: 'home', loadChildren: () => import("./home/home.module").then(m => m.HomeModule),

      },
      {
        path: 'app-group', loadChildren: () => import("./system/app-group/app-group.module").then(m => m.AppGroupModule),
      },
      {
        path: 'app-role', loadChildren: () => import("./system/app-role/app-role.module").then(m => m.AppRoleModule),

      },
      {path:'app-user',loadChildren:()=>import('./system/app-user/app-user.module').then(x=>x.AppUserModule)},
      {path:'app-menu',loadChildren:()=>import('./system/app-menu/app-menu.module').then(x=>x.AppMenuModule)},
      
    ]
  }
];
