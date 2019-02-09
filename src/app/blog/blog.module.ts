import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module for router configuration
import { RouterModule } from '@angular/router';

// Components
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
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
