import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRoutingModule} from './user.routing.module';
import {CardModule} from '../../components/card/card.module';




@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    CardModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
