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
import { ArchivesCardComponent } from './archivesCard.component';
import { BulbaCastLayoutComponent } from './card/bulbacast.-layout.component';
import { BulbacastCardComponent } from './bulbacastCard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

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
    ArchivesCardComponent,
    BulbaCastLayoutComponent,
    BulbacastCardComponent,
    UserInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
