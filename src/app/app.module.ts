import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import{ButtonGroupComponent} from './buttonGroup/buttonGroup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonGroupComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
