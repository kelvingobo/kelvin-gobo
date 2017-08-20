import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './my-material.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
