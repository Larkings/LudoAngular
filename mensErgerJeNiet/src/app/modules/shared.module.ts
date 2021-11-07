import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { HomeComponent } from '../shared/components/home/home.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ColumnOneComponent } from '../shared/layouts/column-one/column-one.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {GamesetupComponent} from "../shared/components/gamesetup/gamesetup.component";
import {DiceComponent} from "../shared/components/dice/dice.component";
import {Test2dComponent} from "../shared/components/test2d/test2d.component";
import { BoardComponent} from "../shared/components/board/board.component";


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    ColumnOneComponent,
    BoardComponent
    GamesetupComponent,
    DiceComponent,
    Test2dComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
     ColumnOneComponent
  ]
})
export class SharedModule { }
