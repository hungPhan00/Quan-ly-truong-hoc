import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/ad/dashboard", title: "Thống kê", icon: "nc-bank", class: "" },
  { path: "/ad/table", title: "Sinh viên", icon: "nc-tile-56", class: "" },
  { path: "/ad/teacher", title: "Giảng viên", icon: "nc-tile-56", class: "" },
  { path: "/ad/monhoc", title: "Môn Học", icon: "nc-tile-56", class: "" },
  { path: "/ad/ketoan", title: "Kế toán", icon: "nc-tile-56", class: "" },
  { path: "/ad/taikhoan", title: "Tài khoản", icon: "nc-tile-56", class: "" },
  { path: "/ad/mess", title: "Thông báo", icon: "nc-tile-56", class: "" },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  
  
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    
  }
  
}
