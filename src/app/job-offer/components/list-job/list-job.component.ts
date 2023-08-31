import { Component, Input, OnInit } from '@angular/core';
import { JobOffer } from '../model/JobOffer';
import { JobOfferService } from '../service/job-offer.service';


@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  @Input() job: JobOffer = {
    id: 1,
    companyName: 'Coca Cola',
    jobTitle: 'Desenvolvedor',
    description: 'Desenvolvedor',
    location: 'São Paulo',
    salary: 1000,
    urlJobOffer: 'www.coca.com',
    date: new Date()
    
  }
  
  joboffers:JobOffer[] = [];

  constructor(private service: JobOfferService) { }


  ngOnInit(): void {
    this.listJobs();
  }

  listJobs(){
    this.service.findAll().subscribe(data => this.joboffers = data);
  }

}
