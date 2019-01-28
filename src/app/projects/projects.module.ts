import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module for router configuration
import { RouterModule } from '@angular/router';

// Components
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'projects',
        component: ProjectsComponent,
        data: { animation: 'projectsPage' }
      }
    ])
  ]
})
export class ProjectsModule {}
