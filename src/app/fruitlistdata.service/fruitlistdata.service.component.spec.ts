import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitlistdataServiceComponent } from './fruitlistdata.service.component';

describe('FruitlistdataServiceComponent', () => {
  let component: FruitlistdataServiceComponent;
  let fixture: ComponentFixture<FruitlistdataServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitlistdataServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitlistdataServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
