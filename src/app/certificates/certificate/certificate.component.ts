import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  courseName: string;
  pdfSrc: string;

  constructor(private route: ActivatedRoute) {}

  onError(e: CustomEvent) {
    console.log('error', e);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.courseName = params.get('course');
      this.pdfSrc = `assets/certificates/${this.courseName}.pdf`;
    });
  }
}
