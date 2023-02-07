import { Accadmin } from './../model/accadmin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'app/service/http.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public checksccForm!: FormGroup;
  public accadmin: Accadmin[];
  public editAccadmin: Accadmin;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router, private httpService: HttpService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      taikhoan:['',Validators.required],
      matkhau:['',Validators.required]
  });
  this.checksccForm = this.formBuilder.group({
    taikhoan:[''],
    scc:['']
  });

  this.getAccadmin();
  }
  login(){
    this.http.get<any>("http://localhost:8080/admin/all").subscribe(res=>{
      const user = res.find((a: any)=>{
        return a.taikhoan === this.loginForm.value.taikhoan && a.matkhau === this.loginForm.value.matkhau
      });
      if(user){
        alert("Đăng nhập thành công");
        this.loginForm.reset();
        this.router.navigate(['ad/dashboard/'])
      }else{
        alert("Không tìm thấy tài khoản");
      }
    })
  }

  checkscc(){
    this.http.get<any>("http://localhost:8080/admin/all").subscribe(res=>{
      const user = res.find((a: any)=>{
        return a.taikhoan === this.checksccForm.value.taikhoan && a.scc === this.checksccForm.value.scc
      });
      if(user){
        alert("Lấy mật khẩu thành công");
        this.checksccForm.reset();
        this.router.navigate(['login'])
      }else{
        alert("Sai tài khoản hoặc số căn cước");
      }
    })
  }
  
  public getAccadmin(): void {
    this.httpService.getAdmin().subscribe(
      (response: Accadmin[]) => {
        this.accadmin = response;
        console.log(this.accadmin);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateAdmin(accadmin: Accadmin): void {
    this.httpService.updateAdmin(accadmin).subscribe(
      (response: Accadmin) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(accadmin: Accadmin, mode: string): void {
    const container = document.getElementById("maincontainer");
    const button = document.createElement("button");
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    if (mode === "edit") {
      this.editAccadmin = accadmin;
      button.setAttribute("data-target", "#updateStudentModal");
    }
    container.appendChild(button);
    button.click();
  }
}
