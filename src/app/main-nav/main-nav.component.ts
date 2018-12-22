import { Component, HostListener, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { zoomInSlideOutAnimation } from "./route-animations";

@Component({
  selector: "main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.scss"],
  animations: [zoomInSlideOutAnimation]
})
export class MainNavComponent implements OnInit {
  //Sets the menu links
  pages = [
    {
      routerLink: "/about",
      linkText: "About"
    },
    // {
    //   routerLink: "/projects",
    //   linkText: "Projects"
    // },
    // {
    //   routerLink: "/blog",
    //   linkText: "Blog"
    // },
    {
      routerLink: "/contact",
      linkText: "Contact"
    }
  ];

  //Method related to route transition animations. Returns a string value representing the state of the animation based on the custom data of the current active route
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  //If the width of screen is equals or greather than 1024px, the value of the property becomes true.
  isLaptop: boolean;

  //Checks the window width & sets the 'isLaptop' property value
  @HostListener("window:resize")
  onResize() {
    if (window.innerWidth < 1024) {
      this.isLaptop = false;
    } else {
      this.isLaptop = true;
    }
  }
  constructor() {}

  ngOnInit() {
    this.onResize();
  }
}
