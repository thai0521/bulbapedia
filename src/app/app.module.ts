import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import{ButtonGroupComponent} from './buttonGroup/buttonGroup.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewSourceLayoutComponent } from './buttonGroup/view-source-layout.component';
import { HomeLayoutComponent } from './buttonGroup/home-layout.component';
import { DiscussionLayoutComponent } from './buttonGroup/discussion-layout.component';
import { HistoryLayoutComponent } from './buttonGroup/history-layout.component';
import { ToolsLayoutComponent } from './buttonGroup/tools-layout.component';
import { ArchivesLayoutComponent } from './card/archives-layout.component';
import { TitleCardComponent } from './titleCard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonGroupComponent,
    ViewSourceLayoutComponent,
    HomeLayoutComponent,
    DiscussionLayoutComponent,
    HistoryLayoutComponent,
    ToolsLayoutComponent,
    ArchivesLayoutComponent,
    TitleCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
