import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { spyOnClass } from 'jasmine-es6-spies';
import { DataService } from 'src/services/data.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dataService: jasmine.SpyObj<DataService>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        {provide: DataService, useFactory: () => spyOnClass(DataService)}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    dataService = TestBed.get(DataService);

    dataService.getHomes.and.returnValue(of<any>([
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
      },
    ]));

    fixture.detectChanges();
  })

  it('should show home', () => {
    
    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);

  });

  it('should show home', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    expect(home.querySelector('[data-test="location"]').innerText).toEqual('Boston');
    expect(home.querySelector('[data-test="image"]')).toBeTruthy();
  });
});
