export class Covid {
  public provience: string;
  public country: string;
  public lastUpdated: string;
  public confirmed: number;
  public deaths: number;
  public recovered: number;

  constructor(provience: string, country: string, lastUpdated: string, confirmed: number, deaths: number, recovered: number) {
    this.provience = provience;
    this.country = country;
    this.lastUpdated = lastUpdated;
    this.confirmed = confirmed;
    this.deaths = deaths;
    this.recovered = recovered;
  }
}
