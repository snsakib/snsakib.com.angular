import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'aboutPage' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'projectsPage' }
  },
  { path: 'blog', component: BlogComponent, data: { animation: 'blogPage' } },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contactPage' }
  },
  { path: '', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
