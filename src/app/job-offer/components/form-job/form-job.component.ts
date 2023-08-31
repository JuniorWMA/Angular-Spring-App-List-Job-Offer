import { Component, OnInit } from '@angular/core';
import { JobOffer } from '../model/JobOffer';
import { JobOfferService } from '../service/job-offer.service';

@Component({
  selector: 'app-form-job',
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.css']
})
export class FormJobComponent implements OnInit {

  jobOffer: JobOffer = {
    companyName: '',
    jobTitle: '',
    description: '',
    location: '',
    salary: 0,
    urlJobOffer: '',
    date: new Date()
  }

  constructor(private service: JobOfferService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createJobOffer() {
    this.service.createJob(this.jobOffer).subscribe(
      obj => { this.jobOffer = obj; }
    );
  }

}
