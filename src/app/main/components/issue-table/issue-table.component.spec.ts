import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTableComponent } from './issue-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const currentValue = [
  [
    "First name",
    "Sur name",
    "Issue count",
    "Date of birth"
  ],
  [
    "Theo",
    "Jansen",
    "5",
    "1978-01-02T00:00:00"
  ],
  [
    "Fiona",
    "de Vries",
    "7",
    "1950-11-12T00:00:00"
  ],
  [
    "Petra",
    "Boersma",
    "1",
    "2001-04-20T00:00:00"
  ]
];

describe('IssueTableComponent', () => {
  let component: IssueTableComponent;
  let fixture: ComponentFixture<IssueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTableComponent ],
      imports: [ MatFormFieldModule, MatInputModule, FormsModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnChanges({
      tableData: {
        previousValue: '',
        currentValue,
        firstChange: true, isFirstChange: () => true
      }
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table data and parse', () => {
    expect(component.table).toBeDefined();
    expect(component.table.headings).toEqual(currentValue.shift());
    expect(component.table.people).toEqual(currentValue);
  });

  fit('should filter by minimal issue count', () => {
    component.minIssueCount = 4;
    fixture.detectChanges();
    const tableEl = fixture.nativeElement;
    const tmpCurrentValue = currentValue;
    tmpCurrentValue.shift(); // remove headings
    const minIssues = tmpCurrentValue.filter(person => parseInt(person[2], 10) >= component.minIssueCount).length;
    expect(tableEl.querySelectorAll('.issue-table__people-row').length).toEqual(minIssues);
  });
});
