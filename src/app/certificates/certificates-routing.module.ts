import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateComponent,
    data: { animation: 'certificatesPage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatesRoutingModule {}
