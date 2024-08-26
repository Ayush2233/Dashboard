import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetlistComponent } from './widgetlist.component';

describe('WidgetlistComponent', () => {
  let component: WidgetlistComponent;
  let fixture: ComponentFixture<WidgetlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetlistComponent]
    });
    fixture = TestBed.createComponent(WidgetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
