import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorksComponent} from './works.component';
import { WorksgridComponent } from './worksgrid/worksgrid.component';
import { WorksgridtextComponent} from "./worksgridtext/worksgridtext.component";

const worksRoutes: Routes=[

    {
        path:'',
        component:WorksComponent,
    
        
          children:[
                  {
                path: "worksgrid", component: WorksgridComponent
            },
            {
                path: "worksgridtext", component: WorksgridtextComponent
            }
        ]
    
    }
]
    
@NgModule({
    imports: [RouterModule.forChild(worksRoutes)],
    exports:[ RouterModule]
})

export class  WorksRoutingModule {}
