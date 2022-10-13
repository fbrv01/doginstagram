import { getTestBed, TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAlldogs', () => {
    it('should return an Observable<dogs[]>', () => {
      const dummyDogs = [{ dog1: 'John' }, { dog2: 'Doe' }];

      service.getAllDogsList().subscribe((dogs) => {
        expect(dogs).toEqual(dummyDogs);
      });

      const req = httpMock.expectOne(`https://dog.ceo/api/breeds/list/all`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyDogs);
    });
  });

  describe('#getImageByBreed', () => {
    it('should return an Observable<dogs[]>', () => {
      const dummyImage = [{ img_name: 'name1' }];

      service.getImageByBreed('test').subscribe((img) => {
        expect(img).toEqual(dummyImage);
      });

      const req = httpMock.expectOne(
        `https://dog.ceo/api/breed/test/images/random`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyImage);
    });
  });
});
