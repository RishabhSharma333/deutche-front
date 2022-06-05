import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ContentModule } from '../shared-content/content/content.module';
import { ListModule } from '../shared-content/list/list.module';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    ContentModule,
    ListModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
