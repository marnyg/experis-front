import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindOrderComponent } from './components/find-order/find-order.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { Slide1Component } from './components/slides/slide1/slide1.component';
import { Slide2Component } from './components/slides/slide2/slide2.component';
import { TestCOmpComponent } from './components/test-comp/test-comp.component';

const routes: Routes = [
  {
    path: 'home',
    component: TestCOmpComponent
  },
  {
    path: 'new-order',
    component: NewOrderComponent
  },
  {
    path: 'find-order',
    component: FindOrderComponent,
  },
  {
    path: 'slide1',
    component: Slide1Component,
  },
  {
    path: 'slide2',
    component: Slide2Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
