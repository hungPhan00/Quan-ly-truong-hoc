import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from 'app/service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { TeacherComponent } from './pages/teacher/teacher.component';
import { MonhocComponent } from './pages/monhoc/monhoc.component';
import { TaichinhComponent } from './pages/taichinh/taichinh.component';
import { GvComponent } from './pages/taichinh/gv/gv.component';
import { TaikhoanComponent } from './pages/taikhoan/taikhoan.component';
import { AccteacherComponent } from './pages/taikhoan/accteacher/accteacher.component';
import { LoginktComponent } from './loginkt/loginkt.component';
import { LoginteComponent } from './loginte/loginte.component';
import { TeachComponent } from './teach/teach.component';
import { KetoanComponent } from './ketoan/ketoan.component';
import { IndexComponent } from './index/index.component';
import { MessComponent } from './pages/mess/mess.component';
import { AccadminComponent } from './pages/taikhoan/accadmin/accadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    TeacherComponent,
    MonhocComponent,
    TaichinhComponent,
    GvComponent,
    TaikhoanComponent,
    AccteacherComponent,
    LoginktComponent,
    LoginteComponent,
    TeachComponent,
    KetoanComponent,
    IndexComponent,
    MessComponent,
    AccadminComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FixedPluginModule
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
