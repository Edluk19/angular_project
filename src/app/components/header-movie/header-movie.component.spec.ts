import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMovieComponent } from './header-movie.component';

describe('HeaderMovieComponent', () => {
  let component: HeaderMovieComponent;
  let fixture: ComponentFixture<HeaderMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
