import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module for router configuration
import { RouterModule } from '@angular/router';

// Components
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
        data: { animation: 'aboutPage' }
      }
    ])
  ]
})
export class AboutModule {}
