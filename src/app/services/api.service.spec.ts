import {getTestBed, TestBed} from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { environment as envProd } from '../../environments/environment.prod';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {User} from '../models/user';

describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;
  const dummyUsers: User[] = [
    {ID: 1, UserName: 'John', Password: 'pass1'},
    {ID: 1, UserName: 'Doe', Password: 'pass2'}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be not empty dev environment api_url', () => {
    expect(environment.api_url).toBeDefined();
  });

  it('should be not empty prod environment api_url', () => {
    expect(envProd.api_url).toBeDefined();
  });

  it('should be var baseUrl same as in environment', () => {
    expect(service.baseUrl).toBe(environment.api_url);
  });

  // it('should return an Observable<User[]>', () => {
  //   service.get('/Users').subscribe((users: User[]) => {
  //     expect(users.length).toBe(10);
  //     expect(users).toEqual(dummyUsers);
  //   });
  // });

  it('should get list with method get', () => {
    service.get('/Users').subscribe((users: User[]) => {
      expect(users.length).toBe(10);
      expect(users).toEqual(dummyUsers);
    });
    const req = httpMock.expectOne(`${service.baseUrl}/Users`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

});
