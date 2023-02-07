import { IndexComponent } from './index/index.component';
import { LoginteComponent } from './loginte/loginte.component';
import { LoginktComponent } from './loginkt/loginkt.component';
import { TeachComponent } from './teach/teach.component';
import { KetoanComponent } from './ketoan/ketoan.component';
import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

export const AppRoutes: Routes = [

  {
    path: "ad",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (x) => x.AdminLayoutModule
          ),
      },
    ],
  },
  { path: "index", component: IndexComponent },
  { path: "login", component: LoginComponent },
  { path: "loginkt", component: LoginktComponent },
  { path: "loginte", component: LoginteComponent },
  { path: "ketoan", component: KetoanComponent },
  { path: "teach", component: TeachComponent },
  
  {
    path: "",
    redirectTo: "/index",
    pathMatch: "full",
  },

];
