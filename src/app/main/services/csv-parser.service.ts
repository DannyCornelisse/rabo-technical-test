import { Injectable } from '@angular/core';
import { Papa, PapaParseConfig } from 'ngx-papaparse';
import { CsvData } from 'src/app/interfaces/issue-table';

@Injectable({
  providedIn: 'root'
})
export class CsvParserService {

  constructor(private csvParser: Papa) { }

  public parseFromString(csvData: string): CsvData {
    const config: PapaParseConfig = {
      complete: (results, file) => {
        console.log('Parsed: ', results, file);
      },
      error: (e: any) => {
        console.log(e);
      }
    };
    return this.csvParser.parse(csvData, config).data;
  }
}
