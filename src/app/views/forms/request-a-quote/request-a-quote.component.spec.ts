import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAQuoteComponent } from './request-a-quote.component';

describe('RequestAQuoteComponent', () => {
  let component: RequestAQuoteComponent;
  let fixture: ComponentFixture<RequestAQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestAQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestAQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
