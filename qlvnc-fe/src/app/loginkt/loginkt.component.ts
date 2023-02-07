import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'loginkt',
  templateUrl: './loginkt.component.html',
  styleUrls: ['./loginkt.component.scss']
})
export class LoginktComponent implements OnInit {
  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      taikhoan:['',Validators.required],
      matkhau:['',Validators.required]
  })
  }

  login(){
    this.http.get<any>("http://localhost:8080/accketoan/all").subscribe(res=>{
      const user = res.find((a: any)=>{
        return a.taikhoan === this.loginForm.value.taikhoan && a.matkhau === this.loginForm.value.matkhau
      });
      if(user){
        alert("Đăng nhập thành công");
        this.loginForm.reset();
        this.router.navigate(['ketoan'])
      }else{
        alert("Không tìm thấy tài khoản");
      }
    })
  }

}
