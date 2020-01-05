import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,    
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([//order matters      
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },//default route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },//wildcard route
    ]),
    ProductModule
    // ({useHash:true})
  ],
  bootstrap: [AppComponent] // defines the component that is the starting point of the application
                            // the component loaded when the application is launched
                            // every application must bootstrap at least one component, the root application component
})
export class AppModule { }
