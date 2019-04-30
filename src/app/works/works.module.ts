import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksRoutingModule} from './works-routing.module'
import {WorksComponent} from './works.component';
import { WorksgridComponent } from './worksgrid/worksgrid.component';
import { WorksgridtextComponent} from "./worksgridtext/worksgridtext.component";


@NgModule({
  declarations: [WorksComponent,WorksgridComponent,WorksgridtextComponent],
  imports: [
    CommonModule,
    WorksRoutingModule
  ],
  exports: [WorksComponent,WorksgridComponent,WorksgridtextComponent]
})
export class WorksModule { }
