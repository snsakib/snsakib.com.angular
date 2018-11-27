import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  openSnackBar() {
    this.snackBar.open("Opening e-mail app. Please wait!", "", {
      duration: 2000,
      horizontalPosition: "end"
    });
  }

  constructor(public snackBar: MatSnackBar) {}
}
