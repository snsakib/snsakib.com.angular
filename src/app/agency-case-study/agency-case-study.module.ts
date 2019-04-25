import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyCaseStudyComponent } from './agency-case-study.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AgencyCaseStudyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AgencyCaseStudyComponent,
        data: { animation: 'caseStudyPage' }
      }
    ])
  ]
})
export class AgencyCaseStudyModule {}
