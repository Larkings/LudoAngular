import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from "../shared/components/board/board.component";
import {HomeComponent} from "../shared/components/home/home.component"

const routes: Routes = [
  {path: 'playgame', component: BoardComponent},
  {path: 'home', component: HomeComponent},
  // {path: 'settings', component: BoardComponent},
  // {path: 'about', component: BoardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
