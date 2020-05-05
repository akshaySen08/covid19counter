import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CovidApiService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;
  headersForApiUrl = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
    'x-rapidapi-key' : 'fabb97f09amshc53b4bee5f6a89ap16b05bjsn0e9c8cfa7f2b'
  });

  getDataByCountry(countryName: string) {
    return this.http.get(`${this.apiUrl}?country=${countryName.charAt(0).toUpperCase() + countryName.slice(1)}`, { headers: this.headersForApiUrl });
  }
}
