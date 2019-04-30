import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';

const approutes: Routes = [





  {
    path: 'works',
    loadChildren: './works/works.module#WorksModule'
      // Lazy Loading
    
  },
  

{
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'services',
  component:ServicesComponent  
},


{
  path: 'blog',
  component: BlogComponent,
  //canActivate:[AuthGuard]
 // canActivate: [AuthGuard]
},
{
  path: 'about',
  component: AboutComponent,
},
{
  path: 'shop',
  component: ShopComponent,
},
{
  path: 'contact',
  component:ContactComponent,
 // redirectTo: 'contact',
  //pathMatch:'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
