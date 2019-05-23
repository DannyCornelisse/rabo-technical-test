import { Component, OnInit, Host } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { CsvParserService } from '../../services/csv-parser.service';
import { AppComponent } from 'src/app/app.component';
import { CsvData } from 'src/app/interfaces/issue-table';

@Component({
  selector: 'rabo-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  private dialogRef: MatDialogRef<UploadDialogComponent>;
  public parsedCsvData: CsvData;

  constructor(
    @Host() private parent: AppComponent,
    public dialog: MatDialog, // public for unit test purposes
    private csvParser: CsvParserService
  ) { }

  ngOnInit() {
  }

  closeDialog(val) {
    this.dialogRef.close(val);
  }

  parseCsvData(data: string): void {
    this.parsedCsvData = this.csvParser.parseFromString(data);
    if (this.parsedCsvData) {
      this.parent.tableData = this.parsedCsvData;
    } else {
      console.log('Data could not be parsed');
    }
  }

  openFileDialog() {
    this.dialogRef = this.dialog.open(UploadDialogComponent, {
      data: ''
    });
    this.dialogRef.afterClosed().subscribe(
      (data: string) => {
        if (data) {
          this.parseCsvData(data);
        } else {
          console.log('This file doesn\'t contain any data');
        }
      }
    )
  }

}
