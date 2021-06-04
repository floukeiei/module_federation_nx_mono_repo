import { Component, OnInit } from '@angular/core';
import { NumberService } from '@shared/services/number.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor( public numberS: NumberService) { }

  ngOnInit() {
  }

}
