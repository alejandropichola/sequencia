import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SequenceComponent } from './sequence/sequence.component';
import { PageSequenceComponent } from './page-sequence/page-sequence.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SequenceComponent,
    PageSequenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
