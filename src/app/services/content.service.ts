import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private http: HttpClient) { }

  getPeaceOfMindContent(): Observable<any> {
    return this.http.get('/assets/data/peaceofmind.json');
  }

  getPortfolioContent(): Observable<any> {
    return this.http.get('/assets/data/portfolio.json');
  }

  getProcessContent(): Observable<any> {
    return this.http.get('/assets/data/process.json');
  }

  getTuoConstructionContent(): Observable<any> {
    return this.http.get('/assets/data/tuoconstruction.json');
  }
}
