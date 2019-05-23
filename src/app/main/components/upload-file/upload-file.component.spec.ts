import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';

import { UploadFileComponent } from './upload-file.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from 'src/app/app.component';
import { IssueTableComponent } from '../issue-table/issue-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { CsvParserService } from '../../services/csv-parser.service';
import { Papa } from 'ngx-papaparse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { MainModule } from '../../main.module';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('UploadFileComponent', () => {
  let component: UploadFileComponent;
  let fixture: ComponentFixture<UploadFileComponent>;
  let papa: Papa;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileComponent, IssueTableComponent, UploadDialogComponent],
      providers: [ AppComponent,
        {
          provide: CsvParserService,
          useValue: new CsvParserService(papa)
        },
      ],
      imports: [ ReactiveFormsModule, FormsModule, MatCardModule, MatFormFieldModule, MatDialogModule,
        BrowserAnimationsModule ]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ UploadDialogComponent ],
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.dialog, 'open').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the file upload dialog', () => {
    component.openFileDialog();
    component.closeDialog('');
    expect(component.dialog.open).toHaveBeenCalled();
    fixture.detectChanges(); // this closes the dialog
  });
});
