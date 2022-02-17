import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewSourceLayoutComponent } from './buttonGroup/view-source-layout.component';
import { HomeLayoutComponent } from './buttonGroup/home-layout.component';
import { DiscussionLayoutComponent } from './buttonGroup/discussion-layout.component';
import { HistoryLayoutComponent } from './buttonGroup/history-layout.component';
import { ToolsLayoutComponent } from './buttonGroup/tools-layout.component';

const routes: Routes = [
  {path: '', component:HomeLayoutComponent},
  {path: 'view-source', component: ViewSourceLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'discussion', component: DiscussionLayoutComponent},
  {path: 'history', component: HistoryLayoutComponent},
  {path: 'tools', component:ToolsLayoutComponent}
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