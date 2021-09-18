import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCOmpComponent } from './test-comp.component';

describe('TestCOmpComponent', () => {
  let component: TestCOmpComponent;
  let fixture: ComponentFixture<TestCOmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCOmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCOmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
