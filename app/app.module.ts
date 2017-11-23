import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';
import { ProductListComponent} from './products/product-list.component';

@NgModule({
   imports: [ BrowserModule ],
   declarations:[ AppComponent, AppComponent2, ProductListComponent ],
   bootstrap:[ AppComponent, AppComponent2, ProductListComponent ]
})


export class AppModule {
}