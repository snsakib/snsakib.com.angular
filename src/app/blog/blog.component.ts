import { Component } from "@angular/core";

@Component({
  selector: "blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent {
  //TODO
  //Move this data to 
  postFilterOptions = ['Angular', 'JavaScript', 'TypeScript'];

  posts = [
    {
      title: "Angular Reactive Form",
      date: "11 Nov, 2018",
      timeToRead: "5",
      routerLink: "/projects"
    },
    {
      title: "Project 2",
      date: "11 Nov, 2018",
      timeToRead: "5",
      routerLink: "/projects"
    },
    {
      title: "Project 3",
      date: "11 Nov, 2018",
      timeToRead: "5",
      routerLink: "/projects"
    },
    {
      title: "Project 4",
      date: "11 Nov, 2018",
      timeToRead: "5",
      routerLink: "/projects"
    },
    {
      title: "Project 5",
      date: "11 Nov, 2018",
      timeToRead: "5",
      routerLink: "/projects"
    }
  ];

  constructor() {}
}
