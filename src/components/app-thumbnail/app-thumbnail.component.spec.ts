import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThumbnailComponent } from './app-thumbnail.component';

describe('AppThumbnailComponent', () => {
  let component: AppThumbnailComponent;
  let fixture: ComponentFixture<AppThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
