import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { TabbarComponent } from './nav/tabbar/tabbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RenderComponent } from './pdfview/render/render.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabbarComponent,
    RenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
