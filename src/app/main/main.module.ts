import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { MaterialModule } from '../material/material.module';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PapaParseModule } from 'ngx-papaparse';
import { IssueTableComponent } from './components/issue-table/issue-table.component';

@NgModule({
  declarations: [UploadFileComponent, UploadDialogComponent, IssueTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PapaParseModule
  ],
  exports: [ UploadFileComponent, IssueTableComponent ],
  entryComponents: [ UploadDialogComponent ]
})
export class MainModule { }
