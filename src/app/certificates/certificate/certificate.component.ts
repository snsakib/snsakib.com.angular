import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  courseName: string;
  pdfSrc: string;

  constructor() {}

  ngOnInit() {
    this.courseName = 'angular-cli.pdf';
    this.pdfSrc = `assets/certificates/pluralsight/${this.courseName}`;
  }
}
