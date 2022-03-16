import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UserPanelComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
