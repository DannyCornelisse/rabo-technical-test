import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IssueTable, CsvData } from 'src/app/interfaces/issue-table';

@Component({
  selector: 'rabo-issue-table',
  templateUrl: './issue-table.component.html',
  styleUrls: ['./issue-table.component.scss']
})
export class IssueTableComponent implements OnInit, OnChanges {
  @Input() tableData: CsvData;
  table: IssueTable;
  minIssueCount: number;

  constructor() { }

  private parseTable (tableData: CsvData) {
    const tmpTableData = [...tableData]; // make copy
    const headings: string[] = tmpTableData.shift();
    this.table = {
      headings,
      people: [...tmpTableData]
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tableData.currentValue) {
      this.tableData = changes.tableData.currentValue;
      this.parseTable(this.tableData);
    }
  }

  ngOnInit() {

  }

}
