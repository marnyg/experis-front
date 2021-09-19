import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindOrderComponent } from './components/find-order/find-order.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
