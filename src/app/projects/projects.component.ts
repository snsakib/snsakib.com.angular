import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  //list of projects
  projects = [
    {
      projectTitle: 'Uni',
      description: 'Website Template',
      category: 'Website',
      tags: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Angular'],
      liveDemoLink: 'https://snsakib.github.io/uni/',
      imagePath: 'assets/images/projects/uni.jpg',
      alt: 'Screenshot of the project'
    }
  ];

  constructor() {}
}
