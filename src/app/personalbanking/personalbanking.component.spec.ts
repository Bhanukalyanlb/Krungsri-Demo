import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalbankingComponent } from './personalbanking.component';

describe('PersonalbankingComponent', () => {
  let component: PersonalbankingComponent;
  let fixture: ComponentFixture<PersonalbankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalbankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalbankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
