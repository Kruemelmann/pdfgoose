import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderComponent } from './render.component';

describe('RenderComponent', () => {
  let component: RenderComponent;
  let fixture: ComponentFixture<RenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderComponent]
    });
    fixture = TestBed.createComponent(RenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
