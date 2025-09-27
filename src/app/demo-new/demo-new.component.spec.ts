import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNewComponent } from './demo-new.component';

describe('DemoNewComponent', () => {
  let component: DemoNewComponent;
  let fixture: ComponentFixture<DemoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
