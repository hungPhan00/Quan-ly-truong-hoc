import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Accteacher } from 'app/model/accteacher';
import { HttpService } from 'app/service/http.service';

@Component({
  selector: 'accteacher',
  templateUrl: './accteacher.component.html',
  styleUrls: ['./accteacher.component.scss']
})
export class AccteacherComponent implements OnInit {
  public accteacher: Accteacher[];
  public editAccteacher: Accteacher;
  public deleteAccteachers: Accteacher;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAccteacher();
  }

  public getAccteacher(): void {
    this.httpService.getAccteacher().subscribe(
      (response: Accteacher[]) => {
        this.accteacher = response;
        console.log(this.accteacher);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddAccteacher(addForm: NgForm): void {
    document.getElementById("add-student-form1").click();
    this.httpService.addAccteacher(addForm.value).subscribe(
      (response: Accteacher) => {
        console.log(response);
        this.getAccteacher();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateAccteacher(accteacher: Accteacher): void {
    this.httpService.updateAccteacher(accteacher).subscribe(
      (response: Accteacher) => {
        console.log(response);
        this.getAccteacher();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteAccteacher(accteacherId: number): void {
    this.httpService.deleteAccteacher(accteacherId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAccteacher();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(accteacher: Accteacher, mode: string): void {
    const container = document.getElementById("maincontainer1");
    const button = document.createElement("button");
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    if (mode === "add") {
      button.setAttribute("data-target", "#addStudentModal1");
    }
    if (mode === "edit") {
      this.editAccteacher = accteacher;
      button.setAttribute("data-target", "#updateStudentModal1");
    }
    if (mode === "delete") {
      this.deleteAccteachers = accteacher;
      button.setAttribute("data-target", "#deleteStudentModal1");
    }
    container.appendChild(button);
    button.click();
  }
}
