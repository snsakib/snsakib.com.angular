import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateComponent } from './certificate/certificate.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [CertificateComponent],
  imports: [CommonModule, CertificatesRoutingModule, PdfViewerModule]
})
export class CertificatesModule {}
