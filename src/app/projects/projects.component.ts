import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  //Sets the column number of the material grid list depending on the width of the screen
  colNum: number;

  //TODO
  //Move this data to firebase
  projects = [
    {
      projectTitle: "MENSUIT",
      category: "Website",
      tags: ["HTML5", "CSS3", "Sass", "Bootstrap", "Angular"],
      liveDemoLink: "/mensuit",
      imagePath: "../../assets/images/profile picture 400.jpg",
      alt: "Thumbnail image of MENSUIT project"
    }
  ];

  //Checks the screen width & sets the property value of 'colNum'
  @HostListener("window:resize")
  onWindowResize() {
    if (window.innerWidth <= 500) {
      this.colNum = 1;
    } else if (window.innerWidth > 500 && window.innerWidth < 920) {
      this.colNum = 2;
    } else {
      this.colNum = 3;
    }
  }

  constructor() {}

  ngOnInit() {
    this.onWindowResize();
  }
}
