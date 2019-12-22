import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

// Modules for routing configuration
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'blog/posts/:category',
    loadChildren: () => import('./blog-posts/blog-posts.module').then(m => m.BlogPostsModule)
  },
  {
    path: 'blog/post/:postId',
    loadChildren: () => import('./blog-post/blog-post.module').then(m => m.BlogPostModule)
  },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {
    path: 'certificates/:course',
    loadChildren: () => import('./certificates/certificates.module').then(m => m.CertificatesModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
