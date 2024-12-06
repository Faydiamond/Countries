
export interface ICountry  {
    //mapeo mi respuesta de mi api
    name?: {
      common?: string;
      official?: string;
      nativeName?: { 
        [languageCode: string]: {
          official: string;
          common: string;
        };
      };
    };
    tld?: string[];
    cca2?: string;
    ccn3?: string;
    cca3?: string;
    cioc?: string;
    independent?: boolean;
    status?: string;
    unMember: boolean;
    currencies?: { [currencyCode: string]: { name: string; symbol: string } };
    idd?: { root: string; suffixes: string[] };
    capital?: string[];
    altSpellings?: string[];
    region?: string;
    subregion?: string;
    languages?: { [languageCode: string]: string };
    translations?: { [languageCode: string]: { official: string; common: string } };
    latlng?: number[];
    landlocked?: boolean;
    borders?: string[];
    area?: number;
    demonyms?: {
      eng: { f: string; m: string }; 
    };
    flag?: string;
    maps: { googleMaps: string; openStreetMaps: string };
    population: number;
    gini?: { [year: string]: number }; 
    fifa?: string;
    car?: { signs: string[]; side: string };
    timezones?: string[];
    continents?: string[];
    flags?: { png: string; svg: string; alt: string };
    coatOfArms?: { png: string; svg: string };
    startOfWeek?: string;
    capitalInfo?: { latlng: number[] };
  }


/*
    export class Country {
      currencies: {
        COP: {
          name: string;
          symbol: string;
        };
      };
      name: {
        common: string;
        official: string;
      };
      region: string;
      area: number;
      capital: string[];
    
      // Constructor para inicializar la clase con valores predeterminados o valores proporcionados
      constructor(
        currencies: { COP: { name: string; symbol: string } },
        name: { common: string; official: string },
        region: string,
        area: number,
        capital: string[]
      ) {
        this.currencies = currencies;
        this.name = name;
        this.region = region;
        this.area = area;
        this.capital = capital;
      }
    
      
    }
    */