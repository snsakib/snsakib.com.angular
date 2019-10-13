import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Module for router configuration
import { RouterModule } from '@angular/router';

// Components
import { BlogComponent } from './blog.component';

import { LoaderIconComponent } from '../loader-icon/loader-icon.component';

@NgModule({
  declarations: [BlogComponent, LoaderIconComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogComponent,
        data: {animation: 'blogComponent'}
      }
    ])
  ]
})
export class BlogModule {}
