import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostsComponent } from './blog-posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogPostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogPostsComponent,
        data: {animation: 'blogPostsComponent'}
      }
    ])
  ]
})
export class BlogPostsModule { }
