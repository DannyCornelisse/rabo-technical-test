import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { MaterialModule } from './material/material.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [MaterialModule, MainModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
