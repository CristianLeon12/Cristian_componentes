import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirdlistComponent } from './girdlist.component';

describe('GirdlistComponent', () => {
  let component: GirdlistComponent;
  let fixture: ComponentFixture<GirdlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirdlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GirdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
