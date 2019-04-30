import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
// import { WorksgridComponent } from './works/worksgrid/worksgrid.component';
// import { WorksgridtextComponent } from './works/worksgridtext/worksgridtext.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // WorksComponent,
    ServicesComponent,
    BlogComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
