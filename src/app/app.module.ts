import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

// Feature Modules
import { AngularMaterialModule } from './angular-material.module';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [AppComponent, MainNavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialModule,
    AboutModule,
    BlogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
