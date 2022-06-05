import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { ListModule } from '../shared-content/list/list.module';
import { ContentModule } from '../shared-content/content/content.module';
import { SuperAdminComponent } from './super-admin.component';


@NgModule({
  declarations: [SuperAdminComponent],
  imports: [
    CommonModule,
    ListModule,
    ContentModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
