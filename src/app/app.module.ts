import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CardModule} from './components/card/card.module';
import {DraggableModule} from './core/draggable/draggable.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    DraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
