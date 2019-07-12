import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Module for router configuration
import { RouterModule } from '@angular/router';

// Components
import { BlogComponent } from './blog.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  declarations: [BlogComponent, BlogPostsComponent, BlogPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogComponent,
        data: { animation: 'blogPage' }
      }
    ])
  ]
})
export class BlogModule {}
