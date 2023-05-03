import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // registering global routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
