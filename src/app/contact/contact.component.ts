import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    {
      imgPath: '../../assets/images/logo-defs.svg#icon-mail',
      alt: 'mail icon',
      href: 'mailto:hello@snsakib.com',
      linkText: 'hello@snsakib.com'
    },
    {
      imgPath: '../../assets/images/logo-defs.svg#icon-linkedin-square',
      alt: 'linkedin icon',
      href: 'https://www.linkedin.com/in/s-n-sakib',
      linkText: '/in/s-n-sakib'
    },
    {
      imgPath: '../../assets/images/twitter.svg',
      alt: 'twitter icon',
      href: 'https://www.twitter.com/syed_n_sakib',
      linkText: '@syed_n_sakib'
    },
    {
      imgPath: '../../assets/images/github.svg',
      alt: 'github icon',
      href: 'https://github.com/snsakib',
      linkText: '/snsakib'
    }
  ];

  constructor() {}
}
