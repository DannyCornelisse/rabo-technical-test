import { Component } from '@angular/core';
import { CsvData } from './interfaces/issue-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tableData: CsvData;
}
