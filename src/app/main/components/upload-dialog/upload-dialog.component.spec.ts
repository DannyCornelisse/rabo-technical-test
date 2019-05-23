import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDialogComponent } from './upload-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

describe('UploadDialogComponent', () => {
  let component: UploadDialogComponent;
  let fixture: ComponentFixture<UploadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDialogComponent ],
      imports: [ReactiveFormsModule, FormsModule, MatDialogModule],
      providers: [{
        provide: MatDialogRef,
        useValue: {
          close: (val) => {}
        }
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.dialogRef, 'close').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should attach data prop when dialog closes', () => {
    component.data = '"test", "tetsy"';
    component.onSubmit();
    expect(component.dialogRef.close).toHaveBeenCalledWith(component.data);
  });
});
