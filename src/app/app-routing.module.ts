import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMarketFormComponent } from './form-components/add-market-form/add-market-form.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
