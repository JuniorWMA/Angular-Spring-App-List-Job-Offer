import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { JobOffer } from '../model/JobOffer';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private readonly API = 'http://localhost:8080/joboffer';

  constructor(private http: HttpClient) { }

  findAll(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(this.API+'/list');
  }

  createJob(job: JobOffer): Observable<JobOffer> {
    return this.http.post<JobOffer>(this.API+"/create", job);
  }
}
