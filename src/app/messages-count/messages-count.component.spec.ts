import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesCountComponent } from './messages-count.component';

describe('MessagesCountComponent', () => {
  let component: MessagesCountComponent;
  let fixture: ComponentFixture<MessagesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
