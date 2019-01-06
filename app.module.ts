import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorDirective } from './color.directive';

import { AppComponent } from './app.component';
import { ZoomerDirective } from './zoomer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    ZoomerDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
