import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolpitComponent } from './toolpit.component';

describe('ToolpitComponent', () => {
  let component: ToolpitComponent;
  let fixture: ComponentFixture<ToolpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolpitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
