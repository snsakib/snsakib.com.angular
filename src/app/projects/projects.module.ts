import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module for router configuration
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

// Components
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent,
        data: { animation: 'projectsPage' }
      }
    ])
  ]
})
export class ProjectsModule {}
