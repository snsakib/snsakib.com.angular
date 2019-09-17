import { NgModule } from '@angular/core';

// Modules for routing configuration
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  // {
  //   path: 'projects/agency/case-study',
  //   loadChildren:
  //     () => import('./case-studies/agency-case-study/agency-case-study.module').then(m => m.AgencyCaseStudyModule)
  // },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {
    path: 'certificates/:course',
    loadChildren: () => import('./certificates/certificates.module').then(m => m.CertificatesModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
