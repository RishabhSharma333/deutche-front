import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListModule } from '../shared-content/list/list.module';
import { ContentModule } from '../shared-content/content/content.module';
import { AddNewComponent } from './add-new/add-new.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AddNewComponent,
  ],
  imports: [
    CommonModule,
    ListModule,
    FormsModule,
    ContentModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
