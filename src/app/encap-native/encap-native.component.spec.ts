import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapNativeComponent } from './encap-native.component';

describe('EncapNativeComponent', () => {
  let component: EncapNativeComponent;
  let fixture: ComponentFixture<EncapNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapNativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
