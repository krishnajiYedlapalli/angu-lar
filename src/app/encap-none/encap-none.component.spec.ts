import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapNoneComponent } from './encap-none.component';

describe('EncapNoneComponent', () => {
  let component: EncapNoneComponent;
  let fixture: ComponentFixture<EncapNoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapNoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
