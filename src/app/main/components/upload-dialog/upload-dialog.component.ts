import { Component, OnInit, Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'rabo-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {
  formGroup: FormGroup;
  private csvData: string|ArrayBuffer;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: string|ArrayBuffer,
    public dialogRef: MatDialogRef<UploadDialogComponent>,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      file: [null, Validators.required]
    });
  }

  onSubmit() {
    this.data = this.csvData;
    this.dialogRef.close(this.data);
  }

  /**
   *
   * @param e {any}
   */
  onFileChange(e: any): void {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const [file] = e.target.files;
      reader.readAsText(file);

      reader.onload = () => {
        this.csvData = reader.result;
      };
    }
  }

}
