import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefetchExampleComponent } from './prefetch-example.component';

describe('PrefetchExampleComponent', () => {
  let component: PrefetchExampleComponent;
  let fixture: ComponentFixture<PrefetchExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrefetchExampleComponent]
    });
    fixture = TestBed.createComponent(PrefetchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
