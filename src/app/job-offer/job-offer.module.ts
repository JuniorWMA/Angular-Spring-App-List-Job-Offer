import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOfferRoutingModule } from './job-offer-routing.module';
import { FormJobComponent } from './components/form-job/form-job.component';
import { ListJobComponent } from './components/list-job/list-job.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormJobComponent,
    ListJobComponent,
    JobOfferComponent
  ],
  imports: [
    CommonModule,
    JobOfferRoutingModule,
    FormsModule,
    HttpClientModule


  ]
})
export class JobOfferModule { }
