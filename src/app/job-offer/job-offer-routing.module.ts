import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJobComponent } from './components/list-job/list-job.component';
import { FormJobComponent } from './components/form-job/form-job.component';

const routes: Routes = [
  { path: "", component:ListJobComponent},
  { path: "list", component:ListJobComponent},
  { path: "form", component:FormJobComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOfferRoutingModule { }
