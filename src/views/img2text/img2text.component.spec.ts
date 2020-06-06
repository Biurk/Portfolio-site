import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Img2textComponent } from './img2text.component';

describe('Img2textComponent', () => {
  let component: Img2textComponent;
  let fixture: ComponentFixture<Img2textComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Img2textComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Img2textComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
