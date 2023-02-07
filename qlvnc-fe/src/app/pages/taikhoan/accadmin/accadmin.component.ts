import { Accadmin } from './../../../model/accadmin';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/service/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'accadmin',
  templateUrl: './accadmin.component.html',
  styleUrls: ['./accadmin.component.scss']
})
export class AccadminComponent implements OnInit {
  public accadmin: Accadmin[];
  public editAccadmin: Accadmin;
  public deleteAccadmins: Accadmin;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAccadmin();
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

  public onAddAccadmin(addForm: NgForm): void {
    document.getElementById("add-student-form2").click();
    this.httpService.addAdmin(addForm.value).subscribe(
      (response: Accadmin) => {
        console.log(response);
        this.getAccadmin();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateAccadmin(accadmin: Accadmin): void {
    this.httpService.updateAdmin(accadmin).subscribe(
      (response: Accadmin) => {
        console.log(response);
        this.getAccadmin();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteAccadmin(accadminId: number): void {
    this.httpService.deleteAdmin(accadminId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAccadmin();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(accadmin: Accadmin, mode: string): void {
    const container = document.getElementById("maincontainer2");
    const button = document.createElement("button");
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    if (mode === "add") {
      button.setAttribute("data-target", "#addStudentModal2");
    }
    if (mode === "edit") {
      this.editAccadmin = accadmin;
      button.setAttribute("data-target", "#updateStudentModal2");
    }
    if (mode === "delete") {
      this.deleteAccadmins = accadmin;
      button.setAttribute("data-target", "#deleteStudentModal2");
    }
    container.appendChild(button);
    button.click();
  }
}
