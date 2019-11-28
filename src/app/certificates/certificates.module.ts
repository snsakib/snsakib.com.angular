import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateComponent } from './certificate/certificate.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoaderIconComponent } from '../loader-icon/loader-icon.component';

@NgModule({
  declarations: [CertificateComponent, LoaderIconComponent],
  imports: [CommonModule, CertificatesRoutingModule, PdfViewerModule]
})
export class CertificatesModule {}
