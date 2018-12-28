import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  const service: ApiService;
  const httpMock: HttpTestingController


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be var baseUrl same as in environment', () => {
    expect(service.baseUrl).toBe(environment.api_url);
  });

  it('get function should return Observable<T>', () => {
    service.get('/foo').subscribe(result => {

      console.log('result', result);

    });
  });

  it('should return an Observable<User[]>', () => {
    const dummyUsers = [
      { login: 'John' },
      { login: 'Doe' }
    ];

    service.get('/users').subscribe((users: User[]) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne(`${service.baseUrl}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });
});

});
