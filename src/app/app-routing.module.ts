import { NgModule } from '@angular/core';

// Modules for routing configuration
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: '', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
