import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewSourceLayoutComponent } from './buttonGroup/view-source-layout.component';
import { HomeLayoutComponent } from './buttonGroup/home-layout.component';
import { DiscussionLayoutComponent } from './buttonGroup/discussion-layout.component';
import { HistoryLayoutComponent } from './buttonGroup/history-layout.component';
import { ToolsLayoutComponent } from './buttonGroup/tools-layout.component';
import { ArchivesLayoutComponent } from './card/archives-layout.component';
import { BulbaCastLayoutComponent } from './card/bulbacast.-layout.component';
import { AddBulbComponent } from './card/add-bulb/add-bulb.component';

const routes: Routes = [
  {path: '', component:HomeLayoutComponent},
  {path: 'view-source', component: ViewSourceLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'discussion', component: DiscussionLayoutComponent},
  {path: 'history', component: HistoryLayoutComponent},
  {path: 'tools', component:ToolsLayoutComponent},
  {path: 'archives', component:ArchivesLayoutComponent},
  {path: 'bulbacast', component:BulbaCastLayoutComponent},
  {path: 'admin', component: AddBulbComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
