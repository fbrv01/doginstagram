import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [HttpClientTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PsIntagram'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PsIntagram');
  });

  describe('selectDog', () => {
    it('should set the correct wikipedia url, when event is given', () => {
      const event = { target: { value: 'TTTTT' } };
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.selectDog(event);
      expect(app.wikipediaUrl).toEqual('https://en.wikipedia.org/wiki/TTTTT');
    });

    it('should return set wikipedia entry to null, when given event is undefined', () => {
      const event = { target: { value: undefined } };
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.selectDog(event);
      expect(app.wikipediaUrl).toBeNull();
    });
  });

  describe('getKeys', () => {
    it('should return the correctKeys for Breeds', () => {
      const sampleBreed = {
        name: 'Breed1',
        size: 'big',
        hasChildren: false,
      };
      const expectedResult = ['name', 'size', 'hasChildren'];
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.getKeys(sampleBreed)).toEqual(expectedResult);
    });

    it('should return an empty array when no breeds are give', () => {
      const sampleBreed = null;
      const expectedResult: any[] = [];
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.getKeys(sampleBreed)).toEqual(expectedResult);
    });
  });
});
