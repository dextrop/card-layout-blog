import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardlayoutComponent } from './cardlayout/cardlayout.component';
import { HttpClientModule } from '@angular/common/http';
import { SamplelayoutComponent } from './samplelayout/samplelayout.component';

@NgModule({
  declarations: [
    AppComponent,
    CardlayoutComponent,
    SamplelayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
