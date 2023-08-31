import { Component, Input } from '@angular/core';
import { JobOffer } from '../model/JobOffer';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css']
})
export class JobOfferComponent {
  @Input() jobOffer: JobOffer = {
    companyName: 'Coca Cola',
    jobTitle: 'Desenvolvedor',
    description: 'Desenvolvedor',
    location: 'São Paulo',
    salary: 1000,
    urlJobOffer: 'www.coca.com',
    date: new Date()
  }

  constructor() { };

}
