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
      title: 'Agency Website',
      category: 'Website',
      tags: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Angular'],
      liveDemo: '#',
      caseStudy: '#',
      imgPath: 'http://placeimg.com/560/320/nature/grayscale',
      imgAlt: 'Screenshot of the project'
    },
    {
      title: 'project Title 2',
      category: 'Website',
      tags: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Angular'],
      liveDemo: 'https://www.snsakib.com/uni',
      caseStudy: '#',
      imgPath: 'http://placeimg.com/560/320/arch/grayscale',
      imgAlt: 'Screenshot of the project'
    },
    {
      title: 'Project Title 3',
      category: 'Website',
      tags: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Angular'],
      liveDemo: '#',
      caseStudy: '#',
      imgPath: 'http://placeimg.com/560/320/tech/grayscale',
      imgAlt: 'Screenshot of the project'
    }
  ];
  slideIndex = 1;
  slides = document.getElementsByClassName('mySlides');

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    for (let i = 0; i < this.slides.length; i++) {
      (<HTMLElement>this.slides[i]).style.display = 'none';
    }
    (<HTMLElement>this.slides[this.slideIndex - 1]).style.display = 'block';
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  constructor() {}
}
