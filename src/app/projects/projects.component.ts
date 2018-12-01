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
      projectTitle: "Project 1",
      category: "Website",
      liveDemoLink: "#",
      imagePath: "../../assets/images/profile picture 400.jpg",
      alt: "thumbnail image"
    },
    {
      projectTitle: "Project 2",
      category: "App",
      liveDemoLink: "#",
      imagePath: "../../assets/images/profile picture 400.jpg",
      alt: "thumbnail image"
    },
    {
      projectTitle: "Project 3",
      category: "Website",
      liveDemoLink: "#",
      imagePath: "../../assets/images/profile picture 400.jpg",
      alt: "thumbnail image"
    },
    {
      projectTitle: "Project 4",
      category: "Data Visualization",
      liveDemoLink: "#",
      imagePath: "../../assets/images/profile picture 400.jpg",
      alt: "thumbnail image"
    },
    {
      projectTitle: "Project 5",
      category: "Website",
      liveDemoLink: "#",
      imagePath: "../../assets/images/profile picture 400.jpg",
      alt: "thumbnail image"
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
