import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutorialComponent } from './add-test-uv-web.component';

describe('AddTutorialComponent', () => {
  let component: AddTutorialComponent;
  let fixture: ComponentFixture<AddTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTutorialComponent]
    });
    fixture = TestBed.createComponent(AddTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
