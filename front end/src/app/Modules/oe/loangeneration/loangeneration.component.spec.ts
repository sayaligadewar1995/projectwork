import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoangenerationComponent } from './loangeneration.component';

describe('LoangenerationComponent', () => {
  let component: LoangenerationComponent;
  let fixture: ComponentFixture<LoangenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoangenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoangenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
