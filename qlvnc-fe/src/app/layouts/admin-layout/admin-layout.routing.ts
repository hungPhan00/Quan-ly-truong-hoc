import { TaikhoanComponent } from './../../pages/taikhoan/taikhoan.component';
import { TaichinhComponent } from './../../pages/taichinh/taichinh.component';
import { MonhocComponent } from './../../pages/monhoc/monhoc.component';
import { TeacherComponent } from './../../pages/teacher/teacher.component';

import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

import { TableComponent } from "../../pages/table/table.component";
import { IconsComponent } from "../../pages/icons/icons.component";

import { MessComponent } from 'app/pages/mess/mess.component';




export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "table", component: TableComponent },
  { path: "teacher", component: TeacherComponent },
  { path: "monhoc", component: MonhocComponent },
  { path: "ketoan", component: TaichinhComponent },
  { path: "taikhoan", component: TaikhoanComponent },
  { path: "mess", component: MessComponent },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },

];
