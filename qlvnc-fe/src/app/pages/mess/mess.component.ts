import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Mess } from 'app/model/mess';
import { HttpService } from 'app/service/http.service';

@Component({
  selector: 'mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.scss']
})
export class MessComponent implements OnInit {
  public mess: Mess[];
  public editMess: Mess;
  public deleteMesss: Mess;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getMess();
  }
  public getMess(): void {
    this.httpService.getMess().subscribe(
      (response: Mess[]) => {
        this.mess = response;
        console.log(this.mess);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateMess(mess: Mess): void {
    this.httpService.updateMess(mess).subscribe(
      (response: Mess) => {
        console.log(response);
        this.getMess();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteMess(messId: number): void {
    this.httpService.deleteMess(messId).subscribe(
      (response: void) => {
        console.log(response);
        this.getMess();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModal(mess: Mess, mode: string): void {
    const container = document.getElementById("maincontainer");
    const button = document.createElement("button");
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    if (mode === "add") {
      button.setAttribute("data-target", "#addStudentModal");
    }
    if (mode === "edit") {
      this.editMess = mess;
      button.setAttribute("data-target", "#updateStudentModal");
    }
    if (mode === "delete") {
      this.deleteMesss = mess;
      button.setAttribute("data-target", "#deleteStudentModal");
    }
    container.appendChild(button);
    button.click();
  }
}
