import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module for router configuration
import { RouterModule } from '@angular/router';

// Components
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent,
        data: { animation: 'contactPage' }
      }
    ])
  ]
})
export class ContactModule {}
