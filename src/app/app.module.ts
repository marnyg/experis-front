import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCOmpComponent } from './components/test-comp/test-comp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { FindOrderComponent } from './components/find-order/find-order.component';
import { HomeComponent } from './components/home/home.component';
import { NewAddressComponent } from './components/new-address/new-address.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { Slide1Component } from './components/slides/slide1/slide1.component';
import { Slide2Component } from './components/slides/slide2/slide2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCOmpComponent,
    NavbarComponent,
    NewOrderComponent,
    FindOrderComponent,
    HomeComponent,
    NewAddressComponent,
    OrderFormComponent,
    Slide1Component,
    Slide2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
