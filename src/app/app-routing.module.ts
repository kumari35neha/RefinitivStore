import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionComponent } from './fashion/fashion.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {
    path:'fashion', component:FashionComponent
  },
  {
    path:'mobile', component:MobileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
