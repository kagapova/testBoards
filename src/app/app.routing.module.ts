import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'board',
    loadChildren: './modules/board/board.module#BoardModule'
  },
  {
    path: 'user/:id',
    loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'board'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
