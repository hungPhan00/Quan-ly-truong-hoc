import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mess } from 'app/model/mess';
import { HttpService } from 'app/service/http.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public mess: Mess[];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }
    public onAddMess(addForm: NgForm): void {

    this.httpService.addMess(addForm.value).subscribe(
      (response: Mess) => {
        console.log(response);
        addForm.reset();
      });
      if(Response){
        alert("Gửi lời nhắn thành công");
      }else{
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      }
      
    
  }
  
}
