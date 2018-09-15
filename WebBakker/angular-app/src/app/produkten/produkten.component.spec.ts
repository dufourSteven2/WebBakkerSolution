import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktenComponent } from './produkten.component';

describe('ProduktenComponent', () => {
  let component: ProduktenComponent;
  let fixture: ComponentFixture<ProduktenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduktenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
