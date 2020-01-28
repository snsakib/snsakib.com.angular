import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { ContactComponent } from "./contact.component";
import { ContactRoutingModule } from "./contact-routing.module";

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule]
})
export class ContactModule {}
