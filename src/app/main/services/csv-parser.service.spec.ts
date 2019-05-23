import { TestBed } from '@angular/core/testing';

import { CsvParserService } from './csv-parser.service';
import { Papa } from 'ngx-papaparse';

describe('CsvParserService', () => {
  let papa: Papa;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: CsvParserService,
        useValue: new CsvParserService(papa)
      }
    ]
  }));

  it('should be created', () => {
    const service: CsvParserService = TestBed.get(CsvParserService);
    expect(service).toBeTruthy();
  });
});
