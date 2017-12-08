import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from '../about-us/about-us.component';
import { Route } from '@angular/compiler/src/core';
import { StudentComponent } from '../student/student.component';

const routes: Routes = [
  { path: 'aboutus', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
