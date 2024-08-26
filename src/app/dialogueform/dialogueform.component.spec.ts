import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueformComponent } from './dialogueform.component';

describe('DialogueformComponent', () => {
  let component: DialogueformComponent;
  let fixture: ComponentFixture<DialogueformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogueformComponent]
    });
    fixture = TestBed.createComponent(DialogueformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
