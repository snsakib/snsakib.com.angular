import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  //Sets the column number of the material grid list depending on the width of the screen
  colNum: number;
  el = document.querySelectorAll(".mat-grid-tile .mat-figure");

  //TODO
  //Move this data to firebase
  contacts = [
    {
      imgPath: "../../assets/images/mail.svg",
      alt: "mail icon",
      href: "mailto:contact@snsakib.com",
      linkText: "contact@snsakib.com"
    },
    {
      imgPath: "../../assets/images/linkedin.svg",
      alt: "linkedin icon",
      href: "https://www.linkedin.com/in/s-n-sakib",
      linkText: "/in/s-n-sakib"
    },
    {
      imgPath: "../../assets/images/twitter.svg",
      alt: "twitter icon",
      href: "https://www.twitter.com/syed_n_sakib",
      linkText: "@syed_n_sakib"
    },
    {
      imgPath: "../../assets/images/github.svg",
      alt: "github icon",
      href: "https://github.com/snsakib",
      linkText: "/snsakib"
    }
  ];

  //Checks the screen width & sets the property value of 'colNum'
  @HostListener("window:resize")
  onWindowResize() {
    if (window.innerWidth <= 500) {
      this.colNum = 1;
    } else {
      this.colNum = 4;
    }
  }

  constructor() {}

  ngOnInit() {
    this.onWindowResize();
    // this.renderer.removeClass(this.el, "mat-figure");
  }
}
