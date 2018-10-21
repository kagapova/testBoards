import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from './board.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '', component: BoardComponent
  }
  ];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BoardRoutingModule {}
