import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogPanelComponent } from './components/blog-panel/blog-panel.component';


@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogPanelComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
