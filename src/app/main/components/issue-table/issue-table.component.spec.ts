import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTableComponent } from './issue-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

describe('IssueTableComponent', () => {
  let component: IssueTableComponent;
  let fixture: ComponentFixture<IssueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTableComponent ],
      imports: [ MatFormFieldModule, MatInputModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table data and parse', () => {
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
    component.ngOnChanges({
      tableData: {
        previousValue: '',
        currentValue,
        firstChange: true, isFirstChange: () => true
      }
    });
    expect(component.table).toBeDefined();
    expect(component.table.headings).toEqual(currentValue.shift());
    expect(component.table.people).toEqual(currentValue);
  });
});
