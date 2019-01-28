import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    {
      imgPath: '../../assets/images/mail.svg',
      alt: 'mail icon',
      href: 'mailto:contact@snsakib.com',
      linkText: 'contact@snsakib.com'
    },
    {
      imgPath: '../../assets/images/linkedin.svg',
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
