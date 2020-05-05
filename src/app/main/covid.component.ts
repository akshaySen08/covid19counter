import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CovidApiService } from './covid.service';
import { Covid } from './covid.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  covidData: Covid;
  lastCheckedDate: string;
  lastCheckedTime: string;
  total: number = 0;
  totalRecovered: number = 0;
  totalDeaths: number = 0;

  @Output() lastChecked = new EventEmitter<string>();

  displayedColumnsCountry = ['Province', 'Country', 'Confirmed', 'Recovered', 'Deaths'];
  countrySearch: FormGroup;

  constructor(private covidService: CovidApiService) { }

  ngOnInit() {
    this.initForm();
    this.covidService.getDataByCountry('India').subscribe(
      (res: Response) => {
        this.covidData = res['data'].covid19Stats;
        this.lastCheckedDate = res['data'].lastChecked.split('T')[0];
        this.lastCheckedTime = res['data'].lastChecked.split('T')[1].split('.')[0];
        this.lastChecked.emit(this.lastCheckedDate + " " + this.lastCheckedTime);


        res['data'].covid19Stats.map((cities) => {
          this.total += cities.confirmed;
          this.totalRecovered += cities.recovered;
          this.totalDeaths += cities.deaths;
        });
        console.log(this.total);

      }
    );
  }

  private initForm() {
    let country: String;
    this.countrySearch = new FormGroup({
      'countryName': new FormControl(country, Validators.required)
    });
  }

  public onSubmit() {
    let data = this.covidService.getDataByCountry(this.countrySearch.value.countryName).subscribe(
      (res: Response) => {
        this.covidData = res['data'].covid19Stats;
        this.lastCheckedDate = res['data'].lastChecked.split('T')[0];
        this.lastCheckedTime = res['data'].lastChecked.split('T')[1].split('.')[0];

        this.total = 0; this.totalDeaths = 0; this.totalRecovered = 0;

        res['data'].covid19Stats.map((cities) => {
          this.total += cities.confirmed;
          this.totalRecovered += cities.recovered;
          this.totalDeaths += cities.deaths;
        });
        console.log(this.total);
      }
    );
  }
}
