import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of, Subscriber } from 'rxjs';

describe('DataService', () => {
  let dataService: DataService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]});
  });

  it('should return list of Homes', () => {
    //Spy on and mock the HttpClient
    httpClient = TestBed.get(HttpClient);
    const mockedHomes = [
      {
        title: "Home 1",
        image: "assets/images/logomain.png",
        location: "Boston",
      },
      {
        title: "Home 2",
        image: "assets/images/logomain.png",
        location: "California",
      },
      {
        title: "Home 3",
        image: "assets/images/logomain.png",
        location: "Lagos",
      }
    ];
    spyOn(httpClient, 'get').and.returnValue(of<any>(mockedHomes));

    //Use our service to get Homes
    dataService = TestBed.get(DataService);
    const spy = jasmine.createSpy('spy');
    dataService.getHomes().subscribe(spy);

    //Verify that service returned mocked data
    expect(spy).toHaveBeenCalledWith(mockedHomes);

    //Verify that right endpoint was called
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });
});
