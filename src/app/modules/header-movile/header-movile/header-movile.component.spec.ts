import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMovileComponent } from './header-movile.component';

describe('HeaderMovileComponent', () => {
  let component: HeaderMovileComponent;
  let fixture: ComponentFixture<HeaderMovileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMovileComponent]
    });
    fixture = TestBed.createComponent(HeaderMovileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
