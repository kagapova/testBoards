import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { RouterModule} from '@angular/router';
import {BoardRoutingModule} from './board.routing.module';
import {CardModule} from '../../components/card/card.module';
import {DraggableModule} from '../../core/draggable/draggable.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BoardRoutingModule,
    CardModule,
    DraggableModule
  ],
  declarations: [
    BoardComponent
  ]
})
export class BoardModule { }
