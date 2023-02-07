import { Accteacher } from './../../model/accteacher';
import { Accketoan } from './../../model/accketoan';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/service/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'taikhoan',
  templateUrl: './taikhoan.component.html',
  styleUrls: ['./taikhoan.component.scss']
})
export class TaikhoanComponent implements OnInit {
  public accketoan: Accketoan[];
  public editAccketoan: Accketoan;
  public deleteAccketoans: Accketoan;
  
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAccketoan();
  }
  public getAccketoan(): void {
    this.httpService.getAccketoan().subscribe(
      (response: Accketoan[]) => {
        this.accketoan = response;
        console.log(this.accketoan);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddAccketoan(addForm: NgForm): void {
    document.getElementById("add-student-form").click();
    this.httpService.addAccketoan(addForm.value).subscribe(
      (response: Accketoan) => {
        console.log(response);
        this.getAccketoan();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateAccketoan(accketoan: Accketoan): void {
    this.httpService.updateAccketoan(accketoan).subscribe(
      (response: Accketoan) => {
        console.log(response);
        this.getAccketoan();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteAccketoan(accketoanId: number): void {
    this.httpService.deleteAccketoan(accketoanId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAccketoan();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(accketoan: Accketoan, mode: string): void {
    const container = document.getElementById("maincontainer");
    const button = document.createElement("button");
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    if (mode === "add") {
      button.setAttribute("data-target", "#addStudentModal");
    }
    if (mode === "edit") {
      this.editAccketoan = accketoan;
      button.setAttribute("data-target", "#updateStudentModal");
    }
    if (mode === "delete") {
      this.deleteAccketoans = accketoan;
      button.setAttribute("data-target", "#deleteStudentModal");
    }
    container.appendChild(button);
    button.click();
  }

}
