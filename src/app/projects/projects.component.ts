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
      title: 'Agency',
      category: 'Corporate website landing page',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus quos quidem saepe numquam maxime hic. Minus molestiae autem voluptatum, repellat delectus facere voluptatibus modi alias non? Quo reiciendis!',
      tags: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Angular'],
      liveDemo: 'https://www.snsakib.com/agency-landing-page',
      caseStudy: '#',
      imgPath: 'assets/images/projects/uni.jpg',
      imgAlt: 'Screenshot of the project'
    },
    {
      title: 'Agency',
      category: 'Corporate website landing page',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus quos quidem saepe numquam maxime hic. Minus molestiae autem voluptatum, repellat delectus facere voluptatibus modi alias non? Quo reiciendis!',
      tags: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Angular'],
      liveDemo: 'https://www.snsakib.com/agency-landing-page',
      caseStudy: '#',
      imgPath: 'assets/images/projects/uni.jpg',
      imgAlt: 'Screenshot of the project'
    },
    {
      title: 'Agency',
      category: 'Corporate website landing page',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus quos quidem saepe numquam maxime hic. Minus molestiae autem voluptatum, repellat delectus facere voluptatibus modi alias non? Quo reiciendis!',
      tags: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Angular'],
      liveDemo: 'https://www.snsakib.com/agency-landing-page',
      caseStudy: '#',
      imgPath: 'assets/images/projects/uni.jpg',
      imgAlt: 'Screenshot of the project'
    }
  ];

  ngAfterViewInit() {}

  constructor() {}
}
