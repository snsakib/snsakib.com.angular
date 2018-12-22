import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {
  email: string = "contact@snsakib.com";

  //Shows alert when user clicks the email
  openSnackBar() {
    if (window.innerWidth >= 1024) {
      this.snackBar.open("Opening e-mail app. Please wait!", "", {
        duration: 2000,
        horizontalPosition: "end"
      });
    }
  }

  constructor(public snackBar: MatSnackBar) {}
}
