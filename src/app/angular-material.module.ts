import { NgModule } from '@angular/core';

// Angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatToolbarModule, MatSidenavModule, MatListModule],
  exports: [MatToolbarModule, MatSidenavModule, MatListModule]
})
export class AngularMaterialModule {}
