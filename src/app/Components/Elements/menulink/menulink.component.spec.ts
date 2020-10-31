import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulinkComponent } from './menulink.component';

describe('MenulinkComponent', () => {
  let component: MenulinkComponent;
  let fixture: ComponentFixture<MenulinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
