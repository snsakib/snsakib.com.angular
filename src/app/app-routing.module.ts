import { NgModule } from '@angular/core';

// Modules for routing configuration
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'projects/agency/case-study',
    loadChildren:
      './case-studies/agency-case-study/agency-case-study.module#AgencyCaseStudyModule'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: 'certificates',
    loadChildren: './certificates/certificates.module#CertificatesModule'
  },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: '', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
