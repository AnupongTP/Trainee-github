import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodialogComponent } from './infodialog.component';

describe('InfodialogComponent', () => {
  let component: InfodialogComponent;
  let fixture: ComponentFixture<InfodialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfodialogComponent]
    });
    fixture = TestBed.createComponent(InfodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
