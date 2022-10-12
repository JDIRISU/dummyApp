import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  homes: any;

  constructor(public restService: DataService) { }
  

  ngOnInit(): void {
    this.homes = this.restService.getHomes();
  }

}
